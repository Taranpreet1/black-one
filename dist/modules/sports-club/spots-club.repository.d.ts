import { Slot } from 'src/entity/slot.entity';
import { Repository } from 'typeorm';
import { CreateSlotDto } from './dto/create-slot.dto';
export declare class SlotRepository extends Repository<Slot> {
    createSlot(createSlotDto: CreateSlotDto): Promise<Slot>;
}
