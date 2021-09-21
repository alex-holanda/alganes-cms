import { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";

import withBoundary from "../../core/hoc/withBoundary";
import usePerformance from "../../core/hooks/usePerformance";

import { Chart } from "../components/Chart";

function UserPerformance() {
  const { performance, fetchPerformance } = usePerformance();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetchPerformance().catch((error) => {
      setError(new Error(error.message));
    });
  }, [fetchPerformance]);

  if (error) {
    throw error;
  }

  if (!performance) {
    return (
      <div>
        <Skeleton height={227} />
      </div>
    );
  }

  return (
    <Chart
      title="Média de performance nos últimos 12 meses"
      data={performance}
    />
  );
}

export default withBoundary(UserPerformance, "performance do usuário");
