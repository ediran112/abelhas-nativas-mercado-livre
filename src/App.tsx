import React from 'react';
import { Truck, ShieldCheck, Lock, ExternalLink } from 'lucide-react';

const PRODUCT_TITLE = '6 Caixas de abelhas sem ferrão 4 Jandaíra e 2 uruçu cinzenta';
const PRODUCT_IMAGE = 'https://pub-fd818db5a54a4e58b400698670a0a5d8.r2.dev/screenshot-20260910211312.png';
const PAYMENT_URL = 'https://mpago.la/2ifiire';
const MERCADO_ENVIOS_LOGO = 'https://blog.joompulse.com/wp-content/uploads/2026/06/mercado-envios-como-funciona-guia-iniciantes-768x432.webp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col font-sans text-[#333333]">
      {/* Top Header com a cara do Mercado Livre / Mercado Envios */}
      <header className="bg-[#fff159] border-b border-[#e5d836] shadow-xs sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={MERCADO_ENVIOS_LOGO}
              alt="Mercado Envios"
              className="h-10 sm:h-12 w-auto object-contain bg-white rounded-md p-1 border border-amber-200 shadow-2xs"
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

            {/* Informações rápidas de entrega */}
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md text-xs text-gray-600 border border-gray-100">
              <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Truck className="w-4 h-4 text-[#3483fa]" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">Entrega rápida e garantida</p>
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

            {/* Garantia Mercado Pago */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Compra Garantida pelo Mercado Pago</span>
            </div>
          </div>
        </div>
      </main>

      {/* Rodapé minimalista */}
      <footer className="py-6 text-center text-xs text-gray-500">
        <p>Mercado Envios • Pagamento 100% protegido via Mercado Pago</p>
      </footer>
    </div>
  );
}
