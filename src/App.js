import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle";
import Products from "./Components/Products/Products";
import { Home } from "./pages/Home";



function App() {
  return (
  <div>
      <GlobalStyle />
      <Home />
      <Products />
      </div>
  );
}

export default App;
