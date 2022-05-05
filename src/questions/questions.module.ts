import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Question } from './questions.model';
import { Test } from '../tests/tests.model';
import { Answer } from '../answers/answers.model';

@Module({
  controllers: [QuestionsController],
  providers: [QuestionsService],
  imports: [SequelizeModule.forFeature([Question, Test, Answer])],
})
export class QuestionsModule {}
