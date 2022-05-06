import { Module } from '@nestjs/common';
import { TestsController } from './tests.controller';
import { TestsService } from './tests.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test } from './tests.model';
import { Question } from '../questions/questions.model';
import { Category } from '../categories/categories.model';

@Module({
  controllers: [TestsController],
  providers: [TestsService],
  imports: [SequelizeModule.forFeature([Test, Question, Category])],
})
export class TestsModule {}
