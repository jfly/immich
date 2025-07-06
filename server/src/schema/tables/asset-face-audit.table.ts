import { PrimaryGeneratedUuidV7Column } from 'src/decorators';
import { Column, CreateDateColumn, Table } from 'src/sql-tools';

@Table('asset_faces_audit')
export class AssetFaceAuditTable {
  @PrimaryGeneratedUuidV7Column()
  id!: string;

  @Column({ type: 'uuid', indexName: 'IDX_asset_faces_audit_face_id' })
  faceId!: string;

  @CreateDateColumn({ default: () => 'clock_timestamp()', indexName: 'IDX_asset_faces_audit_deleted_at' })
  deletedAt!: Date;
}
