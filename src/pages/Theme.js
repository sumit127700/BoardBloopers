import "./css/ThemePage.css";
import ThemeDrawer from "../components/Themedrawer";
function ThemePage() {
  return (
    <div className="ThemePage">
      <div className="card">
        <ThemeDrawer />
      </div>
    </div>
  );
}
export default ThemePage;
