const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// CẤU HÌNH MIDDLEWARE (Phải đặt ở đây)
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// 1. Route trang chủ
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// 2. Route xử lý đăng nhập
app.post('/login', (req, res) => {
    const username = req.body.txtUserName;
    const password = req.body.txtpassword;

    if (username === 'admin' && password === 'admin') {
        res.send(`
            <div style="text-align: center; margin-top: 50px;">
                <h1 style="color: green;">Đăng nhập thành công!</h1>
                <p>Chào mừng Admin hệ thống.</p>
                <a href="/">Quay lại trang chủ</a>
            </div>
        `);
    } else {
        res.send(`
            <div style="text-align: center; margin-top: 50px;">
                <h1 style="color: red;">Đăng nhập thất bại!</h1>
                <p>Sai tài khoản hoặc mật khẩu.</p>
                <a href="/">Thử lại</a>
            </div>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});