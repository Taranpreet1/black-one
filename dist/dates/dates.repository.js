"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRepository = void 0;
const dates_entity_1 = require("../entity/dates.entity");
const typeorm_1 = require("typeorm");
let DateRepository = class DateRepository extends typeorm_1.Repository {
    async getDates(filterDto) {
        const { date, courtId } = filterDto;
        const query = this.createQueryBuilder('search');
        if (date) {
            query.andWhere('search.date = :date', { date: `%${date}%` });
        }
        if (courtId) {
            query.andWhere('search.courtId = :courtId', { courtId: `${courtId}` });
        }
        query.leftJoinAndSelect('search.court', 'court');
        query.leftJoinAndSelect('search.slot', 'slot');
        const dates = await query.getMany();
        return dates;
    }
};
DateRepository = __decorate([
    (0, typeorm_1.EntityRepository)(dates_entity_1.Dates)
], DateRepository);
exports.DateRepository = DateRepository;
//# sourceMappingURL=dates.repository.js.map