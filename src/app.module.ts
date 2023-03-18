import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Birdhouse } from './typeorm/entities/Birdhouse';
import { BirdhousesModule } from './birdhouses/birdhouses.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'admin',
    database: 'shockbyte_birdhouses',
    entities: [Birdhouse],
    synchronize: true,
  }), BirdhousesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
