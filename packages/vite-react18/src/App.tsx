import "./App.css";
import { RouterProvider } from "react-router-dom";

interface Props {
  route: any;
}
const App: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <RouterProvider router={props.route} />
    </div>
  );
};

export default App;
