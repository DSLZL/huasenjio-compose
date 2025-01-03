/*
 * @Autor: huasenjio
 * @Date: 2021-11-15 22:14:23
 * @LastEditors: huasenjio
 * @LastEditTime: 2022-12-11 11:00:44
 * @Description:
 */
import { handleURL } from './handleURL';
import { copyObject } from './copyObject';
import { copyTextToClip } from './copyTextToClip';
import { exchangeArrayItem } from './exchangeArrayItem';
import { getBase64 } from './getBase64';
import { getCDN } from './getCDN';
import { debounce } from './debounce';
import { getServerApi } from './getServerApi.js';
import { getUid } from './getUid';
import { handleSize } from './handleSize.js';
import { judgeIE } from './judgeIE';
import { timeout2Interval } from './timeout2Interval';
import { randomColor } from './randomColor';
import { stringToMD5 } from './stringToMD5';
import { overrideKeys } from './lodash-lib.js';

export default {
  handleURL,
  copyObject,
  copyTextToClip,
  exchangeArrayItem,
  getBase64,
  getCDN,
  debounce,
  getServerApi,
  getUid,
  handleSize,
  judgeIE,
  timeout2Interval,
  randomColor,
  stringToMD5,
  overrideKeys,
};
