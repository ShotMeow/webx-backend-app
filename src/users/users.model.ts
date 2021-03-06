import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../roles/roles.model';

interface UserCreationAttrs {
  fullName: string;
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'ФИО пользователя',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  fullName: string;

  @ApiProperty({
    example: 'username@gmail.com',
    description: 'E-mail пользователя',
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'qwerty1234', description: 'Пароль пользователя' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: '1', description: 'Идентификатор роли пользователя' })
  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
  role_id: number;

  @ApiProperty({ example: 'true', description: 'Статус аккаунта пользователя' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;
}
