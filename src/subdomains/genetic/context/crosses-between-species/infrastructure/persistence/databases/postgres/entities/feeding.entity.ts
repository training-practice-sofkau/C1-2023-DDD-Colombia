import { Column, Entity, Index } from 'typeorm';

@Index('feeding_id_key', ['feedingId'])
@Index('food_component_breed_key', ['foodComponentBreed'])
@Index('food_permitted_feeding_key', ['foodPermittedFeeding'])
@Index('description_feeding_key', ['descriptionFeeding'])
@Index('food_quality_feeding_key', ['foodQualityFeeding'])
@Entity('feeding', { schema: 'public' })
export class FeedingEntity {
  @Column('uuid', {
    primary: true,
    name: 'feeding_id',
    default: () => 'uuid_generate_v4()',
  })
  feedingId: string;

  @Column('character varying', { name: 'food_component_breed', length: 50 })
  foodComponentBreed: string;

  @Column('character varying', { name: 'food_permitted_feeding', length: 50 })
  foodPermittedFeeding: string;

  @Column('character varying', { name: 'description_feeding', length: 50 })
  descriptionFeeding: string;

  @Column('character varying', { name: 'food_quality_feeding', length: 50 })
  foodQualityFeeding: string;
}
