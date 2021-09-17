import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../../core/store/Post.slice";
import selectPaginatedPosts from "../../core/selectors/selectPaginatedPosts";

import { usePageTitle } from "../../core/hooks/usePageTitle";

import DefaultLayout from "../layouts/Default";

import { PostsList } from "../features/PostsList";
import UserPerformance from "../features/UserPerformance";
import { UserTopTags } from "../features/UserTopTags";
import { UserEarnings } from "../features/UserEarnings";
import ErrorBoundary from "../components/ErrorBoundary";

const fakePost = {
  id: 42,
  slug: "como-fazer-x-coisas-com-react-js",
  title: "Como fazer X coisas com React.js",
  imageUrls: {
    default:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
    small:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
    medium:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
    large:
      "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
  },
  editor: {
    id: 29,
    name: "Daniel Bonifacio",
    avatarUrls: {
      default:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao.jpeg",
      small:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-small.jpeg",
      medium:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-medium.jpeg",
      large:
        "https://storage.googleapis.com/alganews-files/posts/avatar-joao-large.jpeg",
    },
    createdAt: "2017-03-04T00:12:45Z",
  },
  createdAt: "2020-12-04T00:12:45-03:00",
  updatedAt: "2020-12-05T00:12:45-03:00",
  published: true,
  tags: ["JavaScript"],
  canBePublished: true,
  canBeUnpublished: true,
  canBeDeleted: true,
  canBeEdited: true,
};

export function HomeView() {
  usePageTitle("Home");
  const dispatch = useDispatch();
  const paginatedPosts = useSelector(selectPaginatedPosts);

  return (
    <DefaultLayout>
      <div>
        <button onClick={() => dispatch(fetchPosts({ page: 2 }))}>
          Add fake post
        </button>
        {paginatedPosts?.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <ErrorBoundary component={"top tags"}>
          <UserTopTags />
        </ErrorBoundary>
        <ErrorBoundary component={"ganhos"}>
          <UserEarnings />
        </ErrorBoundary>
      </div>
      <UserPerformance />

      <ErrorBoundary component={"lista de posts"}>
        <PostsList />
      </ErrorBoundary>
    </DefaultLayout>
  );
}
