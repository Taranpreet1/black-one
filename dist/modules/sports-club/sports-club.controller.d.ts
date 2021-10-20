import { Sportsclub } from "src/entity/spots-club.entity";
import { CreateSpotsClubDto } from "./dto/create-sportsclub-detail.dto";
import { SportsClubService } from "./sports-club.service";
import { CreatemediaDto } from "./dto/create-media.dto";
import { mediaDto } from "./dto/media.dto";
export declare class SportsClubController {
    private sportsclubService;
    constructor(sportsclubService: SportsClubService);
    createAddDetails(createClubDto: CreateSpotsClubDto): Promise<Sportsclub>;
    addmedia(createmediaDto: CreatemediaDto, files: mediaDto): Promise<void>;
    getsportsclubs(): Promise<Sportsclub[]>;
}
