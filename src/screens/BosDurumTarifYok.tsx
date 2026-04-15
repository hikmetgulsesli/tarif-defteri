// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (Tarif Yok)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumTarifYokProps {}

export function BosDurumTarifYok(props: BosDurumTarifYokProps) {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">Lezzet Defteri</div>
      <nav className="hidden md:flex items-center space-x-8">
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Kategoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Favoriler</a>
      <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold" href="#">Defterim</a>
      </nav>
      <div className="flex items-center space-x-4">
      <button className="p-2 text-[#5c554d] hover:text-[#984800] transition-colors">
      <span className="material-symbols-outlined" data-icon="search">search</span>
      </button>
      <button className="scale-95 active:opacity-80 transition-transform">
      <span className="material-symbols-outlined text-[#984800] text-3xl" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>
      {/*  SideNavBar (Hidden on small screens)  */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col p-4 z-40 bg-[#fdfcfb]/80 dark:bg-[#1E1B17]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(45,42,38,0.06)] pt-24 rounded-r-2xl">
      <div className="mb-8 px-4">
      <h2 className="font-['Noto_Serif'] italic text-xl text-[#984800]">Mutfak Günlüğüm</h2>
      <p className="font-['Inter'] text-sm tracking-wide text-[#5c554d] mt-1">Hoş geldin, Şef</p>
      </div>
      <nav className="flex-1 space-y-2">
      <a className="flex items-center space-x-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined" data-icon="home">home</span>
      <span>Ana Sayfa</span>
      </a>
      <a className="flex items-center space-x-3 bg-[#E07A2F]/10 text-[#984800] font-bold rounded-xl px-4 py-3 opacity-90 active:opacity-100 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
      <span>Tarif Ekle</span>
      </a>
      <a className="flex items-center space-x-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
      <span>Koleksiyonlar</span>
      </a>
      <a className="flex items-center space-x-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span>Ayarlar</span>
      </a>
      </nav>
      <button className="mt-auto mb-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-xl py-3 px-4 flex items-center justify-center space-x-2 shadow-lg active:scale-95 transition-all">
      <span className="material-symbols-outlined" data-icon="restaurant">restaurant</span>
      <span className="font-bold text-sm">Yeni Tarif Paylaş</span>
      </button>
      </aside>
      {/*  Main Content Canvas  */}
      <main className="pt-24 pb-24 md:pl-0 lg:pl-64 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full px-6 text-center">
      {/*  Empty State Container  */}
      <div className="relative mb-12">
      {/*  Decorative background elements  */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-secondary-container/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl"></div>
      <div className="relative bg-surface-container-lowest rounded-[2.5rem] p-12 shadow-[0_20px_40px_rgba(45,42,38,0.06)] overflow-hidden">
      {/*  Texture Overlay  */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcl9VyUVg6AZglQKhRLDY7-u_XQn8zD9XdbgDlFtGz6KVUUlFA9Hq6npzY699VYzYSDAGbwSospwUnTxDiaP5pxMCIAQ1st9pjz-Lu99CQus0XWqOHXOo3fnPcFrCHnRbtVnwXO9n-DMF915bcoUiWdk-g48yNnQc1Davmyftr0iCtBx0YM3cUHWVFM8ThSnZm8-7gxgvImpXSns8Gk2IJ93aMfXx3ShwDPKwG-4aGjWll_256zb-heYjXYYYBFUKBymKUK7vXFeVh')"}}></div>
      <div className="flex flex-col items-center">
      <div className="w-48 h-48 bg-surface-container-low rounded-full flex items-center justify-center mb-8 chef-hat-glow">
      <span className="material-symbols-outlined text-8xl text-primary-container" data-icon="cooking" style={{fontVariationSettings: "'FILL' 1"}}>cooking</span>
      </div>
      <h1 className="font-headline text-3xl md:text-4xl text-on-surface mb-4 leading-tight">Henüz tarif eklenmedi.</h1>
      <p className="font-body text-lg text-on-surface-variant max-w-md mx-auto mb-10 leading-relaxed">
                                  Mutfak sırlarını geleceğe taşımak için harika bir gün. İlk tarifinizi ekleyerek dijital defterinizi oluşturmaya başlayın!
                              </p>
      <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-primary to-primary-container text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 active:scale-95 overflow-hidden">
      <span className="relative z-10 flex items-center space-x-3 font-bold tracking-wide">
      <span className="material-symbols-outlined text-2xl" data-icon="add">add</span>
      <span className="text-lg">İlk Tarifimi Ekle</span>
      </span>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
      </div>
      </div>
      {/*  Floating asymmetric card  */}
      <div className="absolute -bottom-6 -left-6 md:-left-12 bg-surface-container-high rounded-2xl p-4 shadow-xl flex items-center space-x-4 rotate-[-3deg] hidden sm:flex">
      <img className="w-12 h-12 rounded-xl object-cover" data-alt="close-up of fresh organic herbs and vegetables on a wooden cutting board with soft kitchen lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOAvhu6m3X_NjCgBe9YDRcP2R9VxpaW3JNjtxaZVB3MAxGWdeJUh3oSPZmnXSUIqV9-0lXMuNa_wntFw-Zuyrow7D28OTMZq_xa0XlXJoYJI9LxMrNFUtACHfMH6unNSE3Ucmp2Xt8282mVm8YnfO1aZto9rOjUGLER_qMKHTt7Hiq3BuzS88FJ24vT1fly5ueWBdU6UQj0G2T9zFWD-yXT8qmWMSj6xXhPr7RIspe0K5aOGn_Xol9Qtbj62Jcg1gqGSQ0NUxdiu-l"/ />
      <div className="text-left">
      <p className="text-[10px] font-bold text-primary tracking-widest uppercase">Günün İpucu</p>
      <p className="text-xs font-medium text-on-surface-variant">Taze baharatlar her şeyi değiştirir.</p>
      </div>
      </div>
      </div>
      {/*  Suggestion Grid (Subtle Bento Pattern)  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 opacity-60">
      <div className="bg-surface-container-low p-6 rounded-2xl flex items-center space-x-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
      </div>
      <p className="text-sm font-medium text-left">Popüler tarifleri keşfedin</p>
      </div>
      <div className="bg-surface-container-low p-6 rounded-2xl flex items-center space-x-4">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-container">
      <span className="material-symbols-outlined" data-icon="import_contacts">import_contacts</span>
      </div>
      <p className="text-sm font-medium text-left">Eski notlarınızı yükleyin</p>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] flex justify-around items-center px-4 pb-6 pt-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="explore">explore</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="search">search</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-10 shadow-lg active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined text-3xl" data-icon="add_box">add_box</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </a>
      </nav>
    </>
  );
}
