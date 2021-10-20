import { Court } from "src/entity/court.entity";
import { Repository } from "typeorm";
import { CreateCourtDto } from "./dto/create-court.dto";
export declare class CourtRepository extends Repository<Court> {
    createCourt(createCourtDto: CreateCourtDto): Promise<Court>;
    getcourt(): Promise<Court[]>;
}
