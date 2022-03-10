// 配置文件

const config = {
    // 配置环境变量
    port: process.env.port || 3000,
    // 数据库配置
    db: {
        database: 'games_plat',
        username: 'root',
        password: '119728',
        host: '1.12.181.98',
        port: '3306',
        timezone: '+08:00', //时区
        dialect: 'mysql', //方言
        define: {
            timestamps: false
        }

    }
}

export default config;