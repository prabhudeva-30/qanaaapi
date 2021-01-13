import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'question' })
export class Question {

    @ObjectIdColumn()
    id: ObjectID;

    @PrimaryColumn({ unique: true })
    questionId: string;

    @Column()
    topicId: string;

    @Column()
    question: string;

    @Column()
    answers: Option[];

    @Column({ default: true })
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    _createdBy: string;

    @Column({ default: [] })
    _reviewedBy: any;

}


export interface ICreateQuestion {
    question: string;
    answers: Option[];
    topicId: string;
    _createdBy: string;
    questionId: string;
    isActive: boolean;
    _reviewedBy: any;

}

export interface Option {
    //name: string;
    answer: string;
    isChecked: boolean;
}