import React, { useState } from 'react';
import { Truck, ShieldCheck, Lock, ExternalLink, Accessibility, Star, ChevronDown } from 'lucide-react';

const PRODUCT_TITLE = '6 Caixas de abelhas sem ferrão 4 Jandaíra e 2 uruçu cinzenta';
const PRODUCT_IMAGE = 'https://pub-fd818db5a54a4e58b400698670a0a5d8.r2.dev/screenshot-20260910211312.png';
const PAYMENT_URL = 'https://mpago.la/2ifiire';
const MERCADO_LIVRE_LOGO = 'https://logodownload.org/wp-content/uploads/2016/08/mercado-livre-logo-8.png';

export default function App() {
  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col font-sans text-[#333333]">
      {/* Top Header com a cara do Mercado Livre */}
      <header className="bg-[#fff159] border-b border-[#e5d836] shadow-xs sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={MERCADO_LIVRE_LOGO}
              alt="Mercado Livre"
              className="h-9 sm:h-11 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-800 bg-white/70 px-3 py-1.5 rounded-full border border-amber-300">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>Ambiente Seguro</span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal Simples e Direto */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-6 sm:py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {/* Tag de Envio */}
          <div className="bg-emerald-50 border-b border-emerald-100 px-5 py-2.5 flex items-center gap-2 text-xs font-semibold text-emerald-800">
            <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Envio pelo Mercado Envios com rastreamento e seguro</span>
          </div>

          <div className="p-5 sm:p-7 space-y-5">
            {/* Título do produto */}
            <h1 className="text-lg sm:text-2xl font-bold text-gray-900 leading-snug">
              {PRODUCT_TITLE}
            </h1>

            {/* Imagem do produto */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-2 sm:p-4 flex items-center justify-center">
              <img
                src={PRODUCT_IMAGE}
                alt={PRODUCT_TITLE}
                className="max-h-[380px] w-full object-contain rounded-md"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bloco de Avaliação e Preço (Padrão Mercado Livre) */}
            <div className="space-y-1.5 pt-1">
              {/* Avaliações: 4.5 estrelas azuis e (2) */}
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="text-gray-500 font-normal">4.5</span>
                <div className="flex items-center text-[#3483fa]">
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <div className="relative w-3.5 h-3.5">
                    <Star className="w-3.5 h-3.5 text-[#3483fa]" />
                    <div className="absolute inset-0 overflow-hidden w-[50%]">
                      <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 text-xs">(2)</span>
              </div>

              {/* Preço grande */}
              <div className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-none">
                R$ 2.800
              </div>

              {/* Parcelamento sem juros */}
              <p className="text-sm font-normal text-[#00a650]">
                10x R$ 280 sem juros
              </p>

              {/* Link Ver os meios de pagamento */}
              <div>
                <a
                  href={PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#3483fa] hover:text-[#2968c8] hover:underline cursor-pointer inline-block"
                >
                  Ver os meios de pagamento
                </a>
              </div>
            </div>

            {/* Informações da Primeira Imagem: Estoque Disponível & Quantidade */}
            <div className="pt-2 space-y-1">
              <p className="text-sm font-semibold text-gray-900">
                Estoque disponível
              </p>

              <div className="relative inline-block">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm text-gray-800">
                  <span>Quantidade:</span>
                  <span className="font-semibold text-gray-900">1 unidade</span>
                  <ChevronDown className="w-3.5 h-3.5 text-[#3483fa] stroke-[2.5]" />
                  <span className="text-gray-400 text-xs font-normal">(+10 disponíveis)</span>
                </div>
              </div>
            </div>

            {/* Informações da Segunda Imagem: Compra Garantida com Escudo */}
            <div className="pt-1 flex items-start gap-2 text-xs text-gray-500 leading-snug">
              <ShieldCheck className="w-4 h-4 text-gray-400 shrink-0 mt-0.5 stroke-[1.75]" />
              <p>
                <a
                  href={PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3483fa] hover:underline cursor-pointer"
                >
                  Compra Garantida
                </a>
                . Receba o produto que está esperando ou devolvemos o dinheiro.
              </p>
            </div>

            {/* Informações de envio */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md text-xs text-gray-600 border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4 text-[#3483fa]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Entrega rápida pelo Mercado Envios</p>
                <p className="text-gray-500">Transporte com embalagem ventilada e segura para abelhas sem ferrão.</p>
              </div>
            </div>

            {/* Botão Realizar Pagamento na cor do Mercado Livre */}
            <div className="pt-2">
              <a
                href={PAYMENT_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-realizar-pagamento"
                className="w-full py-3.5 px-6 rounded-md bg-[#3483fa] hover:bg-[#2968c8] active:bg-[#1f53a3] text-white font-bold text-base shadow-sm transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer text-center group"
              >
                <span>Realizar pagamento</span>
                <ExternalLink className="w-4 h-4 text-blue-100 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé oficial Mercado Livre */}
      <footer className="bg-white border-t border-gray-200 mt-auto py-5 px-4 text-xs text-gray-700">
        <div className="max-w-6xl mx-auto space-y-2">
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-1.5 leading-relaxed font-normal">
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Trabalhe conosco</span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Termos e condições</span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Promoções</span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Como cuidamos da sua privacidade</span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer inline-flex items-center gap-1.5">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full border border-gray-600 text-gray-700">
                <Accessibility className="w-2.5 h-2.5" />
              </span>
              Acessibilidade
            </span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Contato</span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Informações sobre seguros</span>
            <span className="hover:text-blue-600 hover:underline cursor-pointer">Programa de Afiliados</span>
          </nav>

          <p className="text-[11px] text-gray-500">
            Copyright © 1999-2026 Mercado Livre Brasil Ltda.
          </p>
        </div>
      </footer>
    </div>
  );
}
