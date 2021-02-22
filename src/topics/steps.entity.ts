import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: 'steps' })
export class Steps {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ type: String })
    userId: string;

    @Column({ type: Date , default: new Date()})
    date: Date;

    @Column()
    stepsCount: StepsData[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}


export interface StepsData {
    //name: string;
    currentSteps: number;
}
