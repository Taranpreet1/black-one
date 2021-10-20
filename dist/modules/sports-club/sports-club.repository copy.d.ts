import { Sportsclub } from "src/entity/spots-club.entity";
import { Repository } from "typeorm";
import { CreateSpotsClubDto } from "./dto/create-sportsclub-detail.dto";
export declare class SportsclubRepository extends Repository<Sportsclub> {
    createSportsclub(createClubDto: CreateSpotsClubDto): Promise<Sportsclub>;
}
