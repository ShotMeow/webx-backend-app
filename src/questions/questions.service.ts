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
    const question = await this.questionRepository.create(dto);
    return question;
  }

  async getAllQuestions() {
    return await this.questionRepository.findAll({ include: { all: true } });
  }
}
