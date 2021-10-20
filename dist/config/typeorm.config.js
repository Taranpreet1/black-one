"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = void 0;
const config = require("config");
const dbConfig = config.get('db');
exports.typeOrmConfig = {
    type: dbConfig.type,
    host: process.env.RDS_Host || dbConfig.host,
    port: process.env.RDS_Port || dbConfig.port,
    username: process.env.RDS_Username || dbConfig.username,
    password: process.env.RDS_Password || dbConfig.password,
    database: process.env.RDS_Database || dbConfig.database,
    autoLoadEntities: true,
    synchronize: process.env.Typeorm_Sync || dbConfig.synchronize,
};
//# sourceMappingURL=typeorm.config.js.map