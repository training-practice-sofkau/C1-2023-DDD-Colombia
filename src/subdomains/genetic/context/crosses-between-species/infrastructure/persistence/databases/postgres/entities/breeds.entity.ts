import { Index } from 'typeorm';
import { Column } from 'typeorm/decorator/columns/Column';
import { Entity } from 'typeorm/decorator/entity/Entity';

@Index('breed_id_key', ['breedId'])
@Index('breed_description_key', ['breedDescription'])
@Index('breed_feeding_key', ['breedFeeding'])
@Index('breed_type_key', ['breedType'])
@Index('breed_enviroment_key', ['breedEviroment'])
@Index('breed_hybrid_vigor_key', ['breedHybridVigor'])
@Index('breed_feeding_component_key', ['breedFeedingComponent'])
@Index('breed_food_component_key', ['breedFoodComponent'])
@Entity('breeds', { schema: 'public' })
export class BreedEntity {
  @Column('uuid', {
    primary: true,
    name: 'breed_id',
    default: () => 'uuid_generate_v4()',
  })
  breedId: string;

  @Column('character varying', { name: 'breed_description', length: 50 })
  breedDescription: string;

  @Column('character varying', { name: 'breed_feeding', length: 50 })
  breedFeeding: string;

  @Column('character varying', { name: 'breed_type', length: 50 })
  breedType: string;

  @Column('character varying', { name: 'breed_enviroment', length: 50 })
  breedEviroment: string;

  @Column('character varying', { name: 'breed_hybrid_vigor', length: 50 })
  breedHybridVigor: string;

  @Column('character varying', { name: 'breed_feeding_component', length: 50 })
  breedFeedingComponent: string;

  @Column('character varying', { name: 'breed_food_component', length: 50 })
  breedFoodComponent: string;
}
