import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import store from "./store";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Users />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
