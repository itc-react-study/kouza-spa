const express = require('express');
const router = express.Router();
const Mock = require('mockjs');
const jsonServer = require('../utils/file_server');
const Random = Mock.Random;

router.get('', (req, res) => {
  const data = jsonServer.getJSON('sample/deviceSpecificInformation.json');
  res.send({ meta: { message: 'success' }, status: 200, data });
});

// get with params
router.get('/getExampleById', (req, res) => {
  let id = '';
  let data = '';
  if (req.query.id) {
    id = req.query.id;
    const name = req.query.name;
    data = jsonServer.getJSON('sample/getExampleById.json');
    res.send({ meta: { message: 'success' }, status: 200, data });
  } else {
    res.send({ meta: { message: 'not found params' }, status: 500, data: '' });
  }
});

// get with params
router.post('/saveExample', (req, res) => {
  let example = req.body.example;
  try {
    example['id'] = '12345';
    res.send({ meta: { message: 'success' }, status: 200, data: example });
  } catch (err) {
    res.send({ meta: { message: 'not found params' }, status: 500, data: '' });
  }
});

// download
router.get('/download', (req, res) => {
  var fileName = req.query.filename;
  jsonServer.downLoadFile(res, 'sample/' + fileName);
});

module.exports = router;
