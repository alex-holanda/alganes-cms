import { AlgaNews } from "./alganews";

export namespace Post {
  export type Input = AlgaNews.components["schemas"]["PostInput"];
  export type Detailed = AlgaNews.components["schemas"]["PostDetailed"];
  export type Summary = AlgaNews.components["schemas"]["PostSummary"];
  export type Paginated = AlgaNews.components["schemas"]["PostsPaginated"];
  export type WithEarnings = AlgaNews.components["schemas"]["PostWithEarnings"];
}
