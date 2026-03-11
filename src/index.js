res.sendFile(path.join(__dirname, '../views/index.html'));
app.use(express.static('public'));

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Chào mừng bạn đến với dự án Node.js!');
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});