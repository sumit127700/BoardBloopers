import { useSelector } from "react-redux";
import Unauthorized from "../components/Unauthorized";

function Protected(props) {
  const checkinglogin = useSelector((state) => state.loginData.checkingLogin);
  const isloggedin = useSelector((state) => state.loginData.isLoggedIn);
  return (
    <>
      {checkinglogin ? (
        <></>
      ) : isloggedin ? (
        <props.component />
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
export default Protected;
