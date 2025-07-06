import { Kysely, sql } from 'kysely';

export async function up(db: Kysely<any>): Promise<void> {
  await sql`CREATE OR REPLACE FUNCTION people_delete_audit()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS $$
    BEGIN
      INSERT INTO people_audit ("personId", "userId")
      SELECT "id", "ownerId"
      FROM OLD;
      RETURN NULL;
    END
  $$;`.execute(db);
  await sql`CREATE OR REPLACE FUNCTION asset_faces_delete_audit()
  RETURNS TRIGGER
  LANGUAGE PLPGSQL
  AS $$
    BEGIN
      INSERT INTO asset_faces_audit ("faceId")
      SELECT "id" FROM OLD;
      RETURN NULL;
    END
  $$;`.execute(db);
  await sql`CREATE TABLE "asset_faces_audit" ("id" uuid NOT NULL DEFAULT immich_uuid_v7(), "faceId" uuid NOT NULL, "deletedAt" timestamp with time zone NOT NULL DEFAULT clock_timestamp());`.execute(
    db,
  );
  await sql`CREATE TABLE "people_audit" ("id" uuid NOT NULL DEFAULT immich_uuid_v7(), "personId" uuid NOT NULL, "userId" uuid NOT NULL, "deletedAt" timestamp with time zone NOT NULL DEFAULT clock_timestamp());`.execute(
    db,
  );
  await sql`ALTER TABLE "asset_faces" ADD "createdAt" timestamp with time zone NOT NULL DEFAULT now();`.execute(db);
  await sql`ALTER TABLE "asset_faces" ADD "updatedAt" timestamp with time zone NOT NULL DEFAULT now();`.execute(db);
  await sql`ALTER TABLE "asset_faces" ADD "updateId" uuid NOT NULL DEFAULT immich_uuid_v7();`.execute(db);
  await sql`ALTER TABLE "asset_faces_audit" ADD CONSTRAINT "PK_c4240b0610ffac3d326d45d4559" PRIMARY KEY ("id");`.execute(
    db,
  );
  await sql`ALTER TABLE "people_audit" ADD CONSTRAINT "PK_8f107fb7bfb5e31592d75f9d5c7" PRIMARY KEY ("id");`.execute(db);
  await sql`CREATE INDEX "IDX_asset_faces_audit_face_id" ON "asset_faces_audit" ("faceId")`.execute(db);
  await sql`CREATE INDEX "IDX_asset_faces_audit_deleted_at" ON "asset_faces_audit" ("deletedAt")`.execute(db);
  await sql`CREATE INDEX "IDX_asset_faces_update_id" ON "asset_faces" ("updateId")`.execute(db);
  await sql`CREATE INDEX "IDX_people_audit_person_id" ON "people_audit" ("personId")`.execute(db);
  await sql`CREATE INDEX "IDX_people_audit_user_id" ON "people_audit" ("userId")`.execute(db);
  await sql`CREATE INDEX "IDX_people_audit_deleted_at" ON "people_audit" ("deletedAt")`.execute(db);
  await sql`CREATE OR REPLACE TRIGGER "people_delete_audit"
  AFTER DELETE ON "person"
  REFERENCING OLD TABLE AS "old"
  FOR EACH STATEMENT
  WHEN (pg_trigger_depth() = 0)
  EXECUTE FUNCTION people_delete_audit();`.execute(db);
  await sql`CREATE OR REPLACE TRIGGER "asset_faces_delete_audit"
  AFTER DELETE ON "asset_faces"
  REFERENCING OLD TABLE AS "old"
  FOR EACH STATEMENT
  WHEN (pg_trigger_depth() <= 1)
  EXECUTE FUNCTION asset_faces_delete_audit();`.execute(db);
  await sql`CREATE OR REPLACE TRIGGER "asset_faces_updated_at"
  BEFORE UPDATE ON "asset_faces"
  FOR EACH ROW
  EXECUTE FUNCTION updated_at();`.execute(db);
}

export async function down(db: Kysely<any>): Promise<void> {
  await sql`DROP TRIGGER "asset_faces_delete_audit" ON "asset_faces";`.execute(db);
  await sql`DROP TRIGGER "asset_faces_updated_at" ON "asset_faces";`.execute(db);
  await sql`DROP TRIGGER "people_delete_audit" ON "person";`.execute(db);
  await sql`DROP INDEX "IDX_asset_faces_update_id";`.execute(db);
  await sql`DROP INDEX "IDX_asset_faces_audit_face_id";`.execute(db);
  await sql`DROP INDEX "IDX_asset_faces_audit_deleted_at";`.execute(db);
  await sql`DROP INDEX "IDX_people_audit_person_id";`.execute(db);
  await sql`DROP INDEX "IDX_people_audit_user_id";`.execute(db);
  await sql`DROP INDEX "IDX_people_audit_deleted_at";`.execute(db);
  await sql`ALTER TABLE "asset_faces_audit" DROP CONSTRAINT "PK_c4240b0610ffac3d326d45d4559";`.execute(db);
  await sql`ALTER TABLE "people_audit" DROP CONSTRAINT "PK_8f107fb7bfb5e31592d75f9d5c7";`.execute(db);
  await sql`ALTER TABLE "asset_faces" DROP COLUMN "createdAt";`.execute(db);
  await sql`ALTER TABLE "asset_faces" DROP COLUMN "updatedAt";`.execute(db);
  await sql`ALTER TABLE "asset_faces" DROP COLUMN "updateId";`.execute(db);
  await sql`DROP TABLE "asset_faces_audit";`.execute(db);
  await sql`DROP TABLE "people_audit";`.execute(db);
  await sql`DROP FUNCTION people_delete_audit;`.execute(db);
  await sql`DROP FUNCTION asset_faces_delete_audit;`.execute(db);
}
