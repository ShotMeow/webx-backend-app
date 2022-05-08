import { Body, Controller, Get, Post } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Вопросы')
@Controller('questions')
export class QuestionsController {
  constructor(private questionsService: QuestionsService) {}

  @Post()
  create(@Body() questionDto: CreateQuestionDto) {
    return this.questionsService.createQuestion(questionDto);
  }

  @Get()
  getAllQuestions() {
    return this.questionsService.getAllQuestions();
  }
}
