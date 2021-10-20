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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../user/user.repository");
const typeorm_1 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../../entity/user.entity");
const user_device_detail_entity_1 = require("../../entity/user-device-detail.entity");
const md5 = require("md5");
const common_config_1 = require("../../exceptions/common.config");
let AuthService = class AuthService {
    constructor(userRepository, jwtService) {
        this.userRepository = userRepository;
        this.jwtService = jwtService;
    }
    async login(createUserDto) {
        const { phoneNo } = createUserDto;
        const userExist = await this.userRepository.findOne({ phoneNo });
        let loginvia = "";
        if (!userExist) {
            const { device_type, device_token, os_version, app_version, device_model, } = createUserDto;
            const { phoneNo } = createUserDto;
            let user = new user_entity_1.User();
            user.phoneNo = phoneNo;
            await user.save();
            loginvia = device_type == 1 ? "android" : "ios";
            let dateObj = new Date();
            let newToken = md5(dateObj);
            let device = new user_device_detail_entity_1.UserDeviceDetail();
            device.deviceType = device_type;
            device.deviceToken = device_token || "";
            device.deviceModel = device_model;
            device.accessToken = newToken;
            device.appVersion = app_version;
            device.osVersion = os_version;
            device.createdDate = new Date();
            device.user = user;
            console.log(device);
            console.log(user);
            console.log("new user created");
            await device.save();
            const payload = { phoneNo };
            const accessToken = this.jwtService.sign(payload);
            return { accessToken };
        }
        else {
            const { device_token } = createUserDto;
            const userdevice = await user_device_detail_entity_1.UserDeviceDetail.findOne({
                deviceToken: device_token,
            });
            if (!userdevice) {
                const { device_type, device_token, os_version, app_version, device_model, phoneNo, } = createUserDto;
                const userde = this.userRepository.findOne({ phoneNo });
                loginvia = device_type == 1 ? "android" : "ios";
                let dateObj = new Date();
                let newToken = md5(dateObj);
                let device = new user_device_detail_entity_1.UserDeviceDetail();
                device.deviceType = device_type;
                device.deviceToken = device_token || "";
                device.deviceModel = device_model;
                device.accessToken = newToken;
                device.appVersion = app_version;
                device.osVersion = os_version;
                device.createdDate = new Date();
                device.userId = (await userde).id;
                console.log(device);
                await device.save();
            }
            const payload = { phoneNo };
            const accessToken = this.jwtService.sign(payload);
            console.log("login ");
            return { accessToken };
        }
    }
    async logout(logoutdto, user) {
        try {
            const { device_token } = logoutdto;
            const userExist = await this.userRepository.findOne({ id: user.id });
            if (userExist) {
                user_device_detail_entity_1.UserDeviceDetail.findOne({
                    where: { userId: user.id, deviceToken: device_token },
                });
                await user_device_detail_entity_1.UserDeviceDetail.delete({ userId: user.id });
                const userData = { message: `Logged out successfully.` };
                return userData;
            }
            else {
                throw new common_1.NotFoundException(`Invalid user device! Please enter correct user id&&&user_id&&&${common_config_1.errorMessage}`);
            }
        }
        catch (error) {
            throw new common_1.NotFoundException(`Invalid user! Please enter correct user .&&&user&&&${common_config_1.errorMessage}`);
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_repository_1.UserRepository)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map