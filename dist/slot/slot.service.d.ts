import { Slot } from 'src/entity/slot.entity';
import { ActiveDeactiveSlotDto } from './dto/active-deactive-slot.dto';
import { CreateSlotDto } from './dto/create-slot.dto';
import { SlotRepository } from './slot.repository';
export declare class SlotService {
    private slotrepository;
    constructor(slotrepository: SlotRepository);
    createSlot(createSlotDto: CreateSlotDto): Promise<Slot>;
    activeDeactiveCourt(slotId: Number, activeDeactiveSlotDto: ActiveDeactiveSlotDto): Promise<{
        message: string;
    }>;
}
