/*
 * @Autor: huasenjio
 * @Date: 2022-10-29 12:26:43
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-05-14 12:15:50
 * @Description: 日志接口地址
 */

import { get, post } from '../request.js';

const findRecordByPage = post('/record/findByPage');
const removeRecord = post('/record/remove');
const removeManyRecord = post('/record/removeMany');
const copyRecord = post('/record/copy');

export { findRecordByPage, removeRecord, removeManyRecord, copyRecord };
