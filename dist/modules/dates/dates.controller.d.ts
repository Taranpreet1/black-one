import { Dates } from "src/entity/dates.entity";
import { DateService } from "./dates.service";
import { GetDatesFilterDto } from "./dto/get-dates.filter.dto";
export declare class DateController {
    private dateService;
    constructor(dateService: DateService);
    getUser(filterDto: GetDatesFilterDto): Promise<Dates[]>;
}
