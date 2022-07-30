const express = require('express');
const app = express();

app.get('/getData', (req, res) => {
  res.json({
    index: 1,
  });
});

const server = app.listen(8088, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
