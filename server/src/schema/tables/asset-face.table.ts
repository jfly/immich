import { UpdatedAtTrigger, UpdateIdColumn } from 'src/decorators';
import { SourceType } from 'src/enum';
import { asset_face_source_type } from 'src/schema/enums';
import { asset_faces_delete_audit } from 'src/schema/functions';
import { AssetTable } from 'src/schema/tables/asset.table';
import { PersonTable } from 'src/schema/tables/person.table';
import {
  AfterDeleteTrigger,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  ForeignKeyColumn,
  Generated,
  Index,
  PrimaryGeneratedColumn,
  Table,
  Timestamp,
} from 'src/sql-tools';

@Table({ name: 'asset_faces' })
@Index({ name: 'IDX_asset_faces_assetId_personId', columns: ['assetId', 'personId'] })
@Index({ columns: ['personId', 'assetId'] })
@UpdatedAtTrigger('asset_faces_updated_at')
@AfterDeleteTrigger({
  scope: 'statement',
  function: asset_faces_delete_audit,
  referencingOldTableAs: 'old',
  when: 'pg_trigger_depth() <= 1',
})
export class AssetFaceTable {
  @PrimaryGeneratedColumn()
  id!: Generated<string>;

  @ForeignKeyColumn(() => AssetTable, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    // [assetId, personId] is the PK constraint
    index: false,
  })
  assetId!: string;

  @ForeignKeyColumn(() => PersonTable, {
    onDelete: 'SET NULL',
    onUpdate: 'CASCADE',
    nullable: true,
    // [personId, assetId] makes this redundant
    index: false,
  })
  personId!: string | null;

  @Column({ default: 0, type: 'integer' })
  imageWidth!: Generated<number>;

  @Column({ default: 0, type: 'integer' })
  imageHeight!: Generated<number>;

  @Column({ default: 0, type: 'integer' })
  boundingBoxX1!: Generated<number>;

  @Column({ default: 0, type: 'integer' })
  boundingBoxY1!: Generated<number>;

  @Column({ default: 0, type: 'integer' })
  boundingBoxX2!: Generated<number>;

  @Column({ default: 0, type: 'integer' })
  boundingBoxY2!: Generated<number>;

  @Column({ default: SourceType.MACHINE_LEARNING, enum: asset_face_source_type })
  sourceType!: Generated<SourceType>;

  @CreateDateColumn()
  createdAt!: Generated<Timestamp>;

  @CreateDateColumn()
  updatedAt!: Generated<Timestamp>;

  @UpdateIdColumn({ indexName: 'IDX_asset_faces_update_id' })
  updateId!: Generated<string>;

  @DeleteDateColumn()
  deletedAt!: Timestamp | null;
}
