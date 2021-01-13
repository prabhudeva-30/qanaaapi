import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository } from 'typeorm';
import { Question } from '../question.entity';

@EntityRepository(Question)
//@Injectable()
export class QuestionsService extends Repository<Question> {

    constructor() {
        super();
    }

    addreview() {


       // this.update({id:'234'},{'':{}});

        // https://github.com/chanlito/simple-todos/blob/master/server/repository/todo.repository.ts}
        //    async findIsDone() {
        //     return this.findOne({ where: { isDone: true } });
    }

}
