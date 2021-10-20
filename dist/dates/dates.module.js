"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateModule = void 0;
const common_1 = require("@nestjs/common");
const dates_service_1 = require("./dates.service");
const dates_controller_1 = require("./dates.controller");
const typeorm_1 = require("@nestjs/typeorm");
const dates_repository_1 = require("./dates.repository");
const auth_module_1 = require("../auth/auth.module");
let DateModule = class DateModule {
};
DateModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([dates_repository_1.DateRepository]), auth_module_1.AuthModule],
        providers: [dates_service_1.DateService],
        controllers: [dates_controller_1.DateController]
    })
], DateModule);
exports.DateModule = DateModule;
//# sourceMappingURL=dates.module.js.map