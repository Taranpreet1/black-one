import { Injectable, UploadedFiles } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Sportsclub } from "src/entity/spots-club.entity";
import { CreatemediaDto } from "./dto/create-media.dto";
import { CreateSpotsClubDto } from "./dto/create-sportsclub-detail.dto";
import { mediaDto } from "./dto/media.dto";
import { PictureDto } from "./dto/picture.dto";
import { VideoDto } from "./dto/video.dto copy";
import { SportsclubRepository } from "./sports-club.repository";

@Injectable()
export class SportsClubService {
  constructor(
    @InjectRepository(SportsclubRepository)
    private sportsclubrepository: SportsclubRepository
  ) {}
  createSportsclub(createclubDto: CreateSpotsClubDto): Promise<Sportsclub> {
    return this.sportsclubrepository.createSportsclub(createclubDto);
  }
  // async createImage(@UploadedFiles() files: PictureDto): Promise<void> {
  //   return this.sportsclubrepository.createimage(files);
  // }
  // async createVideo(@UploadedFiles() files: VideoDto): Promise<void> {
  //   return this.sportsclubrepository.createvideo(files);
  // }
  async addmedia(
    createmediaDto: CreatemediaDto,
    @UploadedFiles() files: mediaDto
  ): Promise<void> {
    return this.sportsclubrepository.addmedia(createmediaDto, files);
  }
  getsportsclub(): Promise<Sportsclub[]> {
    return this.sportsclubrepository.getsportsclub();
  }
}
