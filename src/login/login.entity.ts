import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: 'login' })
export class Login{

    @ObjectIdColumn()
    id: ObjectID;

    @Column()
    name: string;
    
    @Column()
    userName: string;

}