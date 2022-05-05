import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Question } from './questions.model';
import { CreateQuestionDto } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question) private questionRepository: typeof Question,
  ) {}

  async createQuestion(dto: CreateQuestionDto) {
    return await this.questionRepository.create(dto);
  }

  async getAllQuestions() {
    return await this.questionRepository.findAll({ include: { all: true } });
  }
}
