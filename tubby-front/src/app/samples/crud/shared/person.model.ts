export interface Person {
    id?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    age?: number;
    birth?: Date;
    married?: boolean;
    telephone?: string;
    grade?: string;
    intro?: string;
    password?: string;
    confirm?: string;
}

export interface PersonCondtion {
    email?: string;
    name?: string;
    gender?: string;
    fromAge?: number;
    toAge?: number;
    married?: boolean;
    telephone?: string;
    grade?: string;
}
