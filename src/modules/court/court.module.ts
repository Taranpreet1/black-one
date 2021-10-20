import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "src/modules/auth/auth.module";
import { CourtController } from "./court.controller";
import { CourtRepository } from "./court.repository";
import { CourtService } from "./court.service";

@Module({
  imports: [TypeOrmModule.forFeature([CourtRepository]), AuthModule],
  controllers: [CourtController],
  providers: [CourtService],
})
export class CourtModule {}
