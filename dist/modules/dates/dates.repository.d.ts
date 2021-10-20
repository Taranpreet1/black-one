import { Dates } from "src/entity/dates.entity";
import { Repository } from "typeorm";
import { GetDatesFilterDto } from "./dto/get-dates.filter.dto";
export declare class DateRepository extends Repository<Dates> {
    getDates(filterDto: GetDatesFilterDto): Promise<Dates[]>;
}
