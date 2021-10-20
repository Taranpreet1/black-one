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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const swagger_1 = require("@nestjs/swagger");
const get_user_decorator_1 = require("../../decorator/get-user.decorator");
const user_entity_1 = require("../../entity/user.entity");
const booking_service_1 = require("./booking.service");
const create_user_booking_dto_1 = require("./dto/create-user-booking.dto");
const create_mul_booking_dto_1 = require("./dto/create.mul.booking.dto");
let BookingController = class BookingController {
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    createUserbooking(createUserBookingDto, user) {
        return this.bookingService.createUserBooking(createUserBookingDto, user);
    }
    createUserMulbooking(createMulDto, user) {
        return this.bookingService.createMulBooking(createMulDto, user);
    }
};
__decorate([
    (0, common_1.Post)("/create-booking"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiOperation)({ summary: "create booking for single date and single slot" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }),
    (0, swagger_1.ApiResponse)({ status: 422, description: "Bad Request or API error message" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Not found!" }),
    (0, swagger_1.ApiResponse)({ status: 409, description: "User Already Exist" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_booking_dto_1.CreateUserBookingDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createUserbooking", null);
__decorate([
    (0, common_1.Post)("/create"),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)()),
    (0, swagger_1.ApiOperation)({ summary: "create booking for multiple date and slots" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }),
    (0, swagger_1.ApiResponse)({ status: 422, description: "Bad Request or API error message" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Not found!" }),
    (0, swagger_1.ApiResponse)({ status: 409, description: "User Already Exist" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_mul_booking_dto_1.CreateMulBookingDto,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "createUserMulbooking", null);
BookingController = __decorate([
    (0, swagger_1.ApiTags)("Booking"),
    (0, common_1.Controller)("booking"),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
exports.BookingController = BookingController;
//# sourceMappingURL=booking.controller.js.map