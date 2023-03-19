export type CreateBirdhouseParams = {

   

    longitude: number;

    latitude: number;

    name: string ;

    created_at: Date;
}

export type UpdateBirdhouseParams = {

    birds: number;

    eggs: number;

    longitude: number;

    latitude: number;

    name: string ;
}

export type addResidencyParams = {

    birds: number;

    eggs: number;

    longitude: number;

    latitude: number;

    name: string ;

    created_at: Date;
}

export type findBirdhouseParams = {

    birds: number;

    eggs: number;

    longitude: number;

    latitude: number;

    name: string ;

    created_at: Date;
}