
import React from "react";
import { useCarrinho } from "../CarrinhoContext";

export default function CheckoutPage() {
  const { carrinho, limparCarrinho } = useCarrinho();

  const total = carrinho.reduce((soma, item) => soma + item.preco, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Compra finalizada com sucesso!");
    limparCarrinho();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Finalizar Compra</h1>

      {carrinho.length === 0 ? (
        <p className="text-gray-600">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="mb-6">
            {carrinho.map((item, idx) => (
              <li key={idx} className="flex justify-between border-b py-2">
                <span>{item.nome}</span>
                <strong>R$ {item.preco.toFixed(2)}</strong>
              </li>
            ))}
          </ul>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input className="border p-2 w-full" placeholder="Nome completo" required />
            <input className="border p-2 w-full" placeholder="E-mail" type="email" required />
            <input className="border p-2 w-full" placeholder="Endereço de entrega" required />
            <select className="border p-2 w-full" required>
              <option value="">Forma de Pagamento</option>
              <option>Cartão de Crédito</option>
              <option>Pix</option>
              <option>Boleto</option>
            </select>
            <button type="submit" className="bg-black text-white px-4 py-2 rounded w-full">
              Finalizar Pedido - Total R$ {total.toFixed(2)}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
