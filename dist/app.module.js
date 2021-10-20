"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_config_1 = require("./config/typeorm.config");
const mailer_1 = require("@nestjs-modules/mailer");
const user_module_1 = require("./modules/user/user.module");
const auth_module_1 = require("./modules/auth/auth.module");
const booking_module_1 = require("./modules/booking/booking.module");
const slot_module_1 = require("./modules/slot/slot.module");
const court_module_1 = require("./modules/court/court.module");
const dates_module_1 = require("./modules/dates/dates.module");
const sports_club_module_1 = require("./modules/sports-club/sports-club.module");
const config = require("config");
const mailConfig = config.get("email");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(typeorm_config_1.typeOrmConfig),
            mailer_1.MailerModule.forRoot({
                transport: {
                    host: mailConfig.host,
                    port: mailConfig.port,
                    auth: {
                        user: mailConfig.user,
                        pass: mailConfig.pass,
                    },
                },
            }),
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            booking_module_1.BookingModule,
            slot_module_1.SlotModule,
            court_module_1.CourtModule,
            dates_module_1.DateModule,
            sports_club_module_1.SportsClubModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map