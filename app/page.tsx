'use client';

import { useState } from 'react';
import { Zap, Shield, Clock, ChevronRight, Gamepad2, Gift, Smartphone, CreditCard } from 'lucide-react';

interface Product {
  id: string;
  category: string;
  name: string;
  price: string;
  icon: string;
}

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const products: Product[] = [
    { id: '1', category: 'Free Fire', name: '1450 Diamonds', price: 'Rp184.000', icon: '💎' },
    { id: '2', category: 'Mobile Legends', name: '165 Diamonds (150+15)', price: 'Rp147.730', icon: '💎' },
    { id: '3', category: 'Mobile Legends', name: '330 Diamonds (300+30)', price: 'Rp295.000', icon: '💎' },
    { id: '4', category: 'PUBG Mobile', name: '42002 + 16801 UC', price: 'Rp485.379', icon: '🪙' },
    { id: '5', category: 'Free Fire', name: '720 Diamonds', price: 'Rp92.000', icon: '💎' },
    { id: '6', category: 'Voucher', name: 'Google Play Rp100.000', price: 'Rp102.000', icon: '🎟️' },
    { id: '7', category: 'Voucher', name: 'Steam Wallet $10', price: 'Rp155.000', icon: '🎟️' },
    { id: '8', category: 'Mobile Legends', name: '550 Diamonds (500+50)', price: 'Rp490.000', icon: '💎' },
  ];

  const categories = ['all', 'Free Fire', 'Mobile Legends', 'PUBG Mobile', 'Voucher'];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      {/* Cyber Grid Background */}
      <div className="fixed inset-0 cyber-grid opacity-20 pointer-events-none" />

      {/* Gradient Orbs */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-neon-blue rounded-full filter blur-[120px] opacity-20 animate-pulse-slow" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-neon-purple rounded-full filter blur-[120px] opacity-20 animate-pulse-slow" />

      {/* Navbar */}
      <nav className="relative z-10 border-b border-gray-800 bg-black/50 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-neon-blue animate-pulse" />
              <h1 className="font-orbitron text-2xl md:text-3xl font-bold gradient-text">
                RIWOXX TOP UP
              </h1>
            </div>
            <button className="px-4 py-2 md:px-6 md:py-2 bg-neon-blue text-black font-semibold rounded-lg hover:bg-neon-blue/80 transition-all glow-box font-poppins text-sm md:text-base">
              Hubungi Kami
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-neon-blue/10 border border-neon-blue/30 rounded-full">
              <span className="text-neon-blue font-semibold text-sm">⚡ Instan & Terpercaya</span>
            </div>

            <h2 className="font-orbitron text-4xl md:text-6xl font-bold leading-tight">
              Top Up Game & <span className="gradient-text">Voucher Instan</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-poppins">
              Beli Diamonds, UC, Voucher, dan Pulsa tanpa ribet! Bayar pakai <span className="text-neon-blue font-semibold">DANA, BCA, Krom Bank, atau Seabank</span>.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800">
                <Clock className="w-4 h-4 text-neon-blue" />
                <span className="text-sm">Proses Cepat</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800">
                <Shield className="w-4 h-4 text-neon-blue" />
                <span className="text-sm">100% Aman</span>
              </div>
              <div className="flex items-center space-x-2 px-4 py-2 bg-gray-900 rounded-lg border border-gray-800">
                <CreditCard className="w-4 h-4 text-neon-blue" />
                <span className="text-sm">Banyak Metode</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://riwoxxstore.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-neon-blue text-black font-bold rounded-xl hover:bg-neon-blue/80 transition-all glow-box font-orbitron text-lg flex items-center justify-center space-x-2"
              >
                <span>Order Sekarang</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue font-bold rounded-xl hover:bg-neon-blue/10 transition-all font-orbitron text-lg">
                Lihat Promo
              </button>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative animate-float hidden md:block">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-radial from-neon-blue/20 to-transparent rounded-full" />
              <div className="relative z-10 text-center space-y-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-neon-blue/30 glow-border transform hover:scale-105 transition-transform">
                    <Gamepad2 className="w-16 h-16 text-neon-blue mx-auto mb-3" />
                    <p className="font-orbitron text-sm">Top Up Game</p>
                  </div>
                  <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-neon-purple/30 transform hover:scale-105 transition-transform">
                    <Gift className="w-16 h-16 text-neon-purple mx-auto mb-3" />
                    <p className="font-orbitron text-sm">Voucher Digital</p>
                  </div>
                  <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-neon-blue/30 transform hover:scale-105 transition-transform">
                    <Smartphone className="w-16 h-16 text-neon-blue mx-auto mb-3" />
                    <p className="font-orbitron text-sm">Pulsa & Data</p>
                  </div>
                  <div className="p-6 bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-neon-purple/30 glow-border transform hover:scale-105 transition-transform">
                    <Shield className="w-16 h-16 text-neon-purple mx-auto mb-3" />
                    <p className="font-orbitron text-sm">Aman Terpercaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Produk <span className="gradient-text">Populer</span>
          </h3>
          <p className="text-gray-400 text-lg">Pilih produk favorit kamu dan top up sekarang!</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-neon-blue text-black glow-box'
                  : 'bg-gray-900 text-gray-400 border border-gray-800 hover:border-neon-blue/50'
              }`}
            >
              {cat === 'all' ? 'Semua' : cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-neon-blue/50 p-6 transition-all hover:transform hover:scale-105 cursor-pointer"
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <div className="space-y-2">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{product.category}</p>
                <h4 className="font-orbitron text-lg font-bold text-white group-hover:text-neon-blue transition-colors">
                  {product.name}
                </h4>
                <p className="text-2xl font-bold text-neon-blue">{product.price}</p>
              </div>
              <button className="w-full mt-4 py-3 bg-gray-800 group-hover:bg-neon-blue group-hover:text-black text-white font-semibold rounded-lg transition-all flex items-center justify-center space-x-2">
                <span>Beli Sekarang</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-orbitron text-2xl md:text-4xl font-bold mb-3">
              Metode <span className="gradient-text">Pembayaran</span>
            </h3>
            <p className="text-gray-400">Bayar dengan mudah menggunakan berbagai metode pembayaran</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['DANA', 'BCA', 'Krom Bank', 'Seabank'].map((method) => (
              <div
                key={method}
                className="bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-neon-blue/50 p-6 flex items-center justify-center transition-all hover:transform hover:scale-105"
              >
                <span className="font-orbitron font-bold text-lg text-center">{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
            Kenapa Pilih <span className="gradient-text">RIWOXX?</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center hover:border-neon-blue/50 transition-all">
            <div className="w-16 h-16 bg-neon-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-border">
              <Zap className="w-8 h-8 text-neon-blue" />
            </div>
            <h4 className="font-orbitron text-xl font-bold mb-3">Proses Instan</h4>
            <p className="text-gray-400">Transaksi diproses dalam hitungan detik, langsung masuk ke akun kamu!</p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center hover:border-neon-blue/50 transition-all">
            <div className="w-16 h-16 bg-neon-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-border">
              <Shield className="w-8 h-8 text-neon-blue" />
            </div>
            <h4 className="font-orbitron text-xl font-bold mb-3">100% Aman</h4>
            <p className="text-gray-400">Data kamu dijamin aman dengan sistem enkripsi terbaik</p>
          </div>

          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 p-8 text-center hover:border-neon-blue/50 transition-all">
            <div className="w-16 h-16 bg-neon-blue/10 rounded-2xl flex items-center justify-center mx-auto mb-6 glow-border">
              <CreditCard className="w-8 h-8 text-neon-blue" />
            </div>
            <h4 className="font-orbitron text-xl font-bold mb-3">Banyak Pilihan</h4>
            <p className="text-gray-400">Berbagai metode pembayaran untuk kemudahan transaksi kamu</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 container mx-auto px-4 py-16 mb-16">
        <div className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-3xl border border-neon-blue/30 p-12 text-center glow-box">
          <h3 className="font-orbitron text-3xl md:text-5xl font-bold mb-6">
            Siap Top Up Game Favoritmu?
          </h3>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Dapatkan diamonds dan voucher dengan harga terbaik. Proses cepat, aman, dan terpercaya!
          </p>
          <a
            href="https://riwoxxstore.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-10 py-5 bg-neon-blue text-black font-bold rounded-xl hover:bg-neon-blue/80 transition-all glow-box font-orbitron text-xl"
          >
            <span>Order Sekarang</span>
            <ChevronRight className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 bg-black/50 backdrop-blur-md py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-neon-blue" />
              <span className="font-orbitron font-bold text-lg gradient-text">RIWOXX TOP UP</span>
            </div>
            <p className="text-gray-500 text-sm text-center">
              © 2024 RIWOXX TOP UP. All rights reserved. | Toko Digital Terpercaya
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
