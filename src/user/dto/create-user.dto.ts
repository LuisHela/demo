//import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
   // @ApiProperty()
    @IsString()
   firstName :string;

   @IsString()
   lastName :string;

   @IsString()
   username:string;

   @IsString()
   email:string;

   @IsString()
   password:string;


}
