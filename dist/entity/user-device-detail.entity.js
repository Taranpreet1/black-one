"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDeviceDetail = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserDeviceDetail = class UserDeviceDetail extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "integer", name: "id" }),
    __metadata("design:type", Number)
], UserDeviceDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("integer", { name: "device_type" }),
    __metadata("design:type", Number)
], UserDeviceDetail.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "device_token",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], UserDeviceDetail.prototype, "deviceToken", void 0);
__decorate([
    (0, typeorm_1.Column)("text", { name: "access_token", nullable: true }),
    __metadata("design:type", String)
], UserDeviceDetail.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "app_version",
        nullable: true,
        length: 10
    }),
    __metadata("design:type", String)
], UserDeviceDetail.prototype, "appVersion", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "os_version",
        nullable: true,
        length: 10
    }),
    __metadata("design:type", String)
], UserDeviceDetail.prototype, "osVersion", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "created_date", nullable: true }),
    __metadata("design:type", Date)
], UserDeviceDetail.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)("timestamp with time zone", { name: "updated_date", nullable: true }),
    __metadata("design:type", Date)
], UserDeviceDetail.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.Column)("uuid", { name: "user_id", nullable: true }),
    __metadata("design:type", String)
], UserDeviceDetail.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)("character varying", {
        name: "device_model",
        nullable: true,
        length: 255
    }),
    __metadata("design:type", String)
], UserDeviceDetail.prototype, "deviceModel", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.userDeviceDetails, { eager: false }),
    (0, typeorm_1.JoinColumn)([{ name: "user_id", referencedColumnName: "id" }]),
    __metadata("design:type", user_entity_1.User)
], UserDeviceDetail.prototype, "user", void 0);
UserDeviceDetail = __decorate([
    (0, typeorm_1.Entity)("user_device_detail")
], UserDeviceDetail);
exports.UserDeviceDetail = UserDeviceDetail;
//# sourceMappingURL=user-device-detail.entity.js.map