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
import { PaymentProvider } from "./providers/UserContext/PaymentProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AddressProvider>
          <PaymentProvider>
            <ProductProvider>
              <CartProvider>
                <App />
              </CartProvider>
            </ProductProvider>
          </PaymentProvider>
        </AddressProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
