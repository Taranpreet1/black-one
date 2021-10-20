import { Bookings } from "src/entity/booking.entity";
import { User } from "src/entity/user.entity";
import { Repository } from "typeorm";
import { CreateUserBookingDto } from "./dto/create-user-booking.dto";
import { CreateMulBookingDto } from "./dto/create.mul.booking.dto";
export declare class BookingRepository extends Repository<Bookings> {
    createNewBooking(createUserBookingDto: CreateUserBookingDto, user: User): Promise<void>;
    createMulBooking(createMulBookingDto: CreateMulBookingDto, user: User): Promise<void>;
}
