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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const common_config_1 = require("../../exceptions/common.config");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        description: `Enter phoneNo`,
        example: `9863746374`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phoneNo", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: `Please enter your device type.&&&device_type&&&${common_config_1.errorMessage}`,
    }),
    (0, swagger_1.ApiProperty)({
        description: `Device Type`,
        example: 1,
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "device_type", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: `Please enter your device model.&&&device_model&&&${common_config_1.errorMessage}`,
    }),
    (0, swagger_1.ApiProperty)({
        description: `Device Model`,
        example: "RNE-L22",
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "device_model", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: `Please enter your device token.&&&device_token&&&${common_config_1.errorMessage}`,
    }),
    (0, swagger_1.ApiProperty)({
        description: `Device Token`,
        example: `123abc#$%456`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "device_token", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: `Please enter your app version.&&&app_version&&&${common_config_1.errorMessage}`,
    }),
    (0, swagger_1.ApiProperty)({
        description: `App Version`,
        example: `1.0`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "app_version", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({
        message: `Please enter your os version. &&&os_version&&&${common_config_1.errorMessage}`,
    }),
    (0, swagger_1.ApiProperty)({
        description: `OS Version`,
        example: `7.0`,
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "os_version", void 0);
exports.CreateUserDto = CreateUserDto;
//# sourceMappingURL=crete-user.dto.js.map