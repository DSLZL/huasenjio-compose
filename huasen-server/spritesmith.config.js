const path = require('path');
// 图标类名前缀
const classPrefix = 'icon-lhs';
const iconPath = path.resolve(__dirname, './public/sprite/source'); // 图标的位置
const spriteImgPath = path.resolve(__dirname, './public/sprite/output/sprite.png'); // 输出精灵图的位置
const spriteCssPath = path.resolve(__dirname, './public/sprite/output/sprite.css'); // 输出精灵样式的位置

/**
 * 图标编译函数
 * @param {Object} data 图片信息
 */
const templateFunction = function (data) {
  let shared = `.${classPrefix} { background-image: url(I);background-size: Wpx Hpx;}`.replace('I', data.sprites[0].image).replace('W', data.spritesheet.width).replace('H', data.spritesheet.height);

  let perSprite = data.sprites
    .map(function (sprite) {
      return (
        `.${classPrefix}-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }`
          .replace('N', sprite.name) // 精灵的名字
          // 固定精灵图的宽高
          // .replace('W', 50) // 精灵的宽度
          // .replace('H', 50) // 精灵的高度

          // 精灵图宽高根据图片框高
          .replace('W', sprite.width) // 精灵的宽度
          .replace('H', sprite.height) // 精灵的高度
          .replace('X', sprite.offset_x) // 精灵在精灵图中的x偏移
          .replace('Y', sprite.offset_y)
      ); // 精灵在精灵图中的y偏移
    })
    .join('\n');
  return shared + '\n' + perSprite;
};

module.exports = {
  templateFunction,

  iconPath,
  spriteImgPath,
  spriteCssPath,
};
