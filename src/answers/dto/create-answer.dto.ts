import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {
  @ApiProperty({
    example: '1',
    description: 'Идентификатор используемого тестирования',
  })
  readonly question_id: number;

  @ApiProperty({
    example: 'Отступ сверху в 10px',
    description: 'Вариант ответа',
  })
  readonly answer: string;

  @ApiProperty({
    example: 'true',
    description: 'Правильный ли ответ',
  })
  readonly isTrue: boolean;
}
