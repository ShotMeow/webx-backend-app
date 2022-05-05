import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './tests.model';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test) private testsRepository: typeof Test) {}

  async createTest(dto: CreateTestDto) {
    const test = await this.testsRepository.create(dto);
    return test;
  }

  async getAllTests() {
    const tests = await this.testsRepository.findAll({
      include: { all: true },
    });
    return tests;
  }

  async getTestsByCategory(category: string) {
    const tests = await this.testsRepository.findAll({
      where: { category },
      include: { all: true },
    });
    return tests;
  }
}
