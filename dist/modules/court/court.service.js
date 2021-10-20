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
exports.CourtService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const court_entity_1 = require("../../entity/court.entity");
const court_repository_1 = require("./court.repository");
const common_config_1 = require("../../exceptions/common.config");
let CourtService = class CourtService {
    constructor(courtrepository) {
        this.courtrepository = courtrepository;
    }
    createCourt(createCourtDto) {
        return this.courtrepository.createCourt(createCourtDto);
    }
    async activeDeactiveCourt(courtId, activeDeactiveDto) {
        try {
            const { status } = activeDeactiveDto;
            const court = await this.courtrepository.findOne({
                courtId,
            });
            if (!courtId) {
                throw new common_1.NotFoundException(`No court found`);
            }
            else {
                court.isActive = status;
            }
            await court.save();
            return { message: `court status changed` };
        }
        catch (error) {
            if (typeof error.response !== "undefined" &&
                error.response.statusCode == 404) {
                throw new common_1.NotFoundException(`No court Found.&&&id`);
            }
            throw new common_1.InternalServerErrorException(`${error.message}&&&id&&&${common_config_1.errorMessage}`);
        }
    }
    getcourt() {
        return this.courtrepository.getcourt();
    }
};
CourtService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(court_repository_1.CourtRepository)),
    __metadata("design:paramtypes", [court_repository_1.CourtRepository])
], CourtService);
exports.CourtService = CourtService;
//# sourceMappingURL=court.service.js.map