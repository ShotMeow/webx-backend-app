import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Leader } from './leaders.model';
import { LeaderAppendDto } from './dto/leader-append.dto';

@Injectable()
export class LeadersService {
  constructor(@InjectModel(Leader) private leaderRepository: typeof Leader) {}

  async getLeadersByTestId(test_id: number) {
    return await this.leaderRepository.findAll({ where: { test_id } });
  }

  async leaderAppend(dto: LeaderAppendDto) {
    return await this.leaderRepository.create(dto);
  }
}
