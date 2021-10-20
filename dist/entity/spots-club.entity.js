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
exports.Sportsclub = void 0;
const typeorm_1 = require("typeorm");
const court_entity_1 = require("./court.entity");
const media_entity_1 = require("./media.entity");
let Sportsclub = class Sportsclub extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'sportsclub_id' }),
    __metadata("design:type", Object)
], Sportsclub.prototype, "sportsClubId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'name' }),
    __metadata("design:type", String)
], Sportsclub.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'discription' }),
    __metadata("design:type", String)
], Sportsclub.prototype, "discription", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'address' }),
    __metadata("design:type", String)
], Sportsclub.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'longitude' }),
    __metadata("design:type", String)
], Sportsclub.prototype, "longitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'latitude' }),
    __metadata("design:type", String)
], Sportsclub.prototype, "latitude", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'phone_no' }),
    __metadata("design:type", String)
], Sportsclub.prototype, "phoneNo", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'court_no' }),
    __metadata("design:type", Number)
], Sportsclub.prototype, "courtNo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => media_entity_1.Media, (media) => media.club, { eager: false }),
    __metadata("design:type", Array)
], Sportsclub.prototype, "media", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => court_entity_1.Court, (court) => court.club, { eager: false }),
    __metadata("design:type", Array)
], Sportsclub.prototype, "court", void 0);
Sportsclub = __decorate([
    (0, typeorm_1.Entity)()
], Sportsclub);
exports.Sportsclub = Sportsclub;
//# sourceMappingURL=spots-club.entity.js.map