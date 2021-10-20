import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { MailerModule } from "@nestjs-modules/mailer";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { BookingModule } from "./modules/booking/booking.module";
import { SlotModule } from "./modules/slot/slot.module";
import { CourtModule } from "./modules/court/court.module";
import { DateModule } from "./modules/dates/dates.module";
import { SportsClubModule } from "./modules/sports-club/sports-club.module";
import * as config from "config";

const mailConfig = config.get("email");
@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    MailerModule.forRoot({
      transport: {
        host: mailConfig.host,
        port: mailConfig.port,
        auth: {
          user: mailConfig.user,
          pass: mailConfig.pass,
        },
      },
    }),
    UserModule,
    AuthModule,
    BookingModule,
    SlotModule,
    CourtModule,
    DateModule,
    SportsClubModule,
  ],
})
export class AppModule {}
