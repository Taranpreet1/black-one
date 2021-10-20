import { Court } from "src/entity/court.entity";
import { CreateCourtDto } from "./dto/create-court.dto";
import { CourtRepository } from "./court.repository";
import { ActiveDeactiveDto } from "./dto/active-deactive-court.dto";
export declare class CourtService {
    private courtrepository;
    constructor(courtrepository: CourtRepository);
    createCourt(createCourtDto: CreateCourtDto): Promise<Court>;
    activeDeactiveCourt(courtId: Number, activeDeactiveDto: ActiveDeactiveDto): Promise<{
        message: string;
    }>;
    getcourt(): Promise<Court[]>;
}
