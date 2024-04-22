/**
 *
 */
import { IsNotEmpty, IsString } from 'class-validator';

export class GetAdminDto {
    @IsNotEmpty()
    id: string;
}
