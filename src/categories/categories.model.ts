import { Column, DataType, HasOne, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Test } from '../tests/tests.model';

interface CategoryCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'categories', createdAt: false, updatedAt: false })
export class Category extends Model<Category, CategoryCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Front-end',
    description: 'Категория',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  category: string;

  @HasOne(() => Test)
  tests: Test[];
}
