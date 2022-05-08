import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { LeaderAppendDto } from './dto/leader-append.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Таблица лидеров')
@Controller('leaders')
export class LeadersController {
  constructor(private leadersService: LeadersService) {}

  @Post()
  leaderAppend(@Body() leader_dto: LeaderAppendDto) {
    return this.leadersService.leaderAppend(leader_dto);
  }

  @Get('/:test_id')
  getLeadersByTest(@Param('test_id') test_id: number) {
    return this.leadersService.getLeadersByTestId(test_id);
  }
}
