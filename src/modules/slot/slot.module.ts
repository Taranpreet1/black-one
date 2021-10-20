import { Module } from "@nestjs/common";
import { SlotService } from "./slot.service";
import { SlotController } from "./slot.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SlotRepository } from "./slot.repository";
import { AuthModule } from "src/modules/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([SlotRepository]), AuthModule],
  providers: [SlotService],
  controllers: [SlotController],
})
export class SlotModule {}
