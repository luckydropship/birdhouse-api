import { IsNotEmpty } from 'class-validator';

export class createBirdhouseDto {
    
    birds: number;
      
    eggs: number;
    
    @IsNotEmpty()
    longitude: number;

    @IsNotEmpty()
    latitude: number;


    @IsNotEmpty()
    name: string ;
}