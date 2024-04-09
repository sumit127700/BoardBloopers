import "./css/Unauthorized.css";
import { useNavigate } from "react-router-dom";
export default function ComingSoon() {
  const navigate = useNavigate();
  return (
    <div className="unauthPage">
      <div className="unauthContainer">
        <h1>Coming Soon</h1>
        <div>This functionality will be added soon.</div>
        <button
          className="unauthBtn"
          onClick={() => {
            navigate("/");
          }}
        >
          Go to Home Page.
        </button>
      </div>
    </div>
  );
}
