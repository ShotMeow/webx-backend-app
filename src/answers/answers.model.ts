import { BelongsTo, ForeignKey, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Question } from '../questions/questions.model';

interface AnswerCreationAttrs {
  test_id: number;
  question: string;
  answer: string;
}

@Table({ tableName: 'answers' })
export class Answer extends Model<Answer, AnswerCreationAttrs> {
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
  @ForeignKey(() => Question)
  @Column({ type: DataType.INTEGER, allowNull: false })
  question_id: number;

  @ApiProperty({
    example: 'HTML Quiz',
    description: 'Название тестирования',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  answer: string;

  @ApiProperty({
    example: 'HTML Quiz',
    description: 'Название тестирования',
  })
  @Column({ type: DataType.BOOLEAN, allowNull: false })
  isTrue: boolean;

  @BelongsTo(() => Question)
  question: Question;
}
