import { BadGatewayException, ConflictException, InternalServerErrorException } from "@nestjs/common";
import { Slot } from "src/entity/slot.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreateSlotDto } from "./dto/create-slot.dto";

@EntityRepository(Slot)
export class SlotRepository extends Repository<Slot> {
  async createSlot(createSlotDto: CreateSlotDto): Promise<Slot> {
    const { slotTime } = createSlotDto;

    const slot = this.create({
      slotTime,
    });
    try {
      await this.save(slot);
      return slot;
    } catch (error) {
      console.log(error, error.code);
      if (error) {
        throw new ConflictException("This court is already exist");
      }
    }
  }


  async getsslots(): Promise<Slot[]> {
    const query = this.createQueryBuilder("slots");
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
