const express = require('express');
const app = express();
const port = 3000;
const moonImgApi = require('./moonImgApi');
const lunarImgApi = require('./lunarImgApi'); // Added import for lunarImgApi
const scheduleApi = require('./scheduleApi'); // Added import for scheduleApi


// 使用路由
app.use(lunarImgApi);
app.use(scheduleApi);
app.use(moonImgApi);



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

