import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Birdhouse } from 'src/typeorm/entities/Birdhouse';
import { BirdhousesController } from './controllers/birdhouses/birdhouses.controller';
import { BirdhousesService } from './services/birdhouses/birdhouses.service';

@Module({
  imports: [TypeOrmModule.forFeature([Birdhouse])],
  controllers: [BirdhousesController],
  providers: [BirdhousesService]
})
export class BirdhousesModule {}
