/*
 * @Autor: huasenjio
 * @Date: 2021-08-21 21:07:58
 * @LastEditors: huasenjio
 * @LastEditTime: 2023-03-19 15:18:57
 * @Description: 订阅路由
 */

const express = require('express');
const router = express.Router();
const { add, findByPage, remove, update, findByCode, findAll, findJournalInformationById } = require('../controller/journal.controller.js');
const { handleJWT, handleUselessParams } = require('../middleware/common.middleware.js');
const { checkManagePower } = require('../middleware/power.middleware.js');

router.post('/add', handleJWT(), checkManagePower, handleUselessParams, add);
router.post('/remove', handleJWT(), checkManagePower, remove);
router.post('/update', handleJWT(), checkManagePower, update);
router.post('/findByCode', handleJWT(), checkManagePower, findByCode);
router.post('/findByPage', handleJWT(), checkManagePower, findByPage);

// 用户调用
router.post('/findAll', handleJWT(false), findAll);
router.post('/findJournalInformationById', handleJWT(false), findJournalInformationById);

module.exports = router;
