import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import {
  UserProvider,
  ProductProvider,
  CartProvider,
} from "./providers/UserContext";
import { AddressProvider } from "./providers/UserContext/AddressProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AddressProvider>
          <ProductProvider>
            <CartProvider>
              <App />
            </CartProvider>
          </ProductProvider>
        </AddressProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
