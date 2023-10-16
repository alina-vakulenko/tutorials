import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function SinglePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({});

  const goBack = () => navigate(-1);
  const goHome = () => navigate("/", { replace: true });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      {/* BAD APPROACH, better use Link  */}
      <button onClick={goHome}>Go home</button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/posts/${id}/edit`}>Edit this post</Link>
        </>
      )}
    </div>
  );
}

export { SinglePage };
