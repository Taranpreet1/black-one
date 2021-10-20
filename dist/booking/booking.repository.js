"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
const common_1 = require("@nestjs/common");
const booking_entity_1 = require("../entity/booking.entity");
const dates_entity_1 = require("../entity/dates.entity");
const user_entity_1 = require("../entity/user.entity");
const common_config_1 = require("../exceptions/common.config");
const typeorm_1 = require("typeorm");
let BookingRepository = class BookingRepository extends typeorm_1.Repository {
    async createNewBooking(createUserBookingDto, user) {
        const { court_id, date, slot_id } = createUserBookingDto;
        const trip = await this.findOne({
            where: { date, courtId: court_id, slotId: slot_id },
        });
        if (!trip) {
            const bookings = this.create({
                courtId: court_id,
                date: date,
                slotId: slot_id,
                bookedBy: user.id,
            });
            let book = dates_entity_1.Dates.create();
            book.date = date;
            (book.courtId = court_id),
                (book.slotId = slot_id),
                (book.bookedBy = user.id),
                (book.booked = true),
                await book.save();
            try {
                await this.save(bookings);
            }
            catch (error) {
                if (error.code === "23505") {
                    throw new common_1.ConflictException("booking already exists");
                }
                else {
                    console.log(error);
                    throw new common_1.InternalServerErrorException();
                }
            }
        }
        else {
            throw new common_1.ConflictException(`The court is booked for given date or time please try with different date and time`);
        }
    }
    async createMulBooking(createMulBookingDto, user) {
        const { slots } = createMulBookingDto;
        slots.forEach(async (e) => {
            const trip = await this.findOne({
                where: { date: e.date, courtId: e.court_id, slotId: e.slot_id },
            });
            if (!trip) {
                let booking = this.create();
                booking.date = e.date;
                booking.courtId = e.court_id;
                booking.slotId = e.slot_id;
                booking.bookedBy = user.id;
                let book = dates_entity_1.Dates.create();
                book.date = e.date;
                (book.courtId = e.court_id);
                (book.slotId = e.slot_id);
                (book.bookedBy = user.id);
                (book.booked = true);
                try {
                    await booking.save();
                    await book.save();
                }
                catch (error) {
                    if (error.code === "23505") {
                        throw new common_1.ConflictException("booking already exists");
                    }
                    else {
                        console.log(error);
                        throw new common_1.InternalServerErrorException();
                    }
                }
            }
            else {
                throw new common_1.ConflictException(`booking ${trip} already exists ${common_config_1.errorMessage}`);
            }
        });
    }
};
BookingRepository = __decorate([
    (0, typeorm_1.EntityRepository)(booking_entity_1.Bookings)
], BookingRepository);
exports.BookingRepository = BookingRepository;
//# sourceMappingURL=booking.repository.js.map