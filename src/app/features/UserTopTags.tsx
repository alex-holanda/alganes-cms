import { useState } from "react";
import styled from "styled-components";

import { CircleChart } from "../components/CircleChart";

import { Metric } from "../../sdk/@types";
import { useEffect } from "react";
import MetricService from "../../sdk/services/Metric.service";

export function UserTopTags() {
  const [topTags, setTopTags] = useState<Metric.EditorTagRatio>([]);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    MetricService.getTop3Tags()
      .then(setTopTags)
      .catch((error) => setError(new Error(error.message)));
  }, []);

  if (error) {
    throw error;
  }

  return (
    <UserTopTagsWrapper>
      {topTags.map((tag, i) => (
        <CircleChart
          key={i}
          progress={tag.percentage}
          size={88}
          caption={tag.tagName}
          theme={i === 0 ? "primary" : "default"}
        />
      ))}
    </UserTopTagsWrapper>
  );
}

const UserTopTagsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;
