export class User{
    firstName!: String;
    lastName!: String;
    email!: String;
    role!: Role;
    creationDate!: Date;
}

export enum Role{
    ADMIN,
    USER
}