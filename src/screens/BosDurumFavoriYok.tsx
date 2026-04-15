// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (Favori Yok)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumFavoriYokProps {}

export function BosDurumFavoriYok(props: BosDurumFavoriYokProps) {
  return (
    <>
      {/*  Navigation Shell: TopNavBar (Active: Favoriler)  */}
      <header className="bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">Lezzet Defteri</div>
      <nav className="hidden md:flex items-center gap-8">
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Kategoriler</a>
      <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold" href="#">Favoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Defterim</a>
      </nav>
      <div className="flex items-center gap-4">
      <div className="bg-surface-container px-4 py-2 rounded-full hidden lg:flex items-center gap-2">
      <span className="material-symbols-outlined text-outline" data-icon="search">search</span>
      <span className="text-on-surface-variant text-sm">Tarif ara...</span>
      </div>
      <button className="scale-95 active:opacity-80 transition-transform text-[#984800]">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-12 md:py-24">
      {/*  Main Content Area: Empty State  */}
      <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
      {/*  Asymmetric Background Elements  */}
      <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary-container/10 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute top-24 -right-12 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl opacity-50 -z-10"></div>
      {/*  Empty State Illustration/Icon  */}
      <div className="mb-12 relative">
      <div className="w-48 h-48 rounded-full bg-surface-container-low flex items-center justify-center relative z-10 shadow-lg">
      <div className="w-36 h-36 rounded-full bg-surface-container flex items-center justify-center">
      <span className="material-symbols-outlined text-[80px] text-outline-variant" data-icon="favorite_border">favorite</span>
      </div>
      </div>
      {/*  Decorative floating elements  */}
      <div className="absolute -top-4 -right-2 bg-surface-container-highest p-3 rounded-2xl shadow-sm rotate-12">
      <span className="material-symbols-outlined text-primary" data-icon="restaurant">restaurant</span>
      </div>
      <div className="absolute bottom-4 -left-6 bg-surface-container-highest p-3 rounded-2xl shadow-sm -rotate-12">
      <span className="material-symbols-outlined text-secondary" data-icon="menu_book">menu_book</span>
      </div>
      </div>
      {/*  Empty State Typography  */}
      <h1 className="font-headline text-4xl md:text-5xl text-on-surface mb-6 leading-tight">Henüz favori tarifiniz yok.</h1>
      <p className="text-on-surface-variant text-lg md:text-xl mb-12 max-w-md font-body leading-relaxed">
                      Sevdiğiniz tarifleri kalp ile işaretleyin ve kendi özel koleksiyonunuzu oluşturmaya başlayın!
                  </p>
      {/*  CTA Section  */}
      <div className="flex flex-col sm:flex-row gap-6 items-center">
      <a className="bg-signature-gradient text-on-primary font-bold text-lg px-10 py-5 rounded-full shadow-[0_20px_40px_rgba(152,72,0,0.15)] hover:-translate-y-1 transition-transform duration-300 flex items-center gap-3" href="#">
      <span className="material-symbols-outlined" data-icon="explore">explore</span>
                          Tariflere Göz At
                      </a>
      <a className="text-primary font-bold text-lg px-10 py-5 rounded-full border border-outline-variant/30 hover:bg-surface-container-low transition-colors duration-300" href="#">
                          Kategorileri Keşfet
                      </a>
      </div>
      {/*  Suggested Content Section (Ghost Grid)  */}
      <div className="mt-24 w-full">
      <h2 className="font-headline text-2xl text-left mb-8 border-l-4 border-primary pl-4">Belki bunları sevebilirsiniz...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/*  Glassmorphism Card 1  */}
      <div className="bg-surface-container-low rounded-xl overflow-hidden group">
      <div className="h-48 overflow-hidden relative">
      <img alt="Makarna" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Gourmet pasta dish with fresh basil and cherry tomatoes on a rustic wooden table with sun-drenched lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7N6nWKxtlY7yq6T6a6JNPBi5aQKAIsnksH2XpsM5pYXK5ut5UQW77kH1gbHYFd-JBjSBr2O2P06pZnimCUsXGm9K-yYLn_c8SQ8w8Y7Bhmz4uaMXSd7akwwneUA4TvfODB0dD8TD1KzfH2_0nkGI340SUST3D4xlsGQqizl1gewHMr68QGweOd7vprMLHRKibt4RLkba9pkcnUjZ1XOL8tvGJBOzm5-Zd98MSEWQN-rg0wj7XNJ_jhfTIMVsUbqFJgI4fLLOgOi0j"/ />
      <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md p-2 rounded-full">
      <span className="material-symbols-outlined text-outline hover:text-primary transition-colors cursor-pointer" data-icon="favorite_border">favorite</span>
      </div>
      </div>
      <div className="p-6 text-left">
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">AKŞAM YEMEĞİ</span>
      <h3 className="font-headline text-xl mb-2">Taze Otlu İtalyan Makarnası</h3>
      <div className="flex items-center gap-4 text-on-surface-variant text-sm">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> 25 dk</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs" data-icon="star">star</span> 4.8</span>
      </div>
      </div>
      </div>
      {/*  Glassmorphism Card 2  */}
      <div className="bg-surface-container-low rounded-xl overflow-hidden group">
      <div className="h-48 overflow-hidden relative">
      <img alt="Salata" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Healthy colorful salad bowl with avocado, quinoa, and vibrant vegetables in soft natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3JnnBqdxeOMLhtGPPOvcI99gf330rcMk1fYDfRMXZJz6-bYg8TRTMXcFwYtHB0S8fzPOrSddKScKZ1j9V67yKQbNSx5CtZLeDMOaeUZ-0fOd7X0pOVffZDS503avywoKQelp9tPfDA_GimQo9a-G22aTaW5UquK8DkssvzeMMX-V_03fJnI8aikT0LeMEdxFUKkbMqZ9sHPsHBDpbk6Mw7FUl9qWu3S5fBsw46FlR8ZbMcs4qfOh5tHl7SPX1CYkY3vIJbG3Okz83"/ />
      <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md p-2 rounded-full">
      <span className="material-symbols-outlined text-outline hover:text-primary transition-colors cursor-pointer" data-icon="favorite_border">favorite</span>
      </div>
      </div>
      <div className="p-6 text-left">
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">SAĞLIKLI</span>
      <h3 className="font-headline text-xl mb-2">Gökkuşağı Budda Kasesi</h3>
      <div className="flex items-center gap-4 text-on-surface-variant text-sm">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> 15 dk</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs" data-icon="star">star</span> 4.9</span>
      </div>
      </div>
      </div>
      {/*  Glassmorphism Card 3  */}
      <div className="bg-surface-container-low rounded-xl overflow-hidden group">
      <div className="h-48 overflow-hidden relative">
      <img alt="Kahvaltı" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="Poached eggs on avocado toast with microgreens and chili flakes on white ceramic plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5ZIXgG_BDT6K5PhLiZXyMtFxSyx6gQeG7Gciz_00ovs5BxuIkQ1MQEArGsOtHUqyh6Qk8gby_5qgjQzVNKTOOPK8gsoN4DxrJMe3pVpNj1Phb9fArc3MwOr4yt12RVs9navn-ZMcXwiYzj-P3tLjUUWk4-jELB0DDm3CbU_T8juZPj7Y-21DlgJdEkbQ3bH6-bGu25dYtMQbpJVAR1_So0JiyO6M33eU6BCzor8jIgBrsogIg5EAqXZjsYvBDczANfW9IHCG1sRGV"/ />
      <div className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md p-2 rounded-full">
      <span className="material-symbols-outlined text-outline hover:text-primary transition-colors cursor-pointer" data-icon="favorite_border">favorite</span>
      </div>
      </div>
      <div className="p-6 text-left">
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">KAHVALTI</span>
      <h3 className="font-headline text-xl mb-2">Avokadolu Çılbır Toast</h3>
      <div className="flex items-center gap-4 text-on-surface-variant text-sm">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs" data-icon="schedule">schedule</span> 10 dk</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-xs" data-icon="star">star</span> 4.7</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/*  Navigation Shell: BottomNavBar (Active: Profil)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] flex justify-around items-center px-4 pb-6 pt-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
      <div className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all">
      <span className="material-symbols-outlined" data-icon="explore">explore</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all">
      <span className="material-symbols-outlined" data-icon="search">search</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all">
      <span className="material-symbols-outlined" data-icon="add_box">add_box</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ekle</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#984800] p-2 hover:text-[#984800] active:scale-90 transition-all">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </div>
      </nav>
      {/*  Floating Action Button for Adding Recipe (Side Logic Fallback)  */}
      <button className="hidden md:flex fixed bottom-10 right-10 z-40 bg-signature-gradient text-white p-6 rounded-full shadow-[0_20px_40px_rgba(45,42,38,0.15)] hover:-translate-y-2 transition-all duration-300 items-center justify-center group">
      <span className="material-symbols-outlined text-3xl" data-icon="add">add</span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold">Yeni Tarif Paylaş</span>
      </button>
    </>
  );
}
