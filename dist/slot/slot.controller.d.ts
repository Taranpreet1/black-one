import { Slot } from 'src/entity/slot.entity';
import { ActiveDeactiveSlotDto } from './dto/active-deactive-slot.dto';
import { CreateSlotDto } from './dto/create-slot.dto';
import { SlotService } from './slot.service';
export declare class SlotController {
    private slotService;
    constructor(slotService: SlotService);
    createRole(createCourtDto: CreateSlotDto): Promise<Slot>;
    activeDeactiveCourt(slotId: number, activeDeactiveslotDto: ActiveDeactiveSlotDto): Promise<{
        message: string;
    }>;
}
