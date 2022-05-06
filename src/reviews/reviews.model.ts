import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { Test } from '../tests/tests.model';

interface ReviewCreationAttrs {
  user_id: number;
  test_id: number;
  body: string;
  grade: number;
}

@Table({ tableName: 'reviews' })
export class Review extends Model<Review, ReviewCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: '1',
    description: 'Идентификатор пользователя',
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;

  @ApiProperty({
    example: '1',
    description: 'Идентификатор теста',
  })
  @ForeignKey(() => Test)
  @Column({ type: DataType.INTEGER, allowNull: false })
  test_id: number;

  @ApiProperty({
    example:
      'Топ! Серьезно, очень понравился этот курс, давно хотел погрузиться в разработку серверной части, но не знал с чего начать. Очень быстро влился и уже сам разрабатываю один проектик на React + NestJS. Спасибо WebX!',
    description: 'Отзыв',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  body: string;

  @ApiProperty({
    example: '4',
    description: 'Оценка',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  grade: number;
}
