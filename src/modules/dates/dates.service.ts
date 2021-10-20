import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Dates } from "src/entity/dates.entity";
import { DateRepository } from "./dates.repository";
import { GetDatesFilterDto } from "./dto/get-dates.filter.dto";

@Injectable()
export class DateService {
  constructor(
    @InjectRepository(DateRepository)
    private daterepository: DateRepository
  ) {}

  getDates(filterDto: GetDatesFilterDto): Promise<Dates[]> {
    return this.daterepository.getDates(filterDto);
  }
}
