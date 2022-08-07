import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Grapihcs from "./pages/Graphics";
import Users from "./pages/Users";
import store from "./store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/grap" element={<Grapihcs />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
