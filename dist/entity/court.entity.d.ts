import { BaseEntity } from 'typeorm';
import { Bookings } from './booking.entity';
import { Dates } from './dates.entity';
import { Sportsclub } from './spots-club.entity';
export declare class Court extends BaseEntity {
    courtId: Number;
    courtName: String;
    type: String;
    isActive: boolean;
    booking: Bookings[];
    dates: Dates[];
    club: Sportsclub[];
    sportsclub_id: String;
}
