import { BaseEntity } from 'typeorm';
import { UserDeviceDetail } from './user-device-detail.entity';
export declare class User extends BaseEntity {
    id: string;
    phoneNo: string;
    email: string;
    salt: string;
    userDeviceDetails: UserDeviceDetail[];
}
