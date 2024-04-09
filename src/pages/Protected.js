import Unauthorized from "../components/Unauthorized";

function Protected(props) {
  return (
    <>
      {props.checkinglogin ? (
        <></>
      ) : props.isloggedin ? (
        <props.component {...props} />
      ) : (
        <Unauthorized />
      )}
    </>
  );
}
export default Protected;
