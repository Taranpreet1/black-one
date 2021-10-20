import { BaseEntity } from "typeorm";
import { User } from "./user.entity";
export declare class UserDeviceDetail extends BaseEntity {
    id: number;
    deviceType: number;
    deviceToken: string | null;
    accessToken: string | null;
    appVersion: string | null;
    osVersion: string | null;
    createdDate: Date | null;
    updatedDate: Date | null;
    userId: string | null;
    deviceModel: string | null;
    user: User;
}
