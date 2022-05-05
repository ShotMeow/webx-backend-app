import { ApiProperty } from '@nestjs/swagger';

export class CreateTestDto {
  @ApiProperty({
    example: 'HTML Quiz',
    description: 'Название тестирования',
  })
  readonly name: string;

  @ApiProperty({
    example: 'html-image.jpg',
    description: 'Картинка тестирования',
  })
  readonly image: string;

  @ApiProperty({
    example: 'WebX Co.',
    description: 'Разработчики тестирования',
  })
  readonly creator: string;

  @ApiProperty({
    example: 'Hовичок',
    description: 'Сложность тестирования',
  })
  readonly complexity: string;

  @ApiProperty({
    example:
      'Пройдите квиз по самому известному инструменту разработки - HTML. По прохождению вы получите сертификат, а так-же займете место в рейтинге участников.',
    description: 'Описание тестирования',
  })
  readonly description: string;

  @ApiProperty({
    example: 'Frontend',
    description: 'Категория тестирования',
  })
  readonly category: string;
}
