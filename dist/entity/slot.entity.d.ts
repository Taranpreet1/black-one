import { BaseEntity } from 'typeorm';
import { Bookings } from './booking.entity';
import { Dates } from './dates.entity';
export declare class Slot extends BaseEntity {
    slotId: Number;
    slotTime: String;
    dates: Dates[];
    status: boolean;
    booking: Bookings[];
}
