import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: ProductSchema, name: 'Product' }]),
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
