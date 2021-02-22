import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ICreateQuestion, Question } from './question.entity';
import { ICrateTopics, Topics } from './topics.entity';
import { ObjectID } from 'mongodb/index';
import { Steps } from './steps.entity';

@Injectable()
export class TopicsService {

    constructor(
        @InjectRepository(Topics)
        private _topicsRepository: Repository<Topics>,
        @InjectRepository(Question)
        private _questionsRepository: Repository<Question>,
        @InjectRepository(Steps)
        private _stepsRepository: Repository<Steps>,
    ) {


    }

    async getAllTopics() {
        const d = await this._topicsRepository.find({ select: ['topicTitle', 'topicDescription', 'topicId'] });
        return d;
        //return await getConnection().createQueryBuilder().select("topicTitle").from(Topics, "topics").getOne();
    }

    async getActiveTopics() {
        return await this._topicsRepository.find({ isActive: true });
    }

    async createTopic(topicCretaionData: ICrateTopics) {
        return await this._topicsRepository.save(topicCretaionData);
    }

    async createQuestion(questionCreationData: ICreateQuestion) {
        let noOfQuestions = await this._questionsRepository.count();
        questionCreationData.questionId = `QA${noOfQuestions}`;
        questionCreationData.isActive = true;
        questionCreationData._reviewedBy = [];
        return await this._questionsRepository.save(questionCreationData);
    }

    async getActiveQuestions(userId) {
        //return await this._questionsRepository.find({ isActive: true });
        return await this._questionsRepository.find({
            where: {
                _createdBy: { $ne: userId },
                '_reviewedBy.userId': { $ne: userId }
            }
        });

    }

    async getQuestionsCount(usersId) {
        let _createdCount = await this._questionsRepository.count({ _createdBy: usersId });

        // let _reviewedCounts = await this._questionsRepository.count({
        //     where: { _reviewedBy: { $elemMatch: { userId: { $eq: usersId } } } }
        // });
        // db.players.find( {}, { games: { $elemMatch: { score: { $gt: 5 } } }, joined: 1, lastLogin: 1 } )

        let _reviewedCount = await this._questionsRepository.find({
            where: {
                '_reviewedBy.userId': { $eq: usersId },
            }
        });


        return { createdCount: _createdCount, reviewedCount: _reviewedCount.length };
    }

    async addReviewer(questionId: string, reviewerData) {
        let saveData = await this._questionsRepository.findOne({ questionId: questionId });
        saveData._reviewedBy.push(reviewerData);
        await this._questionsRepository.update({ questionId: questionId }, saveData);
    }

    // async getQuestionsCount(userId) {
    //  const repo = getMongoRepository(Question);

    //  let ax = await repo.findOne({_createdBy: 'prabhu'});

    // let a = await repo.aggregate(
    //     [
    //         {
    //             $match: {
    //                 _createdBy: {
    //                     $eq: userId
    //                 }
    //             }
    //         }
    //         ,
    //         {
    //             $count: 'created_questions'
    //         }

    //     ]);

    //  console.log(ax);

    // }


    async getSteps(userIdString) {
        return await this._stepsRepository.find({userId: userIdString});
    }

   // async saveSteps(stepsData: any){
   //     return await this._stepsRepository.save(stepsData);
   // }
    
     async saveSteps(stepsData: any) {
        let staarter = new Date().setUTCHours(0, 0, 0, 0);
        let ender = new Date().setUTCHours(23, 59, 59, 999);
        console.log([new Date(staarter).toISOString(), new Date(ender).toISOString()]);
        console.log([new Date(staarter), new Date(ender)]);
      
        stepsData.date = new Date(stepsData.date);
        
        const todayCount = await this._stepsRepository.find({
            where: {
                userId: stepsData.userId,
                date: { $gte: new Date(staarter), $lte: new Date(ender) }
            }
        });
        console.log(todayCount);

        //moment().utc().format(stepsData.date.toDateString());

        if (todayCount && todayCount.length > 0) {
                console.log(todayCount[0]);
                todayCount[0].stepsCount.push({ currentSteps: stepsData.stepsCount[0].currentSteps });
                console.log('-------------');
                console.log(todayCount[0]);

                return await this._stepsRepository.update(
                    {
                        id:   todayCount[0].id
                    },
                    { stepsCount: todayCount[0].stepsCount }
                );
        } else {
               return await this._stepsRepository.save(stepsData);
        }
    }
    
}
