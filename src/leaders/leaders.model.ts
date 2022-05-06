import { ForeignKey, Model } from 'sequelize-typescript';
import { Column, DataType, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Test } from '../tests/tests.model';
import { User } from '../users/users.model';

interface LeaderCreationAttrs {
  user_id: number;
  test_id: number;
  score: number;
  accuracy: number;
  duration: number;
}

@Table({ tableName: 'leaders' })
export class Leader extends Model<Leader, LeaderCreationAttrs> {
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
    example: '88',
    description: 'Количество баллов',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  score: number;

  @ApiProperty({
    example: '100',
    description: 'Точность ответов',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  accuracy: number;

  @ApiProperty({
    example: '823',
    description: 'Длительность прохождения в секундах',
  })
  @Column({ type: DataType.INTEGER, allowNull: false })
  duration: number;
}
