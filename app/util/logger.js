/**
 * 日志工具
 */
const {createLogger, format, transports } = require('winston'); //记录日志

const myFormat = format.printf(log => {
    return `${log.timestamp} ${log.level}: ${log.message}`;
})

//日志级别： info warn error
const logger = createLogger({ //创建日志记录对象
    level: 'info',
    format: format.combine( //使用组合的方式给日志加时间
        format.timestamp(),
        myFormat
    ), 
    transports: [
        //输出日志
        new transports.Console(),
        //指定日志保存文件
        new transports.File({filename: './logs/log.log'})
    ]
})

export default logger;