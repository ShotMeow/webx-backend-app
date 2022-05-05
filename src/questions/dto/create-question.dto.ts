import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({
    example: '1',
    description: 'Идентификатор используемого тестирования',
  })
  readonly test_id: number;

  @ApiProperty({
    example: 'Что делает класс “mt-10”',
    description: 'Вопрос',
  })
  readonly question: string;
}
