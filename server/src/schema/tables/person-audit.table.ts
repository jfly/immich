import { PrimaryGeneratedUuidV7Column } from 'src/decorators';
import { Column, CreateDateColumn, Generated, Table, Timestamp } from 'src/sql-tools';

@Table('people_audit')
export class PersonAuditTable {
  @PrimaryGeneratedUuidV7Column()
  id!: Generated<string>;

  @Column({ type: 'uuid', indexName: 'IDX_people_audit_person_id' })
  personId!: string;

  @Column({ type: 'uuid', indexName: 'IDX_people_audit_user_id' })
  userId!: string;

  @CreateDateColumn({ default: () => 'clock_timestamp()', indexName: 'IDX_people_audit_deleted_at' })
  deletedAt!: Generated<Timestamp>;
}
