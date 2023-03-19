import { Controller,Get, Post , Delete, Patch,Body, Param, ParseIntPipe, UsePipes, ValidationPipe} from '@nestjs/common';
import { addResidency } from 'src/birdhouses/dtos/AddResidency.dto';
import { createBirdhouseDto } from 'src/birdhouses/dtos/CreateBirdhouse.dto';
import { getBirdhouseDto } from 'src/birdhouses/dtos/GetBirdhouse.dto';
import { updateBirdhouseDto } from 'src/birdhouses/dtos/UpdateBirdhouse.dto';
import { BirdhousesService } from 'src/birdhouses/services/birdhouses/birdhouses.service';

@Controller('house')
export class BirdhousesController {

    constructor(private birdhousesService: BirdhousesService){

    }
    
    //enpoint parameter for getting a single birdhouse by id
    @Get(':id')
    async getBirdhouses(
        @Param('id', ParseIntPipe) id: string,
        @Body() getBirdhousedto: getBirdhouseDto) {
        return this.birdhousesService.findBirdhouses( id)

    }
    
    //endpoint for getting all the birdhouses as a list
    @Get('')
    getAllBirdhouses() {
        return this.birdhousesService.listBirdhouses()

    }
    
     //endpoint for creating a birdhouse
    @Post('')
    @UsePipes(new ValidationPipe())
    createBirdhouses(@Body() createBirdHouseDto: createBirdhouseDto) {
        this.birdhousesService.createBirdhouses(createBirdHouseDto)
        
    }


    //endpoint for updating/ making changes to the birdhouses
    @Patch(':id')
    async updateBirdhouseById(
        @Param('id', ParseIntPipe) id: string,
        @Body() updateBirdhouseDto: updateBirdhouseDto) {
        await this.birdhousesService.updateBirdhouse(id, updateBirdhouseDto)
         
    }


    //endpoint to add to residency
    @Post(':id/residency')
    createResidency(
        @Param('id', ParseIntPipe) id: string,
        @Body() addResidiencyDto: addResidency) {
        this.birdhousesService.createResidence(id, addResidiencyDto)
        
    }

    @Delete(':id')
    async deleteBirdhouseById(
        @Param('id', ParseIntPipe) id: string) {
        await this.birdhousesService.deleteBirdhouse(id)
         
    }
}
