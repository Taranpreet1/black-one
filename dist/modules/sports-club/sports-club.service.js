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
exports.SportsClubService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const spots_club_entity_1 = require("../../entity/spots-club.entity");
const create_media_dto_1 = require("./dto/create-media.dto");
const media_dto_1 = require("./dto/media.dto");
const sports_club_repository_1 = require("./sports-club.repository");
let SportsClubService = class SportsClubService {
    constructor(sportsclubrepository) {
        this.sportsclubrepository = sportsclubrepository;
    }
    createSportsclub(createclubDto) {
        return this.sportsclubrepository.createSportsclub(createclubDto);
    }
    async addmedia(createmediaDto, files) {
        return this.sportsclubrepository.addmedia(createmediaDto, files);
    }
    getsportsclub() {
        return this.sportsclubrepository.getsportsclub();
    }
};
__decorate([
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_media_dto_1.CreatemediaDto,
        media_dto_1.mediaDto]),
    __metadata("design:returntype", Promise)
], SportsClubService.prototype, "addmedia", null);
SportsClubService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sports_club_repository_1.SportsclubRepository)),
    __metadata("design:paramtypes", [sports_club_repository_1.SportsclubRepository])
], SportsClubService);
exports.SportsClubService = SportsClubService;
//# sourceMappingURL=sports-club.service.js.map