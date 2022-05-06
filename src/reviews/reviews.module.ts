import { Module } from '@nestjs/common';
import { ReviewsController } from './reviews.controller';
import { ReviewsService } from './reviews.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Review } from './reviews.model';
import { Test } from '../tests/tests.model';
import { User } from '../users/users.model';

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService],
  imports: [SequelizeModule.forFeature([Review, Test, User])],
})
export class ReviewsModule {}
