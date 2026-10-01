import React, { useState } from 'react';
import {
  Truck,
  ShieldCheck,
  Lock,
  ExternalLink,
  Accessibility,
  Star,
  ChevronDown,
  Clock,
  MessageSquare,
  ThumbsUp,
  MapPin,
  CheckCircle2
} from 'lucide-react';

const PRODUCT_TITLE = 'Duas caixas de uruçu-cinzenta (Melipona fasciculata) com envio para todo o Brasil';
const PRODUCT_IMAGE = 'https://pub-fd818db5a54a4e58b400698670a0a5d8.r2.dev/screenshot-20260910211312.png';
const PAYMENT_URL = 'https://www.mercadopago.com.br/payment-link/v1/redirect?link-id=8eb6de8e-ee08-438f-840f-9a334677e4de&source=link';
const MERCADO_LIVRE_LOGO = 'https://logodownload.org/wp-content/uploads/2016/08/mercado-livre-logo-8.png';

export default function App() {
  const [selectedSort, setSelectedSort] = useState('Mais úteis');
  const [helpfulCounts, setHelpfulCounts] = useState<{ [key: number]: number }>({
    1: 14,
    2: 9,
    3: 6
  });
  const [votedHelpful, setVotedHelpful] = useState<{ [key: number]: boolean }>({});

  const handleHelpfulClick = (id: number) => {
    if (votedHelpful[id]) {
      setHelpfulCounts((prev) => ({ ...prev, [id]: prev[id] - 1 }));
      setVotedHelpful((prev) => ({ ...prev, [id]: false }));
    } else {
      setHelpfulCounts((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      setVotedHelpful((prev) => ({ ...prev, [id]: true }));
    }
  };

  return (
    <div className="min-h-screen bg-[#ebebeb] flex flex-col font-sans text-[#333333]">
      {/* Top Header oficial do Mercado Livre com código #ffe600 */}
      <header className="bg-[#ffe600] border-b border-[#e5cf00] shadow-xs sticky top-0 z-30">
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

      {/* Conteúdo Principal */}
      <main className="flex-1 max-w-2xl w-full mx-auto px-4 py-5 sm:py-7 space-y-4">
        {/* Card Principal do Produto */}
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
              {/* Avaliações: estrelas azuis #3483fa */}
              <div className="flex items-center gap-1.5 text-xs text-gray-500">
                <span className="text-gray-600 font-medium">4.7</span>
                <div className="flex items-center text-[#3483fa]">
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <div className="relative w-3.5 h-3.5">
                    <Star className="w-3.5 h-3.5 text-[#3483fa]" />
                    <div className="absolute inset-0 overflow-hidden w-[70%]">
                      <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 text-xs">(38)</span>
              </div>

              {/* Preço em destaque: R$ 1.000 */}
              <div className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-none">
                R$ 1.000
              </div>

              {/* Parcelamento sem juros */}
              <p className="text-sm font-normal text-[#00a650]">
                10x R$ 100 sem juros
              </p>

              {/* Link Ver os meios de pagamento */}
              <div>
                <a
                  href={PAYMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-[#3483fa] hover:text-[#2968c8] hover:underline cursor-pointer inline-block font-normal"
                >
                  Ver os meios de pagamento
                </a>
              </div>
            </div>

            {/* Informações de Estoque & Quantidade */}
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

            {/* Compra Garantida com Escudo */}
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

            {/* Botão Realizar Pagamento na cor #3483fa */}
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

        {/* ========================================================================= */}
        {/* SEÇÃO DA IMAGEM 1: Informações sobre o vendedor (sem o nome KAPa e abelhas nativas) */}
        {/* ========================================================================= */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 space-y-4">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900">
            Informações sobre o vendedor
          </h2>

          {/* Localização */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
            <span>Localização: <strong className="font-medium text-gray-800">Maranhão, Brasil</strong></span>
          </div>

          {/* Termômetro de Reputação do Mercado Livre */}
          <div className="space-y-1.5 pt-1">
            <div className="grid grid-cols-5 gap-1.5 h-2 w-full">
              <div className="bg-[#fff0f0] rounded-xs" title="1"></div>
              <div className="bg-[#fff5e5] rounded-xs" title="2"></div>
              <div className="bg-[#fffde5] rounded-xs" title="3"></div>
              <div className="bg-[#f0fbe8] rounded-xs" title="4"></div>
              <div className="bg-[#00a650] h-2.5 -mt-0.25 rounded-xs shadow-xs" title="5 - Nível Máximo"></div>
            </div>
          </div>

          {/* Métricas do vendedor */}
          <div className="grid grid-cols-3 gap-2 pt-2 border-t border-gray-100 text-center">
            <div className="p-2 space-y-1">
              <span className="block text-base sm:text-xl font-bold text-gray-900 leading-tight">
                +1000
              </span>
              <span className="block text-[11px] sm:text-xs text-gray-500 leading-snug">
                Vendas nos últimos 60 dias
              </span>
            </div>

            <div className="p-2 space-y-1 border-x border-gray-100 flex flex-col items-center justify-center">
              <MessageSquare className="w-5 h-5 text-emerald-600 mb-0.5" />
              <span className="block text-[11px] sm:text-xs text-gray-600 leading-snug font-medium">
                Presta bom atendimento
              </span>
            </div>

            <div className="p-2 space-y-1 flex flex-col items-center justify-center">
              <Clock className="w-5 h-5 text-emerald-600 mb-0.5" />
              <span className="block text-[11px] sm:text-xs text-gray-600 leading-snug font-medium">
                Entrega no prazo
              </span>
            </div>
          </div>

          {/* Link ver mais dados */}
          <div className="pt-1">
            <a
              href={PAYMENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm text-[#3483fa] hover:underline font-normal inline-block"
            >
              Ver mais dados deste vendedor
            </a>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SEÇÃO DA IMAGEM 2: Opiniões do produto */}
        {/* ========================================================================= */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 sm:p-6 space-y-5">
          <div className="border-b border-gray-100 pb-4">
            <h2 className="text-lg sm:text-xl font-bold text-gray-900">
              Opiniões do produto
            </h2>
          </div>

          {/* Cabeçalho da Nota Geral com estrelas na cor #3483fa */}
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
            {/* Bloco de Nota e Estrelas */}
            <div className="sm:col-span-5 flex flex-col items-start space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
                  4.7
                </span>
                <span className="text-xs text-gray-500 font-normal">/ 5</span>
              </div>

              {/* Estrelas com #3483fa */}
              <div className="flex items-center text-[#3483fa] gap-0.5">
                <Star className="w-5 h-5 fill-[#3483fa] text-[#3483fa]" />
                <Star className="w-5 h-5 fill-[#3483fa] text-[#3483fa]" />
                <Star className="w-5 h-5 fill-[#3483fa] text-[#3483fa]" />
                <Star className="w-5 h-5 fill-[#3483fa] text-[#3483fa]" />
                <div className="relative w-5 h-5">
                  <Star className="w-5 h-5 text-[#3483fa]" />
                  <div className="absolute inset-0 overflow-hidden w-[70%]">
                    <Star className="w-5 h-5 fill-[#3483fa] text-[#3483fa]" />
                  </div>
                </div>
              </div>

              <span className="text-xs text-gray-500 pt-0.5">
                38 avaliações no total
              </span>

              <div className="inline-flex items-center gap-1.5 mt-2 bg-blue-50 text-[#3483fa] text-xs font-semibold px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>98% recomendam este produto</span>
              </div>
            </div>

            {/* Barras de Distribuição das notas */}
            <div className="sm:col-span-7 space-y-1.5 text-xs text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-12 text-right text-gray-500">5 estrelas</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#3483fa] h-full rounded-full" style={{ width: '88%' }}></div>
                </div>
                <span className="w-7 text-right text-gray-400 font-medium">33</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-12 text-right text-gray-500">4 estrelas</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#3483fa] h-full rounded-full" style={{ width: '9%' }}></div>
                </div>
                <span className="w-7 text-right text-gray-400 font-medium">3</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-12 text-right text-gray-500">3 estrelas</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#3483fa] h-full rounded-full" style={{ width: '3%' }}></div>
                </div>
                <span className="w-7 text-right text-gray-400 font-medium">1</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-12 text-right text-gray-500">2 estrelas</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-gray-200 h-full rounded-full" style={{ width: '0%' }}></div>
                </div>
                <span className="w-7 text-right text-gray-400 font-medium">0</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-12 text-right text-gray-500">1 estrela</span>
                <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div className="bg-[#3483fa] h-full rounded-full" style={{ width: '3%' }}></div>
                </div>
                <span className="w-7 text-right text-gray-400 font-medium">1</span>
              </div>
            </div>
          </div>

          {/* Filtro Ordenar Por */}
          <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-700">
              Opiniões com comentários
            </span>

            <div className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2.5 py-1 rounded-md border border-gray-200 cursor-pointer">
              <span>Ordenar: <strong className="font-medium text-gray-800">{selectedSort}</strong></span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </div>
          </div>

          {/* Lista de Avaliações / Depoimentos reais */}
          <div className="space-y-4 pt-1">
            {/* Avaliação 1 */}
            <div className="border-b border-gray-100 pb-3 space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#3483fa]">
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                </div>
                <span className="text-[11px] text-gray-400">18 mar. 2026</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                Chegaram perfeitas! As duas caixas de uruçu-cinzenta (Melipona fasciculata) vieram muito populosas, com rainha ativa e postura excelente. A embalagem com ventilação garantiu que as abelhas chegassem fortes e sem perda nenhuma. Recomendo demais!
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => handleHelpfulClick(1)}
                  className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    votedHelpful[1]
                      ? 'bg-blue-50 border-[#3483fa] text-[#3483fa] font-medium'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>É útil ({helpfulCounts[1]})</span>
                </button>
              </div>
            </div>

            {/* Avaliação 2 */}
            <div className="border-b border-gray-100 pb-3 space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#3483fa]">
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                </div>
                <span className="text-[11px] text-gray-400">04 mar. 2026</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                Excelente qualidade e envio rápido pelo Mercado Envios. Caixas muito bem confeccionadas, madeira de primeira e padrão ideal. Vendedor muito prestativo no atendimento.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => handleHelpfulClick(2)}
                  className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    votedHelpful[2]
                      ? 'bg-blue-50 border-[#3483fa] text-[#3483fa] font-medium'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>É útil ({helpfulCounts[2]})</span>
                </button>
              </div>
            </div>

            {/* Avaliação 3 */}
            <div className="pb-1 space-y-1.5">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#3483fa]">
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                  <Star className="w-3.5 h-3.5 fill-[#3483fa] text-[#3483fa]" />
                </div>
                <span className="text-[11px] text-gray-400">19 fev. 2026</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                Tudo perfeito. Espécie muito produtiva e dócil. O frete com embalagem segura chegou 100% intacto aqui no meu estado.
              </p>
              <div className="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => handleHelpfulClick(3)}
                  className={`inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full border transition-colors cursor-pointer ${
                    votedHelpful[3]
                      ? 'bg-blue-50 border-[#3483fa] text-[#3483fa] font-medium'
                      : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <ThumbsUp className="w-3 h-3" />
                  <span>É útil ({helpfulCounts[3]})</span>
                </button>
              </div>
            </div>
          </div>
        </section>
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
