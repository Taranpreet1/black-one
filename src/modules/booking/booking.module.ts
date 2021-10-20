import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/modules/auth/auth.module';
import { BookingController } from './booking.controller';
import { BookingRepository } from './booking.repository';
import { BookingService } from './booking.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookingRepository]), AuthModule],

  controllers: [BookingController],
  providers: [BookingService]
})
export class BookingModule {}
