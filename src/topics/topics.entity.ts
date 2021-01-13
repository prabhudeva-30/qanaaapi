import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'topics' })
export class Topics {

    @ObjectIdColumn()
    id: ObjectID;

    @PrimaryColumn({ unique: true })
    topicId: string;

    @Column({ unique: true })
    topicTitle: string;

    @Column()
    topicDescription: string;

    @Column()
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column()
    createdBy: string;

}

export interface ICrateTopics {
    topicTitle: string;

    topicDescription: string;

    isActive: boolean;

    createdBy: string;
}
