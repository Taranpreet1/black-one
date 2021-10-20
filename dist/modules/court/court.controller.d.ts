import { Court } from "src/entity/court.entity";
import { CourtService } from "./court.service";
import { ActiveDeactiveDto } from "./dto/active-deactive-court.dto";
import { CreateCourtDto } from "./dto/create-court.dto";
export declare class CourtController {
    private courtService;
    constructor(courtService: CourtService);
    createRole(createCourtDto: CreateCourtDto): Promise<Court>;
    activeDeactiveCourt(courtId: number, activeDeactiveDto: ActiveDeactiveDto): Promise<{
        message: string;
    }>;
    getcourt(): Promise<Court[]>;
}
