import { Dates } from "src/entity/dates.entity";
import { EntityRepository, Repository } from "typeorm";
import { GetDatesFilterDto } from "./dto/get-dates.filter.dto";

@EntityRepository(Dates)
export class DateRepository extends Repository<Dates> {
  async getDates(filterDto: GetDatesFilterDto): Promise<Dates[]> {
    const { date, courtId } = filterDto;
    const query = this.createQueryBuilder("search");

    if (date) {
      query.andWhere("search.date = :date", { date: `%${date}%` });
    }
    if (courtId) {
      query.andWhere("search.courtId = :courtId", { courtId: `${courtId}` });
    }
    query.leftJoinAndSelect("search.court", "court");
    query.leftJoinAndSelect("search.slot", "slot");
    const dates = await query.getMany();

    return dates;
  }
}
