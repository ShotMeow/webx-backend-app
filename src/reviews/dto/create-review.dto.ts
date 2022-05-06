import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    example: '1',
    description: 'Идентификатор пользователя',
  })
  readonly user_id: number;

  @ApiProperty({
    example: '1',
    description: 'Идентификатор теста',
  })
  readonly test_id: number;

  @ApiProperty({
    example:
      'Топ! Серьезно, очень понравился этот курс, давно хотел погрузиться в разработку серверной части, но не знал с чего начать. Очень быстро влился и уже сам разрабатываю один проектик на React + NestJS. Спасибо WebX!',
    description: 'Отзыв',
  })
  readonly body: string;

  @ApiProperty({
    example: '4',
    description: 'Оценка',
  })
  readonly grade: number;
}
