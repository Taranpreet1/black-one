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
exports.CourtController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const court_entity_1 = require("../entity/court.entity");
const court_service_1 = require("./court.service");
const active_deactive_court_dto_1 = require("./dto/active-deactive-court.dto");
const create_court_dto_1 = require("./dto/create-court.dto");
let CourtController = class CourtController {
    constructor(courtService) {
        this.courtService = courtService;
    }
    createRole(createCourtDto) {
        return this.courtService.createCourt(createCourtDto);
    }
    async activeDeactiveCourt(courtId, activeDeactiveDto) {
        return await this.courtService.activeDeactiveCourt(courtId, activeDeactiveDto);
    }
};
__decorate([
    (0, common_1.Post)('/add-Court'),
    (0, swagger_1.ApiOperation)({ summary: 'create new court for booking' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Api success' }),
    (0, swagger_1.ApiResponse)({ status: 422, description: 'Bad Request or API error message' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Not found!' }),
    (0, swagger_1.ApiResponse)({ status: 409, description: 'User Already Exist' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Internal server error!' }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_court_dto_1.CreateCourtDto]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "createRole", null);
__decorate([
    (0, common_1.Patch)("active-deactivte-court/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Active-deactive court" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }),
    (0, swagger_1.ApiResponse)({ status: 422, description: "Bad Request or API error message" }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: "You are not allowed to access this resource.",
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "court not found!" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, active_deactive_court_dto_1.ActiveDeactiveDto]),
    __metadata("design:returntype", Promise)
], CourtController.prototype, "activeDeactiveCourt", null);
CourtController = __decorate([
    (0, swagger_1.ApiTags)('Court'),
    (0, common_1.Controller)('Court'),
    __metadata("design:paramtypes", [court_service_1.CourtService])
], CourtController);
exports.CourtController = CourtController;
//# sourceMappingURL=court.controller.js.map