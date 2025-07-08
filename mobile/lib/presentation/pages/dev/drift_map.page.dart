import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

@RoutePage()
class DriftMapPage extends ConsumerStatefulWidget {
  const DriftMapPage({super.key});

  @override
  ConsumerState<DriftMapPage> createState() => _DriftMapPageState();
}

class _DriftMapPageState extends ConsumerState<DriftMapPage> {
  @override
  void initState() {
    super.initState();
  }

  @override
  void dispose() {
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return const SizedBox.shrink();
  }
}
