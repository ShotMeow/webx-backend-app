import { Body, Controller, Post } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Controller('answers')
export class AnswersController {
  constructor(private answersService: AnswersService) {}

  @Post()
  login(@Body() answerDto: CreateAnswerDto) {
    return this.answersService.createAnswer(answerDto);
  }
}
