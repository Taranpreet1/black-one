import { Module } from "@nestjs/common";
import { DateService } from "./dates.service";
import { DateController } from "./dates.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DateRepository } from "./dates.repository";
import { AuthModule } from "src/modules/auth/auth.module";

@Module({
  imports: [TypeOrmModule.forFeature([DateRepository]), AuthModule],
  providers: [DateService],
  controllers: [DateController],
})
export class DateModule {}
