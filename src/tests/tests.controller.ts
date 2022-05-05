import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from '../users/users.model';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';

@ApiTags('Тесты')
@Controller('tests')
export class TestsController {
  constructor(private testsService: TestsService) {}

  @ApiOperation({ summary: 'Создание теста' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() testDto: CreateTestDto) {
    return this.testsService.createTest(testDto);
  }

  @ApiOperation({ summary: 'Получить все тесты' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getAll() {
    return this.testsService.getAllTests();
  }

  @ApiOperation({ summary: 'Получить тесты по категории' })
  @ApiResponse({ status: 200, type: [User] })
  @Get('/:value')
  getByCategory(@Param('value') value: string) {
    return this.testsService.getTestsByCategory(value);
  }
}
