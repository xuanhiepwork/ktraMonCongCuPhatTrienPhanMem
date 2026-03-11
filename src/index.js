const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// 1. Route trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});



app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});