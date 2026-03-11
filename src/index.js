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