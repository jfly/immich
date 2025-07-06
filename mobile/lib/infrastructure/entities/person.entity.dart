import 'package:drift/drift.dart';
import 'package:immich_mobile/infrastructure/entities/asset_face.entity.dart';
import 'package:immich_mobile/infrastructure/entities/user.entity.dart';
import 'package:immich_mobile/infrastructure/utils/drift_default.mixin.dart';

class PersonEntity extends Table with DriftDefaultsMixin {
  const PersonEntity();

  TextColumn get id => text()();

  DateTimeColumn get createdAt => dateTime().withDefault(currentDateAndTime)();

  DateTimeColumn get updatedAt => dateTime().withDefault(currentDateAndTime)();

  TextColumn get ownerId =>
      text().references(UserEntity, #id, onDelete: KeyAction.cascade)();

  TextColumn get name => text()();

  TextColumn get thumbnailPath => text().nullable()();

  BoolColumn get isHidden => boolean()();

  DateTimeColumn get birthDate => dateTime().nullable()();

  TextColumn get faceAssetId =>
      text().nullable().references(AssetFaceEntity, #id, onDelete: KeyAction.setNull)();

  BoolColumn get isFavorite => boolean()();

  TextColumn get color => text().nullable()();

  @override
  Set<Column> get primaryKey => {id};
}
