import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Test } from './tests.model';
import { CreateTestDto } from './dto/create-test.dto';

@Injectable()
export class TestsService {
  constructor(@InjectModel(Test) private testsRepository: typeof Test) {}

  async createTest(dto: CreateTestDto) {
    return await this.testsRepository.create(dto);
  }

  async getAllTests() {
    return await this.testsRepository.findAll({});
  }

  async getCurrentTest(id: number) {
    return await this.testsRepository.findOne({
      where: { id },
      include: { all: true },
    });
  }
}
