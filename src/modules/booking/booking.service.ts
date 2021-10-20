import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entity/user.entity";
import { BookingRepository } from "./booking.repository";
import { CreateUserBookingDto } from "./dto/create-user-booking.dto";
import { CreateMulBookingDto } from "./dto/create.mul.booking.dto";

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(BookingRepository)
    private bookingRepository: BookingRepository
  ) {}

  async createUserBooking(
    createUserBookingDto: CreateUserBookingDto,
    user: User
  ): Promise<void> {
    return this.bookingRepository.createNewBooking(createUserBookingDto, user);
  }

  async createMulBooking(
    createMulDto: CreateMulBookingDto,
    user: User
  ): Promise<void> {
    return this.bookingRepository.createMulBooking(createMulDto, user);
  }
}
