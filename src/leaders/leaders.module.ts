import { Module } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { LeadersController } from './leaders.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test } from '../tests/tests.model';
import { Leader } from './leaders.model';

@Module({
  providers: [LeadersService],
  controllers: [LeadersController],
  imports: [SequelizeModule.forFeature([Leader, Test])],
})
export class LeadersModule {}
