import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Court } from "src/entity/court.entity";
import { CreateCourtDto } from "./dto/create-court.dto";
import { CourtRepository } from "./court.repository";
import { ActiveDeactiveDto } from "./dto/active-deactive-court.dto";
import { errorMessage } from "src/exceptions/common.config";

@Injectable()
export class CourtService {
  constructor(
    @InjectRepository(CourtRepository)
    private courtrepository: CourtRepository
  ) {}

  createCourt(createCourtDto: CreateCourtDto): Promise<Court> {
    return this.courtrepository.createCourt(createCourtDto);
  }

  async activeDeactiveCourt(
    courtId: Number,
    activeDeactiveDto: ActiveDeactiveDto
  ) {
    try {
      const { status } = activeDeactiveDto;
      const court = await this.courtrepository.findOne({
        courtId,
      });

      if (!courtId) {
        throw new NotFoundException(`No court found`);
      } else {
        court.isActive = status;
      }
      await court.save();

      return { message: `court status changed` };
    } catch (error) {
      if (
        typeof error.response !== "undefined" &&
        error.response.statusCode == 404
      ) {
        throw new NotFoundException(`No court Found.&&&id`);
      }

      throw new InternalServerErrorException(
        `${error.message}&&&id&&&${errorMessage}`
      );
    }
  }
  getcourt(): Promise<Court[]> {
    return this.courtrepository.getcourt();
  }
}
