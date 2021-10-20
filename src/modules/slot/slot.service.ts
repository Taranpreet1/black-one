import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Slot } from "src/entity/slot.entity";
import { errorMessage } from "src/exceptions/common.config";
import { ActiveDeactiveSlotDto } from "./dto/active-deactive-slot.dto";
import { CreateSlotDto } from "./dto/create-slot.dto";
import { SlotRepository } from "./slot.repository";

@Injectable()
export class SlotService {
  constructor(
    @InjectRepository(SlotRepository)
    private slotrepository: SlotRepository
  ) {}

  createSlot(createSlotDto: CreateSlotDto): Promise<Slot> {
    return this.slotrepository.createSlot(createSlotDto);
  }

  async activeDeactiveCourt(
    slotId: Number,
    activeDeactiveSlotDto: ActiveDeactiveSlotDto
  ) {
    try {
      const { status } = activeDeactiveSlotDto;
      const slot = await this.slotrepository.findOne({
        slotId,
      });

      if (!slotId) {
        throw new NotFoundException(`No slot found`);
      } else {
        slot.status = status;
      }
      await slot.save();

      return { message: `slot status changed` };
    } catch (error) {
      if (
        typeof error.response !== "undefined" &&
        error.response.statusCode == 404
      ) {
        throw new NotFoundException(`No slot Found.&&&id`);
      }

      throw new InternalServerErrorException(
        `${error.message}&&&id&&&${errorMessage}`
      );
    }
  }




  getslots(): Promise<Slot[]> {
    return this.slotrepository.getsslots();
  }
}
