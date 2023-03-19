import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { v4 as uuidv4 } from 'uuid';


@Entity({ name: 'birdhouses'})
export class Birdhouse {

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
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

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
    
     constructor(name: string) {
        this.name = name;
        this.created_at = new Date();
        this.id = uuidv4();
        this.birds ;
        this.eggs ;
        this.longitude;
        this.latitude;
     }    

}