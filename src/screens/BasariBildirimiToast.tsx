// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Başarı Bildirimi (Toast)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BasariBildirimiToastProps {}

export function BasariBildirimiToast(props: BasariBildirimiToastProps) {
  return (
    <>
      {/*  TopNavBar  */}
      <header className="bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">Lezzet Defteri</div>
      <nav className="hidden md:flex items-center space-x-8">
      <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold transition-colors duration-300" href="#">Ana Sayfa</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Kategoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Favoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Defterim</a>
      </nav>
      <div className="flex items-center space-x-4">
      <div className="hidden sm:flex bg-surface-container-low px-4 py-2 rounded-full items-center">
      <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
      <span className="text-on-surface-variant text-sm font-label">Tarif ara...</span>
      </div>
      <button className="text-[#984800] scale-95 active:opacity-80 transition-transform">
      <span className="material-symbols-outlined text-3xl">account_circle</span>
      </button>
      </div>
      </div>
      <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-8 pb-32">
      {/*  Hero Section Asymmetric  */}
      <section className="relative mb-16 h-[400px] rounded-3xl overflow-hidden">
      <img alt="Autumn Kitchen" className="w-full h-full object-cover" data-alt="Close-up of artisan sourdough bread and pumpkins on a rustic wooden table with soft 4pm golden hour sunlight hitting ceramic bowls" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK1UR_vu9y8mBAd3HrVLJnq8z_X2OR0gJkx0W3tLVMtBi9GTiUF9Xs-pIVGxGJHU7LuszFnvENXXnRrapsRj6sFcx8qecCXtIljH6AW4N81owNTpacexx6WLqIV1wRfrMzZf-ErF19i_CoMFylWq-c4MVFf7VdAHf3RKTFLlOTPAQ-tEjrEPD5G5hRkGTHFK0o4Hb7QIM3dA6ecKeCj63PbbvEzQKCPWE--cs-j3xh4e_-rV28GywZc22wEgp1se8CneHdQfDRUFFj"/ />
      <div className="absolute inset-0 bg-gradient-to-r from-on-surface/60 to-transparent flex flex-col justify-center px-12">
      <h1 className="font-headline text-5xl text-white max-w-lg mb-4 leading-tight">Mutfaktaki Hikayeni Kaydetmeye Başla.</h1>
      <p className="text-surface-container-lowest text-lg max-w-md mb-8">Kendi tariflerini oluştur, düzenle ve sevdiklerinle paylaş. Dijital mirasın burada büyüyor.</p>
      <button className="w-fit primary-gradient text-white px-8 py-4 rounded-3xl font-bold title-sm custom-shadow hover:-translate-y-1 transition-transform">
                          Yeni Tarif Ekle
                      </button>
      </div>
      </section>
      {/*  Bento Grid Layout for Featured Items  */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/*  Large Card  */}
      <div className="md:col-span-2 md:row-span-2 bg-surface-container-low rounded-3xl overflow-hidden flex flex-col">
      <div className="h-64 overflow-hidden relative">
      <img alt="Main Dish" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="Exquisite plate of herb-roasted chicken with root vegetables on a textured ceramic plate with cinematic overhead lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdtbiw6QgB9XiYPM604dplSuKntv7ZLpTyu9SnpfXMG0WPqqRNfYPRfjFFG0R3hyBgIEyDVUhaeJzFPfoQ-qNguv2jZFCSRegAYMjyJEahMokny4k3lzCOJ8o-l5tMuTSkMbm6VjgiEM07FM9ucPHkUxByvDH4zy9xOTg87yFREVho9f9j7G8ZYUHdWZNxg7LyuSB4eIebVY7KtQbs5takj_XwiNd1I3Jong6KoxwevF4trQ6_ABw6kzV6K0qrzaow8J8uIO6uTH7G"/ />
      <span className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-primary">GÜNÜN TARİFİ</span>
      </div>
      <div className="p-8">
      <h2 className="font-headline text-3xl mb-4">Otlu Fırın Tavuk</h2>
      <p className="text-on-surface-variant mb-6">Taze kekik ve biberiye ile harmanlanmış, çıtır derili ve sulu bir ziyafet.</p>
      <div className="flex items-center space-x-6">
      <div className="flex items-center text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-sm mr-2">schedule</span>
      <span>45 Dakika</span>
      </div>
      <div className="flex items-center text-sm text-on-surface-variant">
      <span className="material-symbols-outlined text-sm mr-2">restaurant</span>
      <span>4 Kişilik</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Small Card 1  */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 custom-shadow">
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
      <img alt="Salad" className="w-full h-full object-cover" data-alt="Bright mediterranean salad with olives and feta cheese in a shallow bowl on a light linen surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXtO2PX97anoKPhR7wed8_5Ncb6qShgP78TB8ixzCobg_53xiiYAQw7rQiSuhJ5xTMlX4TilCqhxi1TZj6i14GwDrlJ3Pdp0IREI98OROa9I3ExHyx92aaTgFx9SsrSdjVltPbH9Lkp0qt2tYoJF-Isg1wReQ7C29TJjtW6FgSNm1Dyqt1pg2xKwo9sshuxDsf_9Thq8mbU8yOSdyLBwLNZ86M5EPwjrj5VmgHEHlVbMHQNHfteMOyo3vnGKy7ZyIjDI6TgDj6CdS8"/ />
      </div>
      <h3 className="font-headline text-xl mb-2">Akdeniz Kasesi</h3>
      <span className="text-xs font-label uppercase tracking-tighter text-outline">HAFİF ÖĞÜN</span>
      </div>
      {/*  Small Card 2  */}
      <div className="bg-surface-container-lowest rounded-3xl p-6 custom-shadow">
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4">
      <img alt="Dessert" className="w-full h-full object-cover" data-alt="Rich chocolate lava cake with a melting center on a dark plate sprinkled with powdered sugar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_mdzIeiBqOJ9DIRmZPRemAqcgV99qKHZQMQUfO-wQ6V8-vUl7N_8A4M35_2dSMSEy0fKLG1EGQMj_h-CoBuFHs2p1n1H7oH2RViZY02xLKR3uvQ90VXmkmaeJD3FI_56wPOQ0DVSTqcbmJQXwFLxVCSo5FRR21578-6Ru_NfnaONG0JI8UyNDZpZrMwts4kpXglnWqDTOpj6d43lPzJwBAYlXbC-SbSYAQXLMahxiesKVSrksqg9-dF-bMNeK1CLxATpWuHq179S0"/ />
      </div>
      <h3 className="font-headline text-xl mb-2">Çikolata Şöleni</h3>
      <span className="text-xs font-label uppercase tracking-tighter text-outline">TATLI</span>
      </div>
      {/*  Wide Content Card  */}
      <div className="md:col-span-2 bg-primary-container/10 rounded-3xl p-8 flex items-center justify-between">
      <div>
      <h3 className="font-headline text-2xl text-primary mb-2">Koleksiyonlarını Keşfet</h3>
      <p className="text-on-surface-variant max-w-xs">Kaydettiğin 24 tarif seni bekliyor. Akşam yemeği için ilham al.</p>
      </div>
      <div className="flex -space-x-4">
      <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden">
      <img alt="Avatar 1" className="w-full h-full object-cover" data-alt="Close up of healthy avocado toast" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2wQ8zbmnTO18u0cXwxfJX-TxWrEAKfoIQO9333q3J1PoJhRBW24t5d2_KoTZxoUCJ45Z6xeIoNwW6lVYV4p8UMVco2zNJuhj0AtO9Zae4N-VKKGD-LqWJbwJ5AntLnW3fzeyKYLn20kliPJXE5YIEGVeJyYGk4e1M9Ms56Ih8smeZG_ZfGokMVsvZnbXqOTVwOviBjXzTW37TW1TwdJZZ4ZLtlfjsnzwgvPR83GnZfY0kBgpITldfLi8oVyJwFYHTjW8VWFQIWaX7"/ />
      </div>
      <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden">
      <img alt="Avatar 2" className="w-full h-full object-cover" data-alt="Fresh pasta dish with tomatoes" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBA5X7JinR6VbZfxwyI7epiWfGs_Ktt-ZUsaylq0Pr3QmpsOJ5jp-xaaUY1hof6-35JqQ_pfx9QfVX3H6V8qRhduK_pTmGybzFPsXbcVeSZLu6hP-YYU-SJM4uU2PNAsLdsWohzi-hpBhQtV6908prYEca5_-etQlyQLzx7zn1-8-AQNCyq6ZAHyUWpoA_Txs8nonbgNKmA8AvdKFe-J9HgfiPaU6SZ0cENkGbUzWGYGv7uZNgmXDu-LyGl63g6hB8yjvqVaXFjCKi0"/ />
      </div>
      </div>
      </div>
      </div>
      </main>
      {/*  SideNavBar (Hidden on Mobile)  */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-[#fdfcfb]/80 dark:bg-[#1E1B17]/80 backdrop-blur-xl shadow-[0_20px_40px_rgba(45,42,38,0.06)] hidden lg:flex flex-col p-4 z-40 rounded-r-2xl">
      <div className="flex flex-col space-y-6">
      <div className="px-4 py-8">
      <div className="font-['Noto_Serif'] italic text-xl text-[#984800] mb-6">Mutfak Günlüğüm</div>
      <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/20">
      <img alt="Kullanıcı Profili" className="w-full h-full object-cover" data-alt="Portrait of a smiling professional chef in white coat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM3UVL5fdv5ZK9FIqMF3WXHSZO3SpxsbqEp8OC6W3XE4T4QMhKIS3z0aHE8ur_FgACKt76JXyve34nUapeVnRphyeSRu-woXKuuglc9zn_ALQaRYe5PrCjvdhPYxIFSHKk0Tk5e8k9PIswMuBtELYE-0s7tLanb8Uwt0ePSHEbQjgU5J2NPHs0yvZ_7KBToX7A2BdjLEv_8wOyggZ3j_LoW_UEva46sswNJjrKjhXbw1Qsn3UPxR99RjEIEJXDrObUbwFE6lGKPUNS"/ />
      </div>
      <div>
      <div className="font-bold text-sm text-on-surface">Şef Elif</div>
      <div className="text-xs text-on-surface-variant">Hoş geldin, Şef</div>
      </div>
      </div>
      </div>
      <nav className="flex flex-col space-y-2">
      <a className="bg-[#E07A2F]/10 text-[#984800] font-bold rounded-xl px-4 py-3 flex items-center hover:translate-x-1 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mr-3" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
      <span className="font-['Inter'] text-sm tracking-wide">Ana Sayfa</span>
      </a>
      <a className="text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl flex items-center hover:translate-x-1 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mr-3">add_circle</span>
      <span className="font-['Inter'] text-sm tracking-wide">Tarif Ekle</span>
      </a>
      <a className="text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl flex items-center hover:translate-x-1 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mr-3">menu_book</span>
      <span className="font-['Inter'] text-sm tracking-wide">Koleksiyonlar</span>
      </a>
      <a className="text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl flex items-center hover:translate-x-1 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined mr-3">settings</span>
      <span className="font-['Inter'] text-sm tracking-wide">Ayarlar</span>
      </a>
      </nav>
      <div className="mt-auto pb-8">
      <button className="w-full primary-gradient text-white rounded-xl py-3 px-4 font-bold text-sm shadow-md active:scale-95 transition-all">
                          Yeni Tarif Paylaş
                      </button>
      </div>
      </div>
      </aside>
      {/*  Success Toast Notification  */}
      {/*  Fixed positioning at bottom-right corner as requested  */}
      <div className="fixed bottom-10 right-10 z-[100] flex items-center">
      <div className="bg-surface glass-effect rounded-2xl px-6 py-4 custom-shadow border border-white/40 flex items-center space-x-4 animate-in fade-in slide-in-from-bottom-4">
      <div className="bg-[#e7f4e8] p-2 rounded-full flex items-center justify-center">
      <span className="material-symbols-outlined text-[#2e7d32] font-bold" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      </div>
      <div className="flex flex-col">
      <span className="text-on-surface font-bold text-sm leading-tight">Başarılı!</span>
      <span className="text-on-surface-variant text-sm">Tarif başarıyla kaydedildi</span>
      </div>
      <button className="ml-4 text-outline hover:text-on-surface transition-colors">
      <span className="material-symbols-outlined text-lg">close</span>
      </button>
      </div>
      </div>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
      <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">explore</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">search</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">add_box</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ekle</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </a>
      </nav>
    </>
  );
}
