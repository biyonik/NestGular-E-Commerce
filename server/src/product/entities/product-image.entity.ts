import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from './product.entity';

@Entity({ name: 'product_image' })
export class ProductImageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  imageUrl: string;

  @ManyToOne(() => ProductEntity, (product) => product.images, { eager: true })
  product: ProductEntity;
}
