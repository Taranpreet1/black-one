import { Module } from "@nestjs/common";
import { SportsClubService } from "./sports-club.service";
import { SportsClubController } from "./sports-club.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SportsclubRepository } from "./sports-club.repository";
import { AuthModule } from "../auth/auth.module";
import { MediaImages } from "src/entity/media.image.entity";
import { MediaVideos } from "src/entity/media.video.entity";
import { MulterModule } from "@nestjs/platform-express";
import { Media } from "src/entity/media.entity";

@Module({
  imports: [
    MulterModule.register({
      dest: "./assets",
    }),
    TypeOrmModule.forFeature([
      SportsclubRepository,
      MediaImages,
      MediaVideos,
      Media,
    ]),
    AuthModule,
  ],
  providers: [SportsClubService],
  controllers: [SportsClubController],
})
export class SportsClubModule {}
