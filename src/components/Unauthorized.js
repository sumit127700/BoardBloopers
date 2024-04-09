import "./css/Unauthorized.css";
import { useNavigate } from "react-router-dom";
export default function Unauthorized() {
  const navigate = useNavigate();
  return (
    <div className="unauthPage">
      <div className="unauthContainer">
        <h1>Unauthorized</h1>
        <div>The page you are looking for requires login</div>
        <button
          className="unauthBtn"
          onClick={() => {
            navigate("/LoginPage");
          }}
        >
          Login to access content
        </button>
      </div>
    </div>
  );
}
