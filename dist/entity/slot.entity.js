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
exports.Slot = void 0;
const typeorm_1 = require("typeorm");
const booking_entity_1 = require("./booking.entity");
const dates_entity_1 = require("./dates.entity");
let Slot = class Slot extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'slot_id' }),
    __metadata("design:type", Number)
], Slot.prototype, "slotId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'slot_time' }),
    __metadata("design:type", String)
], Slot.prototype, "slotTime", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => dates_entity_1.Dates, dates => dates.slot, { eager: false }),
    __metadata("design:type", Array)
], Slot.prototype, "dates", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'status', default: () => "true" }),
    __metadata("design:type", Boolean)
], Slot.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)((_type) => booking_entity_1.Bookings, (booking) => booking.courtId, { eager: false }),
    __metadata("design:type", Array)
], Slot.prototype, "booking", void 0);
Slot = __decorate([
    (0, typeorm_1.Entity)()
], Slot);
exports.Slot = Slot;
//# sourceMappingURL=slot.entity.js.map