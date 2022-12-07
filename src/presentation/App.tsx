import { CartContextProvider } from "./hooks/useCart";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="app-container">
      <CartContextProvider>
        <Router />
      </CartContextProvider>
      <GlobalStyle />
    </div>
  );
}
