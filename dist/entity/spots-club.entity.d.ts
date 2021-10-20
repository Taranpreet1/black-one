import { BaseEntity } from 'typeorm';
import { Court } from './court.entity';
import { Media } from './media.entity';
export declare class Sportsclub extends BaseEntity {
    sportsClubId: any;
    name: string;
    discription: string;
    address: String;
    longitude: String;
    latitude: String;
    phoneNo: string;
    courtNo: number;
    media: Media[];
    court: Court[];
}
