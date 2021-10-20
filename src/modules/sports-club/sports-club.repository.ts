import {
  BadGatewayException,
  ConflictException,
  InternalServerErrorException,
} from "@nestjs/common";
import { Media } from "src/entity/media.entity";
import { MediaImages } from "src/entity/media.image.entity";
import { MediaVideos } from "src/entity/media.video.entity";
import { Sportsclub } from "src/entity/spots-club.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreatemediaDto } from "./dto/create-media.dto";
import { CreateSpotsClubDto } from "./dto/create-sportsclub-detail.dto";
import { mediaDto } from "./dto/media.dto";
import { PictureDto } from "./dto/picture.dto";
import { VideoDto } from "./dto/video.dto copy";

@EntityRepository(Sportsclub)
export class SportsclubRepository extends Repository<Sportsclub> {
  async createSportsclub(
    createClubDto: CreateSpotsClubDto
  ): Promise<Sportsclub> {
    const {
      name,
      discription,
      address,
      phone_no,
      court_no,
      longitude,
      latitude,
    } = createClubDto;

    const clubdetail = this.create({
      name: name,
      discription: discription,
      address: address,
      phoneNo: phone_no,
      courtNo: court_no,
      longitude: longitude,
      latitude: latitude,
    });
    try {
      await this.save(clubdetail);
      return clubdetail;
    } catch (error) {
      console.log(error, error.code);
      if (error) {
        throw new ConflictException("This club is already exist");
      }
    }
  }

  // async createimage(files: PictureDto): Promise<void> {
  //   const image = MediaImages.create({
  //     Pictures: files.pictures[0].filename,
  //   });
  //   try {
  //     await MediaImages.save(image);
  //   } catch (error) {
  //     if (error.code === "23505") {
  //       throw new ConflictException("image already exists");
  //     } else {
  //       console.log(error);
  //       throw new InternalServerErrorException();
  //     }
  //   }
  // }

  // async createvideo(files: VideoDto): Promise<void> {
  //   const video = MediaVideos.create({
  //     Videos: files.video[0].filesname,
  //   });
  //   try {
  //     await MediaVideos.save(video);
  //   } catch (error) {
  //     if (error.code === "23505") {
  //       throw new ConflictException("image already exists");
  //     } else {
  //       console.log(error);
  //       throw new InternalServerErrorException();
  //     }
  //   }
  // }

  async addmedia(
    createmediaDto: CreatemediaDto,
    files: mediaDto
  ): Promise<void> {
    const {
      // media,
      media_type,
      sportsclub_id,
    } = createmediaDto;
    const addmedia = Media.create({
      mediaType: media_type,
      sportsclub_id: sportsclub_id,
      media: files.media[0].filename,
    });

    try {
      await Media.save(addmedia);
    } catch (error) {
      if (error.code === "23505") {
        throw new ConflictException("Username already exists");
      } else {
        console.log(error);
        throw new InternalServerErrorException();
      }
    }
  }

  async getsportsclub(): Promise<Sportsclub[]> {
    const query = this.createQueryBuilder("sportsclub");
    query.leftJoinAndSelect("sportsclub.media", "media");
    query.leftJoinAndSelect("sportsclub.court", "court");
    try {
      const detail = await query.getMany();
      return detail;
    } catch (error) {
      if (error) {
        throw new BadGatewayException("Not able to fetch data plese try again");
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}



