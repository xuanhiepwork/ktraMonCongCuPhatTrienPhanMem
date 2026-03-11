const express = require('express');
const path = require('path'); // Cần thiết để xử lý đường dẫn file
const app = express();
const PORT = 3000;

// 1. Cấu hình phục vụ file tĩnh (CSS, Images, JS của frontend)
// Nó sẽ tìm trong thư mục 'public'
app.use(express.static(path.join(__dirname, '../public')));

// 2. Định nghĩa Route chính để trả về file index.html
app.get('/', (req, res) => {
    // __dirname là thư mục chứa file index.js (tức là thư mục src)
    // '../views/index.html' giúp đi ra ngoài src rồi vào views
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// 3. Khởi chạy Server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});

app.use(express.urlencoded({ extended: true })); // Để đọc dữ liệu từ Form

// Route xử lý đăng nhập
app.post('/login', (req, res) => {
    // Lưu ý: txtUserName và txtpassword phải khớp với thuộc tính 'name' trong file HTML
    const username = req.body.txtUserName;
    const password = req.body.txtpassword;

    if (username === 'admin' && password === 'admin') {
        // Chuyển hướng sang trang thành công (Bạn nhớ tạo file thành công nhé)
        res.send(`
            <h1>Đăng nhập thành công!</h1>
            <p>Chào mừng Admin.</p>
            <a href="/">Quay lại</a>
        `);
    } else {
        res.send('<h1>Đăng nhập thất bại!</h1><p>Sai tài khoản hoặc mật khẩu.</p><a href="/">Thử lại</a>');
    }
});