import { ForeignKey, HasMany, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Test } from '../tests/tests.model';
import { Answer } from '../answers/answers.model';

interface QuestionCreationAttrs {
  test_id: number;
  question: string;
  answer: string;
}

@Table({ tableName: 'questions' })
export class Question extends Model<Question, QuestionCreationAttrs> {
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
  @ForeignKey(() => Test)
  @Column({ type: DataType.INTEGER, allowNull: false })
  test_id: number;

  @ApiProperty({
    example: 'HTML Quiz',
    description: 'Название тестирования',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  question: string;

  @HasMany(() => Answer)
  answers: Answer[];
}
