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
exports.Bookings = void 0;
const typeorm_1 = require("typeorm");
const court_entity_1 = require("./court.entity");
const slot_entity_1 = require("./slot.entity");
let Bookings = class Bookings extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Object)
], Bookings.prototype, "bookindId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => court_entity_1.Court, (court) => court.booking, { eager: true }),
    (0, typeorm_1.JoinColumn)([{ name: 'court_id', referencedColumnName: 'courtId' }]),
    __metadata("design:type", Array)
], Bookings.prototype, "court", void 0);
__decorate([
    (0, typeorm_1.Column)('integer', { name: 'court_id' }),
    __metadata("design:type", String)
], Bookings.prototype, "courtId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'date' }),
    __metadata("design:type", Date)
], Bookings.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((_type) => slot_entity_1.Slot, (slot) => slot.booking, { eager: true }),
    (0, typeorm_1.JoinColumn)([{ name: 'slot_id', referencedColumnName: 'slotId' }]),
    __metadata("design:type", Array)
], Bookings.prototype, "slot", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'slot_id' }),
    __metadata("design:type", String)
], Bookings.prototype, "slotId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'booker_by' }),
    __metadata("design:type", String)
], Bookings.prototype, "bookedBy", void 0);
Bookings = __decorate([
    (0, typeorm_1.Entity)()
], Bookings);
exports.Bookings = Bookings;
//# sourceMappingURL=booking.entity.js.map