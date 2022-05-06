import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Review } from './reviews.model';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Review) private reviewRepository: typeof Review) {}

  async createReview(dto: CreateReviewDto) {
    return await this.reviewRepository.create(dto);
  }

  async getReviewsByTest(test_id: number) {
    return await this.reviewRepository.findAll({ where: { test_id } });
  }
}
