import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { Admin } from './admin/entities/admin.entity';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';
import { SellerModule } from './seller/seller.module';
import { Seller } from './seller/entities/seller.entity';
import { CategoryModule } from './category/category.module';
import { Category } from './category/entities/category.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'tw0t0w3rs',
      entities: [User, Admin, Customer, Seller, Category],
      database: 'upholstery-ecommerce',
      synchronize: true,
      logging: true,
    }),
    UserModule,
    AuthModule,
    AdminModule,
    CustomerModule,
    SellerModule,
    CategoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
