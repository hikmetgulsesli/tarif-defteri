// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Favoriler
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface FavorilerProps {}

export function Favoriler(props: FavorilerProps) {
  return (
    <>
      <header className="bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">Lezzet Defteri</div>
      <nav className="hidden md:flex items-center space-x-8">
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Kategoriler</a>
      <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold hover:text-[#984800] transition-colors duration-300" href="#">Favoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300" href="#">Defterim</a>
      </nav>
      <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center bg-surface-container-low px-4 py-2 rounded-full border-none">
      <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
      <input className="bg-transparent border-none focus:ring-0 text-sm w-48 text-on-surface" placeholder="Tarif ara..." type="text"/ />
      </div>
      <button className="scale-95 active:opacity-80 transition-transform text-[#984800] dark:text-[#E07A2F]">
      <span className="material-symbols-outlined text-3xl">account_circle</span>
      </button>
      </div>
      </div>
      <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>
      <aside className="hidden lg:flex fixed left-0 top-20 h-[calc(100vh-80px)] w-64 bg-[#fdfcfb]/80 dark:bg-[#1E1B17]/80 backdrop-blur-xl rounded-r-2xl shadow-[0_20px_40px_rgba(45,42,38,0.06)] flex-col p-4 z-40">
      <div className="mb-8 px-4 py-2">
      <h2 className="font-['Noto_Serif'] italic text-xl text-[#984800]">Mutfak Günlüğüm</h2>
      <p className="text-xs text-on-surface-variant opacity-70">Hoş geldin, Şef</p>
      </div>
      <nav className="flex-1 space-y-2">
      <a className="flex items-center gap-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">home</span> Ana Sayfa
                  </a>
      <a className="flex items-center gap-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">add_circle</span> Tarif Ekle
                  </a>
      <a className="flex items-center gap-3 bg-[#E07A2F]/10 text-[#984800] font-bold rounded-xl px-4 py-3 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">favorite</span> Favoriler
                  </a>
      <a className="flex items-center gap-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">menu_book</span> Koleksiyonlar
                  </a>
      <a className="flex items-center gap-3 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide" href="#">
      <span className="material-symbols-outlined">settings</span> Ayarlar
                  </a>
      </nav>
      <button className="mt-auto signature-gradient text-white rounded-xl py-3 px-4 font-bold text-sm shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform">
                  Yeni Tarif Paylaş
              </button>
      </aside>
      <main className="max-w-7xl mx-auto px-6 pt-12 pb-24 lg:pl-72">
      <div className="mb-12 relative">
      <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-2 relative z-10">Favori Tariflerim</h1>
      <p className="text-on-surface-variant font-label text-sm tracking-[0.2em] uppercase">Gönlünüzde taht kuran lezzetler</p>
      <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-container/10 rounded-full blur-3xl -z-10"></div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      <div className="group relative bg-surface-container-low rounded-xl editorial-shadow overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
      <img className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" data-alt="artisanal sourdough pizza with fresh basil and buffalo mozzarella on a wooden peel in a sunlit kitchen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCxtf7Bjx1QIrq9S3oq33X3uPrTK1PrJR1cnyvoFnI8WKRYt9ws_Op0ZGqkH1b-ejm5bmZ5YwHiyfNvNQ7_HmxxSf91tPymfzaBTQmrpgmknxWSPlU5gMLjlWzdOXPEdkYH76v6BLeNyT9GVL529fsaKEBriohZhZiVnb1BXiWOG5MybE49wIsxtrQFw92dn16mW7PbscIBGcn6D6VDiunayb_bUxpysYIbCaqrGQEWJ03ZyQdqyvA42nwNicX1XyePm2dr_k9u3OU"/ />
      <div className="absolute top-4 right-4 z-10">
      <button className="bg-white/90 backdrop-blur text-primary p-2 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
      </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
      <span className="inline-block bg-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">Ana Yemek</span>
      <h3 className="text-white font-headline text-2xl font-bold leading-tight">Taş Fırın Usulü Margherita</h3>
      </div>
      </div>
      <div className="p-6">
      <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4 text-on-surface-variant text-xs font-label tracking-wider uppercase">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 45 DK</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">restaurant</span> Orta</span>
      </div>
      </div>
      <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed italic mb-6">"İtalyan klasiklerini kendi mutfağınızda canlandırın. Özel domates sosu ve taze mozzarella ile hazırlanan bu pizza, favorilerinizin başında gelecek."</p>
      <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
      <img className="w-8 h-8 rounded-full border-2 border-surface shadow-sm" data-alt="portrait of a woman chef smiling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5_UYuRqRaP3GT_uzK-S4CAgrnlZx-Nu-BoDX56uOhnsD1dnQQ0goJyOdT4_NpvN5iafeRo_C_svb1SAz3um_S8mned0beQhhzT3mgvHVO0lmcfe8abYVn8AmJR53c4gFKNxFdptID8zcFJ4byZoeaqJIWukiQZHckpE98UFHiTY2_9GtuCSXItd2kJJP6bFEbl57_WY4cLuwgB4xatm76rm_rSr3noawLp8f_AGorl8QiqJz2Zwk0ZLELrIJZN8i3g5ms8vFQt09y"/ />
      <span className="text-xs text-on-surface-variant font-medium ml-4 self-center">Şef Zeynep</span>
      </div>
      <button className="text-primary font-bold text-sm hover:underline underline-offset-4">Tarifi Gör</button>
      </div>
      </div>
      </div>
      <div className="group relative bg-surface-container-low rounded-xl editorial-shadow overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
      <img className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" data-alt="rich dark chocolate lava cake with a molten center being dusted with powdered sugar, moody atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHAxQjBPk6Icn2pKjha4VbXIbJLAlfgtwpp2IvCQ7iHxCq109DqlpzZJBxdWsxiGZ67DwOE8za6NJUKLfxJw0NMWXnghOJc-AEoNe8K-08NvSn5Fccfr6T_QWxIuDn25RIoFqM_LXRlvnsg_Z4LXKE5Y7oO3OS4thQ8MB0RhYFXQyggpNz9flVQyUqKicMyQ_re1HVe1zaBzsiBGrJutP1FhaiBaJ4m5e4QwbqrxkovLk8N_4tW6MlYwfv18Ftofhc6Geowy-N6UpF"/ />
      <div className="absolute top-4 right-4 z-10">
      <button className="bg-white/90 backdrop-blur text-primary p-2 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
      </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
      <span className="inline-block bg-tertiary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">Tatlı</span>
      <h3 className="text-white font-headline text-2xl font-bold leading-tight">Akışkan Volkan Keki</h3>
      </div>
      </div>
      <div className="p-6">
      <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4 text-on-surface-variant text-xs font-label tracking-wider uppercase">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 20 DK</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">restaurant</span> Kolay</span>
      </div>
      </div>
      <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed italic mb-6">"Çikolata tutkunları için bir başyapıt. İçi sıcak ve akışkan, dışı ise hafif çıtır bu kek, akşam yemeği sonrası tatlı krizlerinizin tek çözümü."</p>
      <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
      <img className="w-8 h-8 rounded-full border-2 border-surface shadow-sm" data-alt="portrait of a male chef in a kitchen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2By9i70GTDzstyJPjLCkMNmXylqYmprpJcbxQEQ7j8j32MiL6Gld7vYkgi4KWCdr_RQsIMNIA3nUOjJ-FFU6dBjIVoRfvuVv5UN2vCQKS6wbmdxoEpaJlQvbPX3ZPF_Xof88_6VvlT94uFUzdONND-C1FA1xEpy-NN8efHGdCBp4AWC3x0OfYRrcpXU7M4g5rL2F6NeRZRc4clTY5W_hRDtHBDyVVURGdt260y1Z8RV_JZGOtzG5eFh55Npbx0XYORi1l8KJ-Uzaq"/ />
      <span className="text-xs text-on-surface-variant font-medium ml-4 self-center">Şef Kerem</span>
      </div>
      <button className="text-primary font-bold text-sm hover:underline underline-offset-4">Tarifi Gör</button>
      </div>
      </div>
      </div>
      <div className="group relative bg-surface-container-low rounded-xl editorial-shadow overflow-hidden transition-all duration-300 hover:-translate-y-2">
      <div className="relative h-72 overflow-hidden">
      <img className="w-full h-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" data-alt="vibrant garden salad with roasted chickpeas, avocado slices, and pomegranate seeds on a ceramic plate, bright natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSfU5XaPTHr8FbbZtFijZTeAIhc1TDn_Ysx8m-5K-JXTqD1yd4gEUaSVvg1XaW4sznyMaCocfh0WdOXiJQkho4atrMsa67BBeTEMJUwkYX0dHizsWMACJVxHseBtVwJlx4cvaueny-gJabFl9rYJFPiVbgn_cvAHgBblImPwS7ifHbUe2dzT7ug7Nkj7aHigG92oqdWGLLStCyw7y7GhQi6TNrLP1fsD7uXN6LanceboujL7qkSRvtjmbbryjnKt8rts_10y68nMa-"/ />
      <div className="absolute top-4 right-4 z-10">
      <button className="bg-white/90 backdrop-blur text-primary p-2 rounded-full shadow-lg hover:scale-110 active:scale-90 transition-all">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
      </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
      <span className="inline-block bg-secondary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2">Salata</span>
      <h3 className="text-white font-headline text-2xl font-bold leading-tight">Çıtır Nohutlu Gökkuşağı</h3>
      </div>
      </div>
      <div className="p-6">
      <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-4 text-on-surface-variant text-xs font-label tracking-wider uppercase">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">schedule</span> 15 DK</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">restaurant</span> Çok Kolay</span>
      </div>
      </div>
      <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed italic mb-6">"Hem sağlıklı hem de doyurucu bir öğün arayanlara. Fırınlanmış baharatlı nohutlar ve taze yeşilliklerin muhteşem uyumu."</p>
      <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
      <img className="w-8 h-8 rounded-full border-2 border-surface shadow-sm" data-alt="portrait of a young woman chef" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf415aNx08wU3hQv4P7xKd_Jb0qQCYaG0gUbiC-KYLF26LmNKjQLy_QI0w_LnXvWH_Z0jKjfBRVkUUbt7RvxxRoQV6GOnV8DJYYD1ZexonoctRi8sX-XOj95HyD2lqNQ1Z2-2wMhYl5ujji9GqcZFUSXtuEqsBa3IXeM26g2abMK_69u9IDmcCx7wXo-MK3vYIIGueUMOkUwGdqp7UIIvdQ9QaigHMQ3CrAqF91igCumWMM0Yvn6QujgasMcab522HY7w31qTc86Hd"/ />
      <span className="text-xs text-on-surface-variant font-medium ml-4 self-center">Şef Melis</span>
      </div>
      <button className="text-primary font-bold text-sm hover:underline underline-offset-4">Tarifi Gör</button>
      </div>
      </div>
      </div>
      </section>
      <div className="mt-16 bg-surface-container rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
      <div className="relative z-10">
      <h2 className="text-2xl font-headline font-bold mb-4">Yeni favoriler keşfetmeye ne dersin?</h2>
      <p className="text-on-surface-variant mb-8 max-w-lg mx-auto leading-relaxed">Senin için hazırladığımız özel koleksiyonlara göz at ve mutfağına yeni heyecanlar kat.</p>
      <button className="signature-gradient text-white px-8 py-3 rounded-full font-bold shadow-xl hover:scale-105 active:scale-95 transition-all">
                          Tüm Tarifleri Keşfet
                      </button>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </div>
      </main>
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">explore</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">search</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
      </a>
      <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-10 shadow-lg active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">add_box</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ekle</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#984800] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Favori</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </a>
      </nav>
    </>
  );
}
