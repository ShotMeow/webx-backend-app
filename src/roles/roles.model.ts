import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface RoleCreationAttrs {
  value: string;
  description: string;
}

@Table({ tableName: 'users' })
export class Role extends Model<Role, RoleCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'EDITOR',
    description: 'Значение роли пользователя',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value: string;

  @ApiProperty({
    example: 'Редактор',
    description: 'Описание роли',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  description: string;
}
