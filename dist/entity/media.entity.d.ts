import { BaseEntity } from "typeorm";
import { Sportsclub } from "./spots-club.entity";
export declare class Media extends BaseEntity {
    Id: Number;
    media: string | null;
    mediaType: number;
    club: Sportsclub[];
    sportsclub_id: String;
}
