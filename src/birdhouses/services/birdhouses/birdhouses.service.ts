import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Birdhouse } from 'src/typeorm/entities/Birdhouse';
import { addResidencyParams, CreateBirdhouseParams, findBirdhouseParams, UpdateBirdhouseParams } from 'src/utils/types';

@Injectable()
export class BirdhousesService {

    constructor(@InjectRepository(Birdhouse) private birdhouseRepository: Repository<Birdhouse>,){

    }
    
    listBirdhouses(){
        return this.birdhouseRepository.find();

    }

    findBirdhouses(id: string){
       
       return this.birdhouseRepository.findOneBy({id})

    }

    createBirdhouses(birdhouseDetails: CreateBirdhouseParams){
        const newBirdhouse = this.birdhouseRepository.create({...birdhouseDetails})
        return this.birdhouseRepository.save(newBirdhouse)

    }

    updateBirdhouse(id: string, updateBirdhouseDetails: UpdateBirdhouseParams){
       
        return this.birdhouseRepository.update({ id }, {...updateBirdhouseDetails})

    }

    createResidence(id: string, residencyDetails: findBirdhouseParams ){
        return this.birdhouseRepository.create({ id }), ({...residencyDetails})
        

    }

    deleteBirdhouse(id: string){
       
        return this.birdhouseRepository.delete({ id })

    }


}
