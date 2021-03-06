import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './users/users.module';
import { User } from './users/users.model';
import { RolesModule } from './roles/roles.module';
import { Role } from './roles/roles.model';
import { AuthModule } from './auth/auth.module';
import { TestsModule } from './tests/tests.module';
import { QuestionsModule } from './questions/questions.module';
import { Test } from './tests/tests.model';
import { Question } from './questions/questions.model';
import { AnswersModule } from './answers/answers.module';
import { Answer } from './answers/answers.model';
import { LeadersModule } from './leaders/leaders.module';
import { Leader } from './leaders/leaders.model';
import { ReviewsModule } from './reviews/reviews.module';
import { Review } from './reviews/reviews.model';
import { CategoriesModule } from './categories/categories.module';
import { Category } from './categories/categories.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      models: [User, Role, Test, Question, Answer, Leader, Review, Category],
      autoLoadModels: true,
    }),
    UsersModule,
    RolesModule,
    AuthModule,
    TestsModule,
    QuestionsModule,
    AnswersModule,
    LeadersModule,
    ReviewsModule,
    CategoriesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
