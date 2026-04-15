// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (Arama Sonucu Yok)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumAramaSonucuYokProps {}

export function BosDurumAramaSonucuYok(props: BosDurumAramaSonucuYokProps) {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">Lezzet Defteri</div>
      <div className="hidden md:flex items-center gap-8">
      <nav className="flex gap-6">
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Kategoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Favoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Defterim</a>
      </nav>
      <div className="relative w-64">
      <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all font-body" type="text" value="Pizza"/ />
      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
      </div>
      <button className="scale-95 active:opacity-80 transition-transform">
      <span className="material-symbols-outlined text-[#984800] text-3xl">account_circle</span>
      </button>
      </div>
      {/*  Mobile Search Icon  */}
      <div className="md:hidden">
      <span className="material-symbols-outlined text-[#984800]">search</span>
      </div>
      </div>
      <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="pt-28 pb-24 min-h-screen px-4 md:px-8 max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
      {/*  Search Header Area  */}
      <div className="mb-12 w-full max-w-2xl">
      <h1 className="font-headline text-4xl md:text-5xl text-on-surface mb-4">Arama Sonuçları</h1>
      <p className="text-on-surface-variant font-body text-lg italic opacity-80">"Pizza" için arama yapılıyor...</p>
      </div>
      {/*  Empty State Container (Asymmetric Bento-ish layout)  */}
      <div className="relative w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
      {/*  Illustration Column  */}
      <div className="md:col-span-7 relative order-2 md:order-1">
      {/*  Background Decorative Shape  */}
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-10"></div>
      <div className="relative group">
      {/*  The Empty Plate Illustration via Image with descriptive alt  */}
      <img alt="A minimalist artistic top-down view of an empty white ceramic plate on a warm rustic wooden table with soft 4pm sunlight casting long shadows" className="w-full h-auto rounded-xl editorial-shadow transition-transform duration-500 group-hover:scale-[1.02]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6LjSEeWbxkrfuiM_DmLgmsCgbcVFWNwNkFyghF2b4i7gxIBWkbz1hpUYmh1ZG4GVAesMOGi9s1BjFyaZcRZEK-46OOHMTTN_x0kq7T1fujPNlWLpixsBw-k1pZ5__9Rkkgbsjtx6nwQHYZDIQvmf-3K2ytFezg-JbOv92EW-t6doXu4e5wURZMvHW4EOwv8h9ZSCtpm_vqbgxaCenTlkcujREOjaRVY59nhYMhHVNMYjB41emAnA0Rvdn2zopBqB1vpiCNsQZ4Miv"/ />
      {/*  Floating Ingredient Elements (Visual Flavour)  */}
      <div className="absolute -bottom-6 -right-6 bg-surface p-4 rounded-xl editorial-shadow flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-3xl">restaurant_menu</span>
      <div className="text-left">
      <p className="text-[10px] font-bold uppercase tracking-widest text-outline">Mutfak Notu</p>
      <p className="text-sm font-semibold text-on-surface">Tabak Boş Görünüyor</p>
      </div>
      </div>
      </div>
      </div>
      {/*  Content Column  */}
      <div className="md:col-span-5 text-left order-1 md:order-2 space-y-6">
      <div className="inline-block px-4 py-1.5 bg-error-container text-on-error-container rounded-full text-xs font-bold tracking-widest uppercase mb-2">
                          Sonuç Bulunamadı
                      </div>
      <h2 className="font-headline text-3xl md:text-4xl text-on-surface leading-tight">
                          Arama kriterlerine uygun tarif bulunamadı
                      </h2>
      <p className="text-on-surface-variant leading-relaxed text-lg">
                          Maalesef aradığınız "Pizza" kelimesine uygun bir tarif defterimizde yer almıyor. Farklı anahtar kelimeler denemeye ne dersiniz?
                      </p>
      <div className="pt-6 flex flex-col sm:flex-row gap-4">
      <button className="sun-gradient text-white px-8 py-4 rounded-xl text-sm font-bold editorial-shadow hover:translate-y-[-2px] transition-all active:scale-95">
                              Tüm Tariflere Göz At
                          </button>
      <button className="bg-surface border border-outline-variant/15 text-on-surface px-8 py-4 rounded-xl text-sm font-bold hover:bg-surface-container-low transition-all">
                              Yeni Tarif Öner
                          </button>
      </div>
      {/*  Suggestions Pills  */}
      <div className="pt-8">
      <p className="text-xs font-bold text-outline tracking-wider uppercase mb-3">Popüler Aramalar</p>
      <div className="flex flex-wrap gap-2">
      <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm text-on-surface-variant hover:bg-primary-fixed cursor-pointer transition-colors">Makarna</span>
      <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm text-on-surface-variant hover:bg-primary-fixed cursor-pointer transition-colors">Ev Yapımı Ekmek</span>
      <span className="px-4 py-2 bg-surface-container-high rounded-full text-sm text-on-surface-variant hover:bg-primary-fixed cursor-pointer transition-colors">Tatlılar</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">explore</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>search</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">add_box</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ekle</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </a>
      </nav>
      {/*  Sidebar (Web - For Navigation Anchor)  */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full flex-col p-4 z-40 bg-[#fdfcfb]/80 dark:bg-[#1E1B17]/80 backdrop-blur-xl rounded-r-2xl w-64 shadow-[0_20px_40px_rgba(45,42,38,0.06)] border-r border-surface-container-low">
      <div className="mb-10 p-4">
      <div className="font-['Noto_Serif'] italic text-xl text-[#984800] mb-4">Mutfak Günlüğüm</div>
      <div className="flex items-center gap-3">
      <img alt="A professional chef smiling in a bright kitchen with warm lighting, wearing white chef coat" className="w-10 h-10 rounded-full object-cover border-2 border-primary-container" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCauSJ36ktNam1TPzAEPSova2s_fLBtcqVb3HLuuSo0_VaGFed3GpNzfscbk41HAK_y6CDLTVQa-NSIp3fiuQqbJseRAvBLIG24xzYm5N7oibrBS3RCDsM0Gox3spBlDrXA1J_-UgudgC939MqhLXtxOD3fvjLTSs1PuD6qJayDolC216dmPV_xbLPayRoE3pAirMCAg90Nim6Z9PGh7bjgbtkc9g-MonS0jcXOHYmxsU_W2xxjqLkZqNiPIN80am6OCwm_Rbpalais"/ />
      <div>
      <h4 className="font-bold text-sm text-on-surface">Hoş geldin, Şef</h4>
      <p className="text-xs text-on-surface-variant">Profil Ayarları</p>
      </div>
      </div>
      </div>
      <nav className="flex-1 space-y-2">
      <a className="flex items-center gap-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl hover:translate-x-1 transition-all" href="#">
      <span className="material-symbols-outlined">home</span>
      <span className="font-['Inter'] text-sm tracking-wide">Ana Sayfa</span>
      </a>
      <a className="flex items-center gap-3 bg-[#E07A2F]/10 text-[#984800] font-bold rounded-xl px-4 py-3 hover:translate-x-1 transition-all" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>search</span>
      <span className="font-['Inter'] text-sm tracking-wide">Ara</span>
      </a>
      <a className="flex items-center gap-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl hover:translate-x-1 transition-all" href="#">
      <span className="material-symbols-outlined">menu_book</span>
      <span className="font-['Inter'] text-sm tracking-wide">Koleksiyonlar</span>
      </a>
      <a className="flex items-center gap-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl hover:translate-x-1 transition-all" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-['Inter'] text-sm tracking-wide">Ayarlar</span>
      </a>
      </nav>
      <button className="mt-auto sun-gradient text-white p-4 rounded-xl font-bold text-sm editorial-shadow active:opacity-100 opacity-90 transition-all flex items-center justify-center gap-2">
      <span className="material-symbols-outlined">add_circle</span>
                  Yeni Tarif Paylaş
              </button>
      </aside>
    </>
  );
}
