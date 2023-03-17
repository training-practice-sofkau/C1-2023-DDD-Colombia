import { Column, Entity, Index } from 'typeorm';
@Index('hybrid_vigor_id_key', ['hybridVigorId'])
@Index('weigth_hybrid_vigor_key', ['weigthHybridVigor'])
@Index('age_hybrid_vigor_key', ['ageHybridVigor'])
@Index('weigth_key', ['weigth'])
@Entity('hybrid_vigor', { schema: 'public' })
export class HybridVigorEntity {
  @Column('uuid', {
    primary: true,
    name: 'hybrid_vigor_id',
    default: () => 'uuid_generate_v4()',
  })
  hybridVigorId: string;

  @Column('character varying', { name: 'weigth', length: 50 })
  weigth: string;

  @Column('character varying', { name: 'age_hybrid_vigor', length: 50 })
  ageHybridVigor: string;

  @Column('character varying', { name: 'weigth_hybrid_vigor', length: 50 })
  weigthHybridVigor: string;
}
