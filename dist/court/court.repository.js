"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourtRepository = void 0;
const common_1 = require("@nestjs/common");
const court_entity_1 = require("../entity/court.entity");
const typeorm_1 = require("typeorm");
let CourtRepository = class CourtRepository extends typeorm_1.Repository {
    async createCourt(createCourtDto) {
        const { court_name, court_type } = createCourtDto;
        const court = this.create({
            courtName: court_name,
            type: court_type,
        });
        try {
            await this.save(court);
            return court;
        }
        catch (error) {
            console.log(error, error.code);
            if (error) {
                throw new common_1.ConflictException('This court is already exist');
            }
        }
    }
};
CourtRepository = __decorate([
    (0, typeorm_1.EntityRepository)(court_entity_1.Court)
], CourtRepository);
exports.CourtRepository = CourtRepository;
//# sourceMappingURL=court.repository.js.map