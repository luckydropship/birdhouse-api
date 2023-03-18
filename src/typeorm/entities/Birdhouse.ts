import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity({ name: 'birdhouses'})
export class Birdhouse {

    @PrimaryGeneratedColumn()
    id:number;
    
    @Column({ nullable: true})
    birds: number;

    @Column({ nullable: true })
    eggs: number;

    @Column()
    longitude: number;

    @Column()
    latitude: number;

    @Column()
     name: string ;

}