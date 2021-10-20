import { User } from 'src/entity/user.entity';
import { BookingService } from './booking.service';
import { CreateUserBookingDto } from './dto/create-user-booking.dto';
import { CreateMulBookingDto } from './dto/create.mul.booking.dto';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    createUserbooking(createUserBookingDto: CreateUserBookingDto, user: User): Promise<void>;
    createUserMulbooking(createMulDto: CreateMulBookingDto, user: User): Promise<void>;
}
