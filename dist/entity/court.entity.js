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
exports.Court = void 0;
const court_type_enum_1 = require("../enum/court-type.enum");
const typeorm_1 = require("typeorm");
const booking_entity_1 = require("./booking.entity");
const dates_entity_1 = require("./dates.entity");
const spots_club_entity_1 = require("./spots-club.entity");
let Court = class Court extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'court_id' }),
    __metadata("design:type", Number)
], Court.prototype, "courtId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'court_name' }),
    __metadata("design:type", String)
], Court.prototype, "courtName", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'court_type', }),
    __metadata("design:type", String)
], Court.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "is_active", default: () => "false" }),
    __metadata("design:type", Boolean)
], Court.prototype, "isActive", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => booking_entity_1.Bookings, (booking) => booking.courtId, { eager: false }),
    __metadata("design:type", Array)
], Court.prototype, "booking", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dates_entity_1.Dates, dates => dates.slot, { eager: false }),
    __metadata("design:type", Array)
], Court.prototype, "dates", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => spots_club_entity_1.Sportsclub, (club) => club.court, { eager: true }),
    (0, typeorm_1.JoinColumn)([{ name: 'sportsclub_id', referencedColumnName: 'sportsClubId' }]),
    __metadata("design:type", Array)
], Court.prototype, "club", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'sportsclub_id' }),
    __metadata("design:type", String)
], Court.prototype, "sportsclub_id", void 0);
Court = __decorate([
    (0, typeorm_1.Entity)()
], Court);
exports.Court = Court;
//# sourceMappingURL=court.entity.js.map