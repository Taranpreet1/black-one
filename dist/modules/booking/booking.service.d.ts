import { User } from "src/entity/user.entity";
import { BookingRepository } from "./booking.repository";
import { CreateUserBookingDto } from "./dto/create-user-booking.dto";
import { CreateMulBookingDto } from "./dto/create.mul.booking.dto";
export declare class BookingService {
    private bookingRepository;
    constructor(bookingRepository: BookingRepository);
    createUserBooking(createUserBookingDto: CreateUserBookingDto, user: User): Promise<void>;
    createMulBooking(createMulDto: CreateMulBookingDto, user: User): Promise<void>;
}
