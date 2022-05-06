import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Post()
  createReview(@Body() reviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(reviewDto);
  }

  @Get('/:test_id')
  getReviewsByTest(@Param('test_id') test_id: number) {
    return this.reviewsService.getReviewsByTest(test_id);
  }
}
