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
exports.SportsClubController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const swagger_1 = require("@nestjs/swagger");
const spots_club_entity_1 = require("../../entity/spots-club.entity");
const create_sportsclub_detail_dto_1 = require("./dto/create-sportsclub-detail.dto");
const sports_club_service_1 = require("./sports-club.service");
const multer_1 = require("multer");
const file_validator_1 = require("./dto/file-validator");
const create_media_dto_1 = require("./dto/create-media.dto");
const media_dto_1 = require("./dto/media.dto");
let SportsClubController = class SportsClubController {
    constructor(sportsclubService) {
        this.sportsclubService = sportsclubService;
    }
    createAddDetails(createClubDto) {
        return this.sportsclubService.createSportsclub(createClubDto);
    }
    addmedia(createmediaDto, files) {
        return this.sportsclubService.addmedia(createmediaDto, files);
    }
    getsportsclubs() {
        return this.sportsclubService.getsportsclub();
    }
};
__decorate([
    (0, common_1.Post)("/add-details"),
    (0, swagger_1.ApiOperation)({ summary: "add details to sportsclub" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }),
    (0, swagger_1.ApiResponse)({ status: 422, description: "Bad Request or API error message" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Not found!" }),
    (0, swagger_1.ApiResponse)({ status: 409, description: "sportsclub Already Exist" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_sportsclub_detail_dto_1.CreateSpotsClubDto]),
    __metadata("design:returntype", Promise)
], SportsClubController.prototype, "createAddDetails", null);
__decorate([
    (0, common_1.Post)("/add-media"),
    (0, swagger_1.ApiOperation)({ summary: "add video for club" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }),
    (0, swagger_1.ApiResponse)({ status: 422, description: "Bad Request or API error message" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Not found!" }),
    (0, swagger_1.ApiResponse)({ status: 409, description: "image already exixst Exist" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }),
    (0, common_1.HttpCode)(200),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)([{ name: "media", maxCount: 20 }], {
        storage: (0, multer_1.diskStorage)({
            destination: "./assets/media",
            filename: file_validator_1.editFileName,
        }),
        fileFilter: file_validator_1.mediaFileFilter,
        limits: { fileSize: 9097152 },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_media_dto_1.CreatemediaDto,
        media_dto_1.mediaDto]),
    __metadata("design:returntype", Promise)
], SportsClubController.prototype, "addmedia", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all sportsclub for user" }),
    (0, swagger_1.ApiResponse)({ status: 200, description: "Api success" }),
    (0, swagger_1.ApiResponse)({ status: 422, description: "Bad Request or API error message" }),
    (0, swagger_1.ApiResponse)({ status: 404, description: "Not found!" }),
    (0, swagger_1.ApiResponse)({ status: 409, description: " Exist" }),
    (0, swagger_1.ApiResponse)({ status: 500, description: "Internal server error!" }),
    (0, common_1.HttpCode)(200),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SportsClubController.prototype, "getsportsclubs", null);
SportsClubController = __decorate([
    (0, swagger_1.ApiTags)("Spots-club"),
    (0, common_1.Controller)("sports-club"),
    __metadata("design:paramtypes", [sports_club_service_1.SportsClubService])
], SportsClubController);
exports.SportsClubController = SportsClubController;
//# sourceMappingURL=sports-club.controller.js.map