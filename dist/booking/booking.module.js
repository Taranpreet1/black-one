"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("../auth/auth.module");
const dates_repository_1 = require("../dates/dates.repository");
const booking_controller_1 = require("./booking.controller");
const booking_repository_1 = require("./booking.repository");
const booking_service_1 = require("./booking.service");
let BookingModule = class BookingModule {
};
BookingModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([booking_repository_1.BookingRepository]), auth_module_1.AuthModule],
        controllers: [booking_controller_1.BookingController],
        providers: [booking_service_1.BookingService]
    })
], BookingModule);
exports.BookingModule = BookingModule;
//# sourceMappingURL=booking.module.js.map