const Database = require('./database.js');

// 创建数据库对象并连接到 example.db
const db = new Database('mindata.sqlite');

// 查询数据库
const sql = 'SELECT * FROM Users';
const params = [];
db.query(sql, params, (err, rows) => {
    if (err) {
        console.error('Error querying database', err);
    } else {
        // 处理查询结果
        console.log(rows);
    }

    // 关闭数据库连接
    db.close();
});
