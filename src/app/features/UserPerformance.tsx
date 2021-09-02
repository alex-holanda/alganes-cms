import { useState, useEffect } from "react";

import transformEditorMonthlyEarningsIntoChartJS from "../../core/utils/transformEditorMonthlyEarningsIntoChartJS";

import MetricService from "../../sdk/services/Metric.service";

import { Chart, ChartProps } from "../components/Chart";

export function UserPerformance() {
  const [editorEarnings, setEditorEarnings] = useState<ChartProps["data"]>();

  useEffect(() => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJS)
      .then(setEditorEarnings);
  }, []);

  if (!editorEarnings) {
    return null;
  }

  return (
    <Chart
      title="Média de performance nos últimos 12 meses"
      data={editorEarnings}
    />
  );
}
