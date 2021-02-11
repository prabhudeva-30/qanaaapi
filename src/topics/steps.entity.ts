import { Column, Entity, ObjectID, ObjectIdColumn } from "typeorm";

@Entity({ name: 'steps' })
export class Steps {

    @ObjectIdColumn()
    id: ObjectID;

    @Column({ type: String })
    userId: string;

    @Column({ type: Date })
    date: string;

    @Column({ type: Number })
    steps: string;

}

