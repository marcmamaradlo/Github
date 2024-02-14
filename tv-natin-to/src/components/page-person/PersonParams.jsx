import { useParams } from "react-router-dom";

const PersonParams = () => {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <h1>{params.id}</h1>
    </div>
  );
};

export default PersonParams;
