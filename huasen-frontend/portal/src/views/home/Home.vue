<!--
 * @Autor: huasenjio
 * @Date: 2022-07-31 21:51:50
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-28 01:04:33
 * @Description: 
-->
<template>
  <div class="home">
    <!-- 背景 -->
    <HomeWallpaper></HomeWallpaper>
    <!-- 主要内容 -->
    <section class="content">
      <HomeHead :headBgConfig="headBgConfig"></HomeHead>
      <main ref="homeContent" class="home-content">
        <HomeSearch></HomeSearch>
        <HomeRecord></HomeRecord>
        <HomeNav v-if="!categoryEmpty"></HomeNav>
        <HomeSite ref="siteContent" v-if="!categoryEmpty"></HomeSite>
        <!-- 空内容展示 -->
        <div v-if="categoryEmpty" class="empty-panel">
          <Empty></Empty>
        </div>
      </main>
    </section>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex';

import Bus from '@/plugin/event-bus.js';
import * as BusType from '@/plugin/event-type.js';

import HomeHead from './head/HomeHead.vue';
import HomeWallpaper from './wallpaper/HomeWallpaper.vue';
import HomeSearch from './search/HomeSearch.vue';
import HomeRecord from './record/HomeRecord.vue';
import HomeNav from './nav/HomeNav.vue';
import HomeSite from './site/HomeSite.vue';

import Empty from '@/components/content/empty/Empty.vue';

export default {
  name: 'Home',
  components: { HomeHead, HomeWallpaper, HomeSearch, HomeRecord, HomeNav, HomeSite, Empty },
  data() {
    return {
      headBgConfig: {
        clear: true,
        white: false,
        grossGlass: false,
      },
    };
  },
  computed: {
    ...mapState(['categorySites']),
    categoryEmpty() {
      return this.categorySites.length === 0 ? true : false;
    },
  },
  // 避免路由缓存切换时，顶部栏背景异常问题，手动触发事件
  watch: {
    '$route.path': {
      handler(nV, oV) {
        if (nV === '/home') {
          let event = new Event('scroll', { bubbles: true, cancelable: false });
          this.$refs.homeContent.dispatchEvent(event);
        }
      },
    },
  },
  mounted() {
    this.initScrollEvent();
    this.initEventBus();
    this.initLocalThemeInfo();

    // 创建事件总线
    Bus.pubEv(BusType.HOME_CREATE_KEYUP_SLASH);
  },
  destroyed() {
    // 先销毁keyup
    Bus.pubEv(BusType.HOME_DESTROY_KEYUP_SLASH);

    Bus.unSubEv(BusType.HOME_SCROLL_TO);
    Bus.unSubEv(BusType.HOME_CREATE_KEYUP_SLASH);
    Bus.unSubEv(BusType.HOME_DESTROY_KEYUP_SLASH);
  },
  methods: {
    ...mapMutations(['commitAll']),
    ...mapActions(['initLocalThemeInfo']),

    handleHomeSearchFucos(event) {
      Bus.pubEv(BusType.HOME_FUCOS, event.key);
    },

    initScrollEvent() {
      let debounce = this.LODASH.debounce(event => {
        let temp = {
          clear: false,
          white: false,
          grossGlass: false,
        };
        if (event.target.scrollTop > 210) {
          this.commitAll({
            showWrapSidebarSocket: true,
          });
          temp.white = true;
        } else if (event.target.scrollTop > 30) {
          this.commitAll({
            showWrapSidebarSocket: true,
          });
          temp.grossGlass = true;
        } else {
          this.commitAll({
            showWrapSidebarSocket: false,
          });
          temp.clear = true;
        }
        this.headBgConfig = temp;
      }, 10);

      this.$refs.homeContent.addEventListener('scroll', debounce);
      this.$once('hook:beforeDestory', () => {
        this.$refs.homeContent.removeEventListener('scroll', debounce);
      });
    },

    initEventBus() {
      Bus.subEv(BusType.HOME_SCROLL_TO, (top, isTop) => {
        let y = isTop ? top : this.$refs.siteContent.$el.offsetTop - 85 + top;
        this.homeContentScrollTo(y);
      });

      // 初始化聚焦事件总线 slash
      Bus.subEv(BusType.HOME_CREATE_KEYUP_SLASH, () => {
        document.addEventListener('keyup', this.handleHomeSearchFucos);
      });
      Bus.subEv(BusType.HOME_DESTROY_KEYUP_SLASH, () => {
        document.removeEventListener('keyup', this.handleHomeSearchFucos);
      });
    },

    homeContentScrollTo(y) {
      this.$refs.homeContent.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .content {
    width: 100%;
    height: 100%;
    background-color: var(--gray-0);
    z-index: 1;
    .home-content {
      position: relative;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      overflow-x: hidden;
      overflow-y: auto;
      .empty-panel {
        width: 100%;
        height: 100%;
        padding: 10px;
        background-color: var(--gray-50);
        box-sizing: border-box;
      }
    }
  }
}
</style>
