import { Sportsclub } from "src/entity/spots-club.entity";
import { CreatemediaDto } from "./dto/create-media.dto";
import { CreateSpotsClubDto } from "./dto/create-sportsclub-detail.dto";
import { mediaDto } from "./dto/media.dto";
import { SportsclubRepository } from "./sports-club.repository";
export declare class SportsClubService {
    private sportsclubrepository;
    constructor(sportsclubrepository: SportsclubRepository);
    createSportsclub(createclubDto: CreateSpotsClubDto): Promise<Sportsclub>;
    addmedia(createmediaDto: CreatemediaDto, files: mediaDto): Promise<void>;
    getsportsclub(): Promise<Sportsclub[]>;
}
