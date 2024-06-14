export class UserOr{
    id?: number;
    firstName!: String;
    lastName!: String;
    email!: String;
    role?: Role;
    creationDate!: number;
}

export enum Role{
    ADMIN,
    USER
}