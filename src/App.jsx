
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import CarrinhoPage from "./pages/CarrinhoPage";
import ProdutoDetalhe from "./pages/ProdutoDetalhe";
import { CarrinhoProvider } from "./CarrinhoContext";

export default function App() {
  return (
    <CarrinhoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CheckoutPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="/produto/:id" element={<ProdutoDetalhe />} />
        </Routes>
      </Router>
    </CarrinhoProvider>
  );
}
