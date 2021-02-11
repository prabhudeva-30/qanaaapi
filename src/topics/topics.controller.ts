import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';
import { ICrateTopics } from './topics.entity';
import { TopicsService } from './topics.service';

@Controller('topics')
export class TopicsController {

    constructor(private _topicsService: TopicsService) {

    }

    @Get('getAllTopics')
    async getAllTopics(): Promise<any> {
        return await this._topicsService.getAllTopics();
    }

    @Get('getActiveTopics')
    async getActiveTopics() {
        return await this._topicsService.getActiveTopics();
    }

    @Post('createTopic')
    async createTopic(topicCreationData: any) {
        return await this._topicsService.createTopic(topicCreationData);
    }

    @Post('createQuestion')
    async createQuestion(@Body() questionCreationData: any) {
        return await this._topicsService.createQuestion(questionCreationData);
    }

    @Get('getActiveQuestions:userId')
    async getActiveQuestions(@Param('userId') userId: string) {
        return await this._topicsService.getActiveQuestions(userId);
    }

    @Get('getCount:userId')
    async getCount(@Param('userId') userId: string) {

        return await this._topicsService.getQuestionsCount(userId);
    }

    @Post('addReviewer:questionId')
    async addReviewer(@Param('questionId') questionId: string, @Body() reviewerData: any) {
        return this._topicsService.addReviewer(questionId, reviewerData);
    }


    @Get('getSteps')
    async getSteps() {
        return await this._topicsService.getSteps('prabhu');
    }

    @Post('saveSteps')
    async saveSteps(@Body() stepsData: any): Promise<any> {
        return await this._topicsService.saveSteps(stepsData);
    }
	

}
