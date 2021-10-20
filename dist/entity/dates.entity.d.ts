import { BaseEntity } from 'typeorm';
import { Court } from './court.entity';
import { Slot } from './slot.entity';
export declare class Dates extends BaseEntity {
    dateId: Number;
    date: Date;
    slot: Slot[];
    slotId: String;
    court: Court[];
    courtId: String;
    bookedBy: string;
    booked: boolean;
}
