//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//
// @dart=2.18

// ignore_for_file: unused_element, unused_import
// ignore_for_file: always_put_required_named_parameters_first
// ignore_for_file: constant_identifier_names
// ignore_for_file: lines_longer_than_80_chars

part of openapi.api;

class SyncFaceV1 {
  /// Returns a new [SyncFaceV1] instance.
  SyncFaceV1({
    required this.assetId,
    required this.boundingBoxX1,
    required this.boundingBoxX2,
    required this.boundingBoxY1,
    required this.boundingBoxY2,
    required this.createdAt,
    required this.deletedAt,
    required this.id,
    required this.imageHeight,
    required this.imageWidth,
    required this.personId,
    required this.sourceType,
    required this.updatedAt,
  });

  String assetId;

  int boundingBoxX1;

  int boundingBoxX2;

  int boundingBoxY1;

  int boundingBoxY2;

  DateTime createdAt;

  DateTime? deletedAt;

  String id;

  int imageHeight;

  int imageWidth;

  String? personId;

  SourceType sourceType;

  DateTime updatedAt;

  @override
  bool operator ==(Object other) => identical(this, other) || other is SyncFaceV1 &&
    other.assetId == assetId &&
    other.boundingBoxX1 == boundingBoxX1 &&
    other.boundingBoxX2 == boundingBoxX2 &&
    other.boundingBoxY1 == boundingBoxY1 &&
    other.boundingBoxY2 == boundingBoxY2 &&
    other.createdAt == createdAt &&
    other.deletedAt == deletedAt &&
    other.id == id &&
    other.imageHeight == imageHeight &&
    other.imageWidth == imageWidth &&
    other.personId == personId &&
    other.sourceType == sourceType &&
    other.updatedAt == updatedAt;

  @override
  int get hashCode =>
    // ignore: unnecessary_parenthesis
    (assetId.hashCode) +
    (boundingBoxX1.hashCode) +
    (boundingBoxX2.hashCode) +
    (boundingBoxY1.hashCode) +
    (boundingBoxY2.hashCode) +
    (createdAt.hashCode) +
    (deletedAt == null ? 0 : deletedAt!.hashCode) +
    (id.hashCode) +
    (imageHeight.hashCode) +
    (imageWidth.hashCode) +
    (personId == null ? 0 : personId!.hashCode) +
    (sourceType.hashCode) +
    (updatedAt.hashCode);

  @override
  String toString() => 'SyncFaceV1[assetId=$assetId, boundingBoxX1=$boundingBoxX1, boundingBoxX2=$boundingBoxX2, boundingBoxY1=$boundingBoxY1, boundingBoxY2=$boundingBoxY2, createdAt=$createdAt, deletedAt=$deletedAt, id=$id, imageHeight=$imageHeight, imageWidth=$imageWidth, personId=$personId, sourceType=$sourceType, updatedAt=$updatedAt]';

  Map<String, dynamic> toJson() {
    final json = <String, dynamic>{};
      json[r'assetId'] = this.assetId;
      json[r'boundingBoxX1'] = this.boundingBoxX1;
      json[r'boundingBoxX2'] = this.boundingBoxX2;
      json[r'boundingBoxY1'] = this.boundingBoxY1;
      json[r'boundingBoxY2'] = this.boundingBoxY2;
      json[r'createdAt'] = this.createdAt.toUtc().toIso8601String();
    if (this.deletedAt != null) {
      json[r'deletedAt'] = this.deletedAt!.toUtc().toIso8601String();
    } else {
    //  json[r'deletedAt'] = null;
    }
      json[r'id'] = this.id;
      json[r'imageHeight'] = this.imageHeight;
      json[r'imageWidth'] = this.imageWidth;
    if (this.personId != null) {
      json[r'personId'] = this.personId;
    } else {
    //  json[r'personId'] = null;
    }
      json[r'sourceType'] = this.sourceType;
      json[r'updatedAt'] = this.updatedAt.toUtc().toIso8601String();
    return json;
  }

  /// Returns a new [SyncFaceV1] instance and imports its values from
  /// [value] if it's a [Map], null otherwise.
  // ignore: prefer_constructors_over_static_methods
  static SyncFaceV1? fromJson(dynamic value) {
    upgradeDto(value, "SyncFaceV1");
    if (value is Map) {
      final json = value.cast<String, dynamic>();

      return SyncFaceV1(
        assetId: mapValueOfType<String>(json, r'assetId')!,
        boundingBoxX1: mapValueOfType<int>(json, r'boundingBoxX1')!,
        boundingBoxX2: mapValueOfType<int>(json, r'boundingBoxX2')!,
        boundingBoxY1: mapValueOfType<int>(json, r'boundingBoxY1')!,
        boundingBoxY2: mapValueOfType<int>(json, r'boundingBoxY2')!,
        createdAt: mapDateTime(json, r'createdAt', r'')!,
        deletedAt: mapDateTime(json, r'deletedAt', r''),
        id: mapValueOfType<String>(json, r'id')!,
        imageHeight: mapValueOfType<int>(json, r'imageHeight')!,
        imageWidth: mapValueOfType<int>(json, r'imageWidth')!,
        personId: mapValueOfType<String>(json, r'personId'),
        sourceType: SourceType.fromJson(json[r'sourceType'])!,
        updatedAt: mapDateTime(json, r'updatedAt', r'')!,
      );
    }
    return null;
  }

  static List<SyncFaceV1> listFromJson(dynamic json, {bool growable = false,}) {
    final result = <SyncFaceV1>[];
    if (json is List && json.isNotEmpty) {
      for (final row in json) {
        final value = SyncFaceV1.fromJson(row);
        if (value != null) {
          result.add(value);
        }
      }
    }
    return result.toList(growable: growable);
  }

  static Map<String, SyncFaceV1> mapFromJson(dynamic json) {
    final map = <String, SyncFaceV1>{};
    if (json is Map && json.isNotEmpty) {
      json = json.cast<String, dynamic>(); // ignore: parameter_assignments
      for (final entry in json.entries) {
        final value = SyncFaceV1.fromJson(entry.value);
        if (value != null) {
          map[entry.key] = value;
        }
      }
    }
    return map;
  }

  // maps a json object with a list of SyncFaceV1-objects as value to a dart map
  static Map<String, List<SyncFaceV1>> mapListFromJson(dynamic json, {bool growable = false,}) {
    final map = <String, List<SyncFaceV1>>{};
    if (json is Map && json.isNotEmpty) {
      // ignore: parameter_assignments
      json = json.cast<String, dynamic>();
      for (final entry in json.entries) {
        map[entry.key] = SyncFaceV1.listFromJson(entry.value, growable: growable,);
      }
    }
    return map;
  }

  /// The list of required keys that must be present in a JSON.
  static const requiredKeys = <String>{
    'assetId',
    'boundingBoxX1',
    'boundingBoxX2',
    'boundingBoxY1',
    'boundingBoxY2',
    'createdAt',
    'deletedAt',
    'id',
    'imageHeight',
    'imageWidth',
    'personId',
    'sourceType',
    'updatedAt',
  };
}

