"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SportsclubRepository = void 0;
const common_1 = require("@nestjs/common");
const spots_club_entity_1 = require("../../entity/spots-club.entity");
const typeorm_1 = require("typeorm");
let SportsclubRepository = class SportsclubRepository extends typeorm_1.Repository {
    async createSportsclub(createClubDto) {
        const { name, discription, address, phone_no, court_no } = createClubDto;
        const clubdetail = this.create({
            name: name,
            discription: discription,
            address: address,
            phoneNo: phone_no,
            courtNo: court_no,
        });
        try {
            await this.save(clubdetail);
            return clubdetail;
        }
        catch (error) {
            console.log(error, error.code);
            if (error) {
                throw new common_1.ConflictException("This court is already exist");
            }
        }
    }
};
SportsclubRepository = __decorate([
    (0, typeorm_1.EntityRepository)(spots_club_entity_1.Sportsclub)
], SportsclubRepository);
exports.SportsclubRepository = SportsclubRepository;
//# sourceMappingURL=sports-club.repository%20copy.js.map