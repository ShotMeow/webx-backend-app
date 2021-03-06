import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from '../questions/questions.model';
import { Leader } from '../leaders/leaders.model';
import { Review } from '../reviews/reviews.model';
import { Category } from '../categories/categories.model';

interface TestCreationAttrs {
  name: string;
  image: string;
  creator: string;
  complexity: string;
  description: string;
  category: string;
}

@Table({ tableName: 'tests' })
export class Test extends Model<Test, TestCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'HTML Quiz',
    description: 'Название тестирования',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @ApiProperty({
    example: 'html-image.jpg',
    description: 'Картинка тестирования',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  image: string;

  @ApiProperty({
    example: 'WebX Co.',
    description: 'Разработчики тестирования',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  creator: string;

  @ApiProperty({
    example: 'Hовичок',
    description: 'Сложность тестирования',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  complexity: string;

  @ApiProperty({
    example:
      'Пройдите квиз по самому известному инструменту разработки - HTML. По прохождению вы получите сертификат, а так-же займете место в рейтинге участников.',
    description: 'Описание тестирования',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  description: string;

  @ApiProperty({
    example: 'Frontend',
    description: 'Категория тестирования',
  })
  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  category_id: number;

  @HasMany(() => Question)
  questions: Question[];

  @HasMany(() => Leader)
  leaders: Leader[];

  @HasMany(() => Review)
  reviews: Review[];
}
