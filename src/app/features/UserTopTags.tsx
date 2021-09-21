import { useState, useEffect } from "react";

import Skeleton from "react-loading-skeleton";

import { CircleChart } from "../components/CircleChart";

import styled from "styled-components";
import useTopTags from "../../core/hooks/useTopTags";

export function UserTopTags() {
  const { topTags, fetchTopTags } = useTopTags();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    fetchTopTags().catch((error) => setError(new Error(error.message)));
  }, [fetchTopTags]);

  if (error) {
    throw error;
  }

  if (!topTags.length) {
    return (
      <UserTopTagsWrapper>
        <Skeleton height={88} circle={true} width={88} />
        <Skeleton height={88} circle={true} width={88} />
        <Skeleton height={88} circle={true} width={88} />
      </UserTopTagsWrapper>
    );
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
