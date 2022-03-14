import { useCallback, useState } from "react";

import { Metric, MetricService } from "alex-holanda-sdk";

function useTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([]);

  const fetchTopTags = useCallback(async () => {
    MetricService.getTop3Tags().then(setTopTags);
  }, []);

  return {
    topTags,
    fetchTopTags,
  };
}

export default useTopTags;
