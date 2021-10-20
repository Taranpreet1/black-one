import { BadGatewayException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { Court } from "src/entity/court.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateCourtDto } from "./dto/create-court.dto";

@EntityRepository(Court)
export class CourtRepository extends Repository<Court> {
  async createCourt(createCourtDto: CreateCourtDto): Promise<Court> {
    const { court_name, court_type, sportsclub_id } = createCourtDto;

    const court = this.create({
      courtName: court_name,
      type: court_type,
      sportsclub_id: sportsclub_id,
    });
    try {
      await this.save(court);
      return court;
    } catch (error) {
      console.log(error, error.code);
      if (error) {
        throw new ConflictException("This court is already exist");
      }
    }
  }

  async getcourt(): Promise<Court[]> {
    const query = this.createQueryBuilder("court");
    try {
      const detail = await query.getMany();
      return detail;
    } catch (error) {
      if (error) {
        throw new BadGatewayException("Not able to fetch data plese try again");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
