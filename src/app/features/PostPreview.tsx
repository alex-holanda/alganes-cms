import withBoundary from "../../core/hoc/withBoundary";

interface PostPreviewProps {
  postId: number;
}

function PostPreviw(props: PostPreviewProps) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #ccc",
        padding: 24,
      }}
    >
      features/PostPreview
      {props.postId}
    </div>
  );
}

export default withBoundary(PostPreviw);
