import { Sportsclub } from "src/entity/spots-club.entity";
import { Repository } from "typeorm";
import { CreatemediaDto } from "./dto/create-media.dto";
import { CreateSpotsClubDto } from "./dto/create-sportsclub-detail.dto";
import { mediaDto } from "./dto/media.dto";
export declare class SportsclubRepository extends Repository<Sportsclub> {
    createSportsclub(createClubDto: CreateSpotsClubDto): Promise<Sportsclub>;
    addmedia(createmediaDto: CreatemediaDto, files: mediaDto): Promise<void>;
    getsportsclub(): Promise<Sportsclub[]>;
}
