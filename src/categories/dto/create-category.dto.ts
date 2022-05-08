import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Front-end',
    description: 'Категория',
  })
  readonly category: string;
}
