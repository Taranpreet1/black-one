import {
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";

import { Bookings } from "src/entity/booking.entity";
import { Dates } from "src/entity/dates.entity";
import { User } from "src/entity/user.entity";
import { errorMessage } from "src/exceptions/common.config";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserBookingDto } from "./dto/create-user-booking.dto";
import { CreateMulBookingDto } from "./dto/create.mul.booking.dto";

@EntityRepository(Bookings)
export class BookingRepository extends Repository<Bookings> {
  async createNewBooking(
    createUserBookingDto: CreateUserBookingDto,
    user: User
  ): Promise<void> {
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

      let book = Dates.create();
      book.date = date;
      (book.courtId = court_id),
        (book.slotId = slot_id),
        (book.bookedBy = user.id),
        (book.booked = true),
        await book.save();

      try {
        await this.save(bookings);
      } catch (error) {
        if (error.code === "23505") {
          throw new ConflictException("booking already exists");
        } else {
          console.log(error);
          throw new InternalServerErrorException();
        }
      }
    } else {
      throw new ConflictException(
        `The court is booked for given date or time please try with different date and time`
      );
    }
  }

  async createMulBooking(
    createMulBookingDto: CreateMulBookingDto,
    user: User
  ): Promise<void> {
    const { slots } = createMulBookingDto;

    slots.forEach(async (e) => {
      const trip = await this.findOne({
        where: { date: e.date, courtId: e.court_id, slotId: e.slot_id },
      });
      // console.log(trip)
      if (!trip) {
        let booking = this.create();
        booking.date = e.date;
        booking.courtId = e.court_id;
        booking.slotId = e.slot_id;
        booking.bookedBy = user.id;

        let book = Dates.create();
        book.date = e.date;
        book.courtId = e.court_id;
        book.slotId = e.slot_id;
        book.bookedBy = user.id;
        book.booked = true;

        try {
          await booking.save();
          await book.save();
        } catch (error) {
          if (error.code === "23505") {
            throw new ConflictException("booking already exists");
          } else {
            console.log(error);
            throw new InternalServerErrorException();
          }
        }
      } else {
        // console.log(` ${trip}`)
        throw new ConflictException(
          `booking ${trip} already exists ${errorMessage}`
        );
      }
    });
  }
}
