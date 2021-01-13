import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'users'})
export class Users {

@ObjectIdColumn()
id: ObjectID;

@Column({unique:true})
userId: string;

@Column({unique:true})    
userName: string;

@Column()
name: string;

@Column({unique:true})
email: string;

@Column()
phone:number;

@Column()
password: string;

@CreateDateColumn()
createdAt: Date;

@UpdateDateColumn()
updatedAt: Date;

}


// export interface IUserLogin{
//     email: string;
//     phone: number;
//     password: string;
// }