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

// 2. Route xử lý đăng nhập (đổi thành tiếng Việt)
app.post('/dang-nhap', (req, res) => {
    const { txtUserName, txtpassword } = req.body;
    console.log(`Tiến trình xử lý đăng nhập cho: ${txtUserName}`);

    // Kiểm tra tài khoản admin/admin
    if (txtUserName === 'admin' && txtpassword === 'admin') {
        console.log("Xác thực thành công. Chuyển hướng...");
        res.sendFile(path.join(__dirname, '../views/success.html'));
    } else {
        res.status(401).send('Tài khoản hoặc mật khẩu không chính xác!');
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});