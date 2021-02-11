import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Question } from './question.entity';
import { TopicsController } from './topics.controller';
import { Topics } from './topics.entity';
import { TopicsService } from './topics.service';
import { QuestionsService } from './questions/questions.service';
import { Steps } from './steps.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Topics, Question, Steps])],
    controllers:[TopicsController],
    providers:[TopicsService, QuestionsService]
})
export class TopicsModule {}
