import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'Иванов Иван Иванович',
    description: 'ФИО пользователя',
  })
  readonly fullName: string;
  @ApiProperty({
    example: 'username@gmail.com',
    description: 'E-mail пользователя',
  })
  readonly email: string;
  @ApiProperty({ example: 'qwerty1234', description: 'Пароль пользователя' })
  readonly password: string;
}
