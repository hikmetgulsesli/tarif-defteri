// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Tarif Düzenle
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface TarifDuzenleProps {}

export function TarifDuzenle(props: TarifDuzenleProps) {
  return (
    <>
      {/*  TopNavBar  */}
      <nav className="bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none fixed top-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">
                      Lezzet Defteri
                  </div>
      <div className="hidden md:flex items-center space-x-8">
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Kategoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Favoriler</a>
      <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold" href="#">Defterim</a>
      </div>
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-[#984800] dark:text-[#E07A2F] cursor-pointer">account_circle</span>
      </div>
      </div>
      <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </nav>
      {/*  Main Content  */}
      <main className="pt-24 px-4 md:px-8 max-w-5xl mx-auto pb-12">
      {/*  Header Section  */}
      <header className="mb-12">
      <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4">
      <span className="material-symbols-outlined text-sm">arrow_back</span>
      <span className="font-medium">Defterim / Tariflerim</span>
      </nav>
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-2 tracking-tight">Tarifi Düzenle</h1>
      <p className="text-on-surface-variant italic">"Mutfaktaki her dokunuş, yeni bir hikaye fısıldar."</p>
      </header>
      {/*  Edit Form Canvas  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/*  Media & Basic Info (Left Column)  */}
      <div className="lg:col-span-5 space-y-8">
      {/*  Recipe Image  */}
      <div className="relative group">
      <div className="rounded-xl overflow-hidden editorial-shadow bg-surface-container-low aspect-square">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up of a rich, layered homemade lasagna with bubbling golden cheese and fresh basil garnish in a rustic ceramic dish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApg_60jb8QcoDyt8lnu54VcrNG41vSxs78gtsQWRbxeTplV9xz8GblQE_KOf9NfE8mtMEqcyTkIaguNCJ6xhzUUoMQG8DbYG82v-4r69y3dpSJiuLoWLWZFunavC9wTPf4esagryQ1TzlhMicKu_LPCFaE6KdATMlD-UZ0JOoQg2MnRVLiWjII8x8qKS8lydVyQp_3LcU_39ddlgmQoDC55RX5c_o5vf9jnN7tP1_OVTGY4DF9yJ_sqTDJSFl2Ux2a5MnGJ--3u94T"/ />
      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
      <button className="bg-surface/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-primary flex items-center gap-2">
      <span className="material-symbols-outlined text-base">photo_camera</span>
                                      Fotoğrafı Değiştir
                                  </button>
      </div>
      </div>
      <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-xl editorial-shadow">
      <span className="material-symbols-outlined">auto_fix_high</span>
      </div>
      </div>
      {/*  Basic Meta Info  */}
      <div className="bg-surface-container-low p-6 rounded-xl space-y-6">
      <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">TARİF ADI</label>
      <input className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg text-lg font-headline font-bold text-on-surface p-3" type="text" value="Ev Yapımı Lazanya"/ />
      </div>
      <div className="grid grid-cols-2 gap-4">
      <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">HAZIRLIK (DK)</label>
      <div className="flex items-center bg-surface-container-lowest rounded-lg p-3">
      <span className="material-symbols-outlined text-primary mr-2">timer</span>
      <input className="bg-transparent border-none focus:ring-0 p-0 w-full font-bold" type="number" value="45"/ />
      </div>
      </div>
      <div className="space-y-2">
      <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">PİŞİRME (DK)</label>
      <div className="flex items-center bg-surface-container-lowest rounded-lg p-3">
      <span className="material-symbols-outlined text-primary mr-2">oven_gen</span>
      <input className="bg-transparent border-none focus:ring-0 p-0 w-full font-bold" type="number" value="35"/ />
      </div>
      </div>
      </div>
      </div>
      </div>
      {/*  Detailed Content (Right Column)  */}
      <div className="lg:col-span-7 space-y-8">
      {/*  Ingredients Section  */}
      <section className="bg-surface-container-low p-8 rounded-xl editorial-shadow">
      <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-headline font-bold text-on-surface">Malzemeler</h3>
      <button className="text-primary flex items-center gap-1 text-sm font-bold">
      <span className="material-symbols-outlined text-base">add</span> Yeni Ekle
                              </button>
      </div>
      <div className="space-y-3">
      {/*  Ingredient Items  */}
      <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg group">
      <span className="material-symbols-outlined text-outline-variant cursor-grab">drag_indicator</span>
      <input className="flex-grow bg-transparent border-none focus:ring-0 p-0 font-medium" type="text" value="12 adet lazanya yaprağı"/ />
      <button className="opacity-0 group-hover:opacity-100 text-error-container text-on-error-container bg-error-container rounded-full p-1 transition-opacity">
      <span className="material-symbols-outlined text-sm">close</span>
      </button>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg group">
      <span className="material-symbols-outlined text-outline-variant cursor-grab">drag_indicator</span>
      <input className="flex-grow bg-transparent border-none focus:ring-0 p-0 font-medium" type="text" value="500g kıyma (orta yağlı)"/ />
      <button className="opacity-0 group-hover:opacity-100 text-on-error-container bg-error-container rounded-full p-1 transition-opacity">
      <span className="material-symbols-outlined text-sm">close</span>
      </button>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg group">
      <span className="material-symbols-outlined text-outline-variant cursor-grab">drag_indicator</span>
      <input className="flex-grow bg-transparent border-none focus:ring-0 p-0 font-medium" type="text" value="2 adet kuru soğan"/ />
      <button className="opacity-0 group-hover:opacity-100 text-on-error-container bg-error-container rounded-full p-1 transition-opacity">
      <span className="material-symbols-outlined text-sm">close</span>
      </button>
      </div>
      <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg group">
      <span className="material-symbols-outlined text-outline-variant cursor-grab">drag_indicator</span>
      <input className="flex-grow bg-transparent border-none focus:ring-0 p-0 font-medium" type="text" value="Beşamel sos için 2 kaşık tereyağı"/ />
      <button className="opacity-0 group-hover:opacity-100 text-on-error-container bg-error-container rounded-full p-1 transition-opacity">
      <span className="material-symbols-outlined text-sm">close</span>
      </button>
      </div>
      </div>
      </section>
      {/*  Steps Section  */}
      <section className="bg-surface-container-low p-8 rounded-xl editorial-shadow">
      <div className="flex justify-between items-center mb-6">
      <h3 className="text-xl font-headline font-bold text-on-surface">Hazırlanış Adımları</h3>
      <button className="text-primary flex items-center gap-1 text-sm font-bold">
      <span className="material-symbols-outlined text-base">add</span> Adım Ekle
                              </button>
      </div>
      <div className="space-y-6">
      {/*  Step 1  */}
      <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">1</div>
      <div className="flex-grow space-y-2">
      <textarea className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm leading-relaxed min-h-[80px]">Soğanları küp küp doğrayın ve kıyma ile birlikte zeytinyağında kavurun. Salça ve domates rendesini ekleyip sosu kıvam alana kadar pişirin.</textarea>
      </div>
      <button className="opacity-0 group-hover:opacity-100 h-fit text-on-error-container">
      <span className="material-symbols-outlined">delete</span>
      </button>
      </div>
      {/*  Step 2  */}
      <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">2</div>
      <div className="flex-grow space-y-2">
      <textarea className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm leading-relaxed min-h-[80px]">Ayrı bir tencerede tereyağını eritin, unu ekleyip kokusu çıkana kadar kavurun. Sütü azar azar ekleyerek pürüzsüz bir beşamel sos elde edin.</textarea>
      </div>
      <button className="opacity-0 group-hover:opacity-100 h-fit text-on-error-container">
      <span className="material-symbols-outlined">delete</span>
      </button>
      </div>
      {/*  Step 3  */}
      <div className="flex gap-4 group">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">3</div>
      <div className="flex-grow space-y-2">
      <textarea className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm leading-relaxed min-h-[80px]">Fırın kabına sırasıyla lazanya, kıymalı harç ve beşamel sosu kat kat dizin. En üste rendelenmiş kaşar peyniri serpiştirin.</textarea>
      </div>
      <button className="opacity-0 group-hover:opacity-100 h-fit text-on-error-container">
      <span className="material-symbols-outlined">delete</span>
      </button>
      </div>
      </div>
      </section>
      {/*  Action Buttons  */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button className="flex-1 signature-gradient text-white py-4 px-8 rounded-xl font-bold text-lg editorial-shadow hover:scale-[1.02] active:scale-95 transition-all">
                              Değişiklikleri Kaydet
                          </button>
      <button className="flex-1 bg-surface-container-high text-on-surface py-4 px-8 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors">
                              İptal
                          </button>
      </div>
      </div>
      </div>
      </main>
      {/*  SideNavBar (Desktop)  */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-[#fdfcfb]/80 dark:bg-[#1E1B17]/80 backdrop-blur-xl rounded-r-2xl w-64 shadow-[0_20px_40px_rgba(45,42,38,0.06)]">
      <div className="mb-10 pt-4 flex items-center gap-3">
      <div className="w-12 h-12 rounded-full overflow-hidden">
      <img className="w-full h-full object-cover" data-alt="Close-up of a professional chef smiling warmly in a bright kitchen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCizu0c4HzPZtj1IJJJ3XEs89p4TwS1pPcxseo6AzRAFFUQ3yRM0c1klhE25n91lL7CEAeq4qrjTYHhj7f5Ew1vQe22Jo7iDC1pEEKZBOR2miKK1TEDx9KTaPwQ0HBT1eCo1Nsfb4QV2M4K9NUmsUFLkhASqni3b7Orq4Rrn7Cgt7ngL-gk7apZodvSS0jE2S6WgyP4AXGC50M1X-DC75yh2Pr-E-BvT9TVZCHSi-N3kui5PViMvyaNKRGsE_AcycgVm4pq-aqHhUt3"/ />
      </div>
      <div>
      <h4 className="font-['Noto_Serif'] italic text-lg text-[#984800]">Mutfak Günlüğüm</h4>
      <p className="text-[10px] text-on-surface-variant font-medium tracking-wide">Hoş geldin, Şef</p>
      </div>
      </div>
      <nav className="flex-grow space-y-2">
      <a className="flex items-center gap-4 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">home</span> Ana Sayfa
                  </a>
      <a className="flex items-center gap-4 bg-[#E07A2F]/10 text-[#984800] font-bold rounded-xl px-4 py-3 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">add_circle</span> Tarif Ekle
                  </a>
      <a className="flex items-center gap-4 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">menu_book</span> Koleksiyonlar
                  </a>
      <a className="flex items-center gap-4 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">settings</span> Ayarlar
                  </a>
      </nav>
      <button className="mt-auto signature-gradient text-white py-3 rounded-xl font-bold text-sm shadow-md">
                  Yeni Tarif Paylaş
              </button>
      </aside>
      {/*  BottomNavBar (Mobile)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] flex justify-around items-center px-4 pb-6 pt-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">explore</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">search</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">add_box</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </a>
      </nav>
    </>
  );
}
