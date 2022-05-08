import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({
    example: 'Editor',
    description: 'Значение роли пользователя',
  })
  readonly value: string;
}
