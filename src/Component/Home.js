import Welcom from "./Welcom";
import Featers from "./Featers";
import { useParams } from "react-router-dom";

function Home() {

  return (
    <div>
      <Welcom />
      <Featers />
    </div>
  );
}

export default Home;
