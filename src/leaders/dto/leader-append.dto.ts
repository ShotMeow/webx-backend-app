import { ApiProperty } from '@nestjs/swagger';

export class LeaderAppendDto {
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
    example: '88',
    description: 'Количество баллов',
  })
  readonly score: number;

  @ApiProperty({
    example: '100',
    description: 'Точность ответов',
  })
  readonly accuracy: number;

  @ApiProperty({
    example: '823',
    description: 'Длительность прохождения в секундах',
  })
  readonly duration: number;
}
