"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const slot_entity_1 = require("../entity/slot.entity");
const common_config_1 = require("../exceptions/common.config");
const slot_repository_1 = require("./slot.repository");
let SlotService = class SlotService {
    constructor(slotrepository) {
        this.slotrepository = slotrepository;
    }
    createSlot(createSlotDto) {
        return this.slotrepository.createSlot(createSlotDto);
    }
    async activeDeactiveCourt(slotId, activeDeactiveSlotDto) {
        try {
            const { status } = activeDeactiveSlotDto;
            const slot = await this.slotrepository.findOne({
                slotId,
            });
            if (!slotId) {
                throw new common_1.NotFoundException(`No slot found`);
            }
            else {
                slot.status = status;
            }
            await slot.save();
            return { message: `slot status changed` };
        }
        catch (error) {
            if (typeof error.response !== "undefined" &&
                error.response.statusCode == 404) {
                throw new common_1.NotFoundException(`No slot Found.&&&id`);
            }
            throw new common_1.InternalServerErrorException(`${error.message}&&&id&&&${common_config_1.errorMessage}`);
        }
    }
};
SlotService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(slot_repository_1.SlotRepository)),
    __metadata("design:paramtypes", [slot_repository_1.SlotRepository])
], SlotService);
exports.SlotService = SlotService;
//# sourceMappingURL=slot.service.js.map