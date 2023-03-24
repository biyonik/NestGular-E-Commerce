import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductImageEntity } from './product-image.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'numeric', precision: 18, scale: 2 })
  price: number;

  @Column()
  quantity: number;

  @Column('text')
  size: string;

  @Column('text')
  color: string;

  @Column('text')
  shippings: string;

  @Column('datetime', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('datetime', {
    name: 'updated_at',
    nullable: true,
  })
  updatedAt: Date;

  @Column('boolean', { default: true, name: 'is_active' })
  isActive: boolean;

  @Column('boolean', { default: false, name: 'is_deleted' })
  isDeleted: boolean;

  @OneToMany(() => ProductImageEntity, (image) => image.product)
  images?: ProductImageEntity[];
}
