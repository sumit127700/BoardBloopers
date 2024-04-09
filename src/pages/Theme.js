import "./css/ThemePage.css";
import ThemeDrawer from "../components/Themedrawer";
function ThemePage(props) {
  return (
    <div className="ThemePage">
      <div className="card">
        <ThemeDrawer
          colorheading={props.colorheading}
          setColor={props.setColor}
        />
      </div>
    </div>
  );
}
export default ThemePage;
