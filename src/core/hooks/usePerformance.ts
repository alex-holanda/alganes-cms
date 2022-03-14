import { useCallback, useState } from "react";

import Chart from "chart.js";

import { MetricService } from "alex-holanda-sdk";

import transformEditorMonthlyEarningsIntoChartJS from "../utils/transformEditorMonthlyEarningsIntoChartJS";

function usePerformance() {
  const [performance, setPerformance] = useState<Chart.ChartData>();

  const fetchPerformance = useCallback(async () => {
    MetricService.getEditorMonthlyEarnings()
      .then(transformEditorMonthlyEarningsIntoChartJS)
      .then(setPerformance);
  }, []);

  return {
    performance,
    fetchPerformance,
  };
}

export default usePerformance;
