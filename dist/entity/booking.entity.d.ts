import { BaseEntity } from 'typeorm';
import { Court } from './court.entity';
import { Slot } from './slot.entity';
export declare class Bookings extends BaseEntity {
    bookindId: any;
    court: Court[];
    courtId: string;
    date: Date;
    slot: Slot[];
    slotId: String;
    bookedBy: string;
    static forEach: any;
}
