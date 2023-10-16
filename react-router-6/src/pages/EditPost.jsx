import { useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();

  return <h1>Edit {id} post</h1>;
}

export { EditPost };
