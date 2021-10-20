import { Dates } from 'src/entity/dates.entity';
import { DateRepository } from './dates.repository';
import { GetDatesFilterDto } from './dto/get-dates.filter.dto';
export declare class DateService {
    private daterepository;
    constructor(daterepository: DateRepository);
    getDates(filterDto: GetDatesFilterDto): Promise<Dates[]>;
}
