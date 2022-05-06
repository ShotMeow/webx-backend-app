import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { CreateCategoryDto } from './dto/create-category.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category) private categoriesRepository: typeof Category,
  ) {}

  async createCategory(dto: CreateCategoryDto) {
    return await this.categoriesRepository.create(dto);
  }

  async getAllCategories() {
    return await this.categoriesRepository.findAll();
  }
}
