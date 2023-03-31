import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'category' })
export class CategoryEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  title: string;

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

  @OneToMany(() => ProductEntity, (product) => product.category)
  products?: ProductEntity[];
}
