/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { Preset } from '@superset-ui/core';
import {
  BigNumberChartPlugin,
  BigNumberTotalChartPlugin,
} from '@superset-ui/legacy-preset-chart-big-number';
import CalendarChartPlugin from '@superset-ui/legacy-plugin-chart-calendar';
import ChordChartPlugin from '@superset-ui/legacy-plugin-chart-chord';
import CountryMapChartPlugin from '@superset-ui/legacy-plugin-chart-country-map';
import EventFlowChartPlugin from '@superset-ui/legacy-plugin-chart-event-flow';
import ForceDirectedChartPlugin from '@superset-ui/legacy-plugin-chart-force-directed';
import HeatmapChartPlugin from '@superset-ui/legacy-plugin-chart-heatmap';
import HistogramChartPlugin from '@superset-ui/legacy-plugin-chart-histogram';
import HorizonChartPlugin from '@superset-ui/legacy-plugin-chart-horizon';
import MapBoxChartPlugin from '@superset-ui/legacy-plugin-chart-map-box';
import PairedTTestChartPlugin from '@superset-ui/legacy-plugin-chart-paired-t-test';
import ParallelCoordinatesChartPlugin from '@superset-ui/legacy-plugin-chart-parallel-coordinates';
import PartitionChartPlugin from '@superset-ui/legacy-plugin-chart-partition';
import PivotTableChartPlugin from '@superset-ui/legacy-plugin-chart-pivot-table';
import RoseChartPlugin from '@superset-ui/legacy-plugin-chart-rose';
import SankeyChartPlugin from '@superset-ui/legacy-plugin-chart-sankey';
import SunburstChartPlugin from '@superset-ui/legacy-plugin-chart-sunburst';
import TableChartPlugin from '@superset-ui/plugin-chart-table';
import TreemapChartPlugin from '@superset-ui/legacy-plugin-chart-treemap';
import { WordCloudChartPlugin } from '@superset-ui/plugin-chart-word-cloud';
import WorldMapChartPlugin from '@superset-ui/legacy-plugin-chart-world-map';
import {
  AreaChartPlugin,
  BarChartPlugin,
  BubbleChartPlugin,
  BulletChartPlugin,
  CompareChartPlugin,
  DistBarChartPlugin,
  DualLineChartPlugin,
  LineChartPlugin,
  LineMultiChartPlugin,
  TimePivotChartPlugin,
} from '@superset-ui/legacy-preset-chart-nvd3';
import { DeckGLChartPreset } from '@superset-ui/legacy-preset-chart-deckgl';
import {
  EchartsPieChartPlugin,
  EchartsBoxPlotChartPlugin,
  EchartsTimeseriesChartPlugin,
  EchartsGraphChartPlugin
} from '@superset-ui/plugin-chart-echarts';
import {
  AntdSelectFilterPlugin,
  AntdRangeFilterPlugin,
} from 'src/filters/components/';
import FilterBoxChartPlugin from '../FilterBox/FilterBoxChartPlugin';
import TimeTableChartPlugin from '../TimeTable/TimeTableChartPlugin';

export default class MainPreset extends Preset {
  constructor() {
    super({
      name: 'Legacy charts',
      presets: [new DeckGLChartPreset()],
      plugins: [
        //new ForceDirectedChartPlugin().configure({ key: 'directed_force' }),
        new EchartsGraphChartPlugin().configure({key: 'directed_force'})
      ],
    });
  }
}
