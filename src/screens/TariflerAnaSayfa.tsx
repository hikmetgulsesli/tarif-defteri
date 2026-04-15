// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Tarifler (Ana Sayfa)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface TariflerAnaSayfaProps {}

export function TariflerAnaSayfa(props: TariflerAnaSayfaProps) {
  return (
    <>
      {/*  TopNavBar Implementation  */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif'] tracking-tight">
                      Lezzet Defteri
                  </div>
      <nav className="hidden md:flex items-center space-x-8">
      <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold transition-colors duration-300 font-['Noto_Serif']" href="#">Ana Sayfa</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 font-['Noto_Serif']" href="#">Kategoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 font-['Noto_Serif']" href="#">Favoriler</a>
      <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 font-['Noto_Serif']" href="#">Defterim</a>
      </nav>
      <div className="flex items-center space-x-4">
      <div className="relative hidden sm:block">
      <input className="bg-surface-container-low border-none rounded-full py-2 px-4 pr-10 focus:ring-2 focus:ring-primary-container text-sm w-64 outline-none" placeholder="Tarif ara..." type="text"/ />
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
      </div>
      <button className="scale-95 active:opacity-80 transition-transform text-[#984800]">
      <span className="material-symbols-outlined text-3xl" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>
      {/*  SideNavBar Implementation (Desktop)  */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 bg-[#fdfcfb]/80 backdrop-blur-xl flex-col p-4 z-40 shadow-[0_20px_40px_rgba(45,42,38,0.06)] border-r border-transparent">
      <div className="pt-24 mb-10 px-4">
      <h2 className="font-['Noto_Serif'] italic text-xl text-[#984800]">Mutfak Günlüğüm</h2>
      <p className="text-xs text-on-surface-variant font-['Inter'] tracking-wide mt-1 uppercase">Hoş geldin, Şef</p>
      </div>
      <nav className="flex flex-col space-y-2 flex-grow">
      <a className="bg-[#E07A2F]/10 text-[#984800] font-bold rounded-xl px-4 py-3 flex items-center gap-3 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined" data-icon="home" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
      <span className="font-['Inter'] text-sm tracking-wide">Ana Sayfa</span>
      </a>
      <a className="text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl flex items-center gap-3 hover:translate-x-1 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined" data-icon="add_circle">add_circle</span>
      <span className="font-['Inter'] text-sm tracking-wide">Tarif Ekle</span>
      </a>
      <a className="text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl flex items-center gap-3 hover:translate-x-1 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined" data-icon="menu_book">menu_book</span>
      <span className="font-['Inter'] text-sm tracking-wide">Koleksiyonlar</span>
      </a>
      <a className="text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 rounded-xl flex items-center gap-3 hover:translate-x-1 transition-transform duration-200" href="#">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      <span className="font-['Inter'] text-sm tracking-wide">Ayarlar</span>
      </a>
      </nav>
      <div className="mt-auto p-2">
      <button className="w-full btn-primary-gradient text-white rounded-xl py-4 flex items-center justify-center gap-2 shadow-lg scale-95 active:opacity-90 transition-all font-bold text-sm">
      <span className="material-symbols-outlined text-lg">add</span>
                      Yeni Tarif Paylaş
                  </button>
      </div>
      </aside>
      {/*  Main Content  */}
      <main className="lg:ml-64 pt-24 pb-32 px-6 max-w-7xl mx-auto">
      {/*  Hero Section / Editorial Header  */}
      <section className="relative mb-16 mt-8 overflow-hidden rounded-[2rem] bg-surface-container-low p-8 md:p-16">
      <div className="relative z-10 max-w-2xl">
      <span className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Günün İlhamı</span>
      <h1 className="text-4xl md:text-6xl font-editorial text-on-surface leading-tight mb-6">Mevsimin En Taze Lezzetlerini Keşfet</h1>
      <p className="text-on-surface-variant text-lg leading-relaxed mb-8">Evinizin sıcaklığında, sevdiklerinizle paylaşacağınız en özel tarifler elinizin altında.</p>
      <div className="flex flex-wrap gap-4">
      <button className="px-8 py-4 rounded-full btn-primary-gradient text-white font-bold text-sm flex items-center gap-2 shadow-xl hover:shadow-2xl transition-all">
      <span className="material-symbols-outlined">restaurant_menu</span>
                              Popüler Tarifler
                          </button>
      <button className="px-8 py-4 rounded-full bg-white text-on-surface font-bold text-sm shadow-md hover:translate-y-[-2px] transition-all">
                              Haftalık Menü
                          </button>
      </div>
      </div>
      <div className="absolute top-0 right-0 h-full w-1/3 hidden lg:block overflow-hidden rounded-l-[50%] opacity-90">
      <img alt="Taze sebzeler ve otlarla hazırlanmış rustik bir mutfak tezgahı" className="w-full h-full object-cover" data-alt="Close-up of artisan sourdough bread, herbs, and warm olive oil on a wooden table with soft sunset lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnIJk8CeFDhcwQDIR9KnPCSmkGL5EzXChTKhlf26o9HY6P7Ty5CYqKECEDmbeeKEHnposXHL9Zf5xbTUsbQ27SPpZtBB0ZwUWfv-PMP-IzhLU1Z2eP5PQVnxUI1ppnb47NzHYmGX4v7DV-51h_BGysMpJSTJAjZdSytgPEP4oTqcj9ErfGrmz3GT3nqzrSy4alndQnMWm6HhpmCU_EkASRvUBpEjeOolmGipCujWbLcXIlYjNmbSZlGixNXY13VVVdD95Jt-kieV0V"/ />
      </div>
      </section>
      {/*  Category Quick Filter  */}
      <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
      <button className="px-6 py-2 rounded-full bg-primary text-white font-semibold text-sm whitespace-nowrap">Tümü</button>
      <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container transition-colors font-semibold text-sm whitespace-nowrap">Kahvaltı</button>
      <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container transition-colors font-semibold text-sm whitespace-nowrap">Öğle Yemeği</button>
      <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container transition-colors font-semibold text-sm whitespace-nowrap">Akşam Yemeği</button>
      <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container transition-colors font-semibold text-sm whitespace-nowrap">Tatlılar</button>
      <button className="px-6 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:bg-secondary-container transition-colors font-semibold text-sm whitespace-nowrap">İçecekler</button>
      </div>
      {/*  Recipe Grid (Asymmetric)  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/*  Card 1  */}
      <div className="group cursor-pointer">
      <div className="relative mb-6 overflow-hidden rounded-xl h-80 shadow-sm transition-all group-hover:shadow-xl">
      <img alt="Ev Yapımı Lazanya" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Layers of homemade lasagna with melted mozzarella and rich tomato sauce, top-down view, moody lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJpRwlIKPN3ZWelElpYKrbBr5KjDdmxekeLpglN3WXOsqz0ceD1qRfJ190Z74yKNksKjPEI6I8TAXa0EFvoNLxfPUIvBEgUgjg9vUpjMJOEQvnOBua08GPp8sDT_4Je4W-TK30TK6fw3q4h-VyUFUOiOAixvemRcEUBVKX4qLixZQXfHsCEIzxZDxAoZGOduUUpk53CoeFCy6xk7smwYyyYO3vjdM47usnuuHJQylfTNaK_4CAIpJ9LeLUg5IkmyzWAI98pnpywq8o"/ />
      <div className="absolute top-4 left-4">
      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">AKŞAM YEMEĞİ</span>
      </div>
      <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all">
      <span className="material-symbols-outlined" data-icon="favorite" style={{fontVariationSettings: "'FILL' 0"}}>favorite</span>
      </button>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-sm text-primary">schedule</span>
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">45 DAKİKA</span>
      </div>
      <h3 className="text-2xl font-editorial text-on-surface group-hover:text-primary transition-colors">Ev Yapımı Lazanya</h3>
      <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">Beşamel sosun yumuşaklığı ve taze parmesan peynirinin eşsiz uyumuyla hazırlanan klasik İtalyan tarifi.</p>
      </div>
      </div>
      {/*  Card 2  */}
      <div className="group cursor-pointer lg:mt-12">
      <div className="relative mb-6 overflow-hidden rounded-xl h-80 shadow-sm transition-all group-hover:shadow-xl">
      <img alt="Çikolatalı Sufle" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Indulgent chocolate souffle with a molten center and a light dusting of powdered sugar on a ceramic plate" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmvJjM_XW8gBh0ORfO_-vVtNJTcEyT0BnFbcpWNyXlycedT-U0sUIotr1oQUmj_z7qLTsMUs37wOkezbk1chkE0clGXPsoHV43XwqfBw_KmjnAXsOBgMuaWiXawtLtgWTrBQMuaAIiPyuaahqgVv0ujAGYkPbzHVpFyan42aTPPSE1Er8ml17IGCv0TLRE43hODX1dSHDzTj_hV1U4bkW3jIJ8J2jwhHWOT4mNGrbOxWCiTBKn9imMAJ2365-wh7fm9WQaL-DjkP3A"/ />
      <div className="absolute top-4 left-4">
      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">TATLI</span>
      </div>
      <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all">
      <span className="material-symbols-outlined" data-icon="favorite" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
      </button>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-sm text-primary">schedule</span>
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">20 DAKİKA</span>
      </div>
      <h3 className="text-2xl font-editorial text-on-surface group-hover:text-primary transition-colors">Çikolatalı Sufle</h3>
      <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">Akışkan merkezi ve ipeksi dokusuyla tatlı krizlerinizin en asil çözümü.</p>
      </div>
      </div>
      {/*  Card 3  */}
      <div className="group cursor-pointer">
      <div className="relative mb-6 overflow-hidden rounded-xl h-80 shadow-sm transition-all group-hover:shadow-xl">
      <img alt="Mercimek Çorbası" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Bowl of traditional yellow lentil soup garnished with red pepper oil and lemon slice on a rustic table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXhJQ_7AXzGafIZcjd9XkikKA4fLj103DQXQqoGctYEviiJq_QZ0BXBK1RK-oW0mGlli0b2o2wJvShXWS2ty8Q5MqDqtDDEVpfKKK-LzZ9dAJ75JISu5cvZwP2H7sc7WOrZ45y6ADh3SKkTcQGgqenLXWl5sLZ8tk7DomOHWdqyBsNWFdp-w2Zokgv9SpsLXNXjAJQwHrC3Ao5Z5PvQqwiugISmWv6E12XH-sUl5mZHhw3exZQerhgrJoBck7hnXlw1ndJSw_2_pIA"/ />
      <div className="absolute top-4 left-4">
      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">KLASİK</span>
      </div>
      <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all">
      <span className="material-symbols-outlined" data-icon="favorite" style={{fontVariationSettings: "'FILL' 0"}}>favorite</span>
      </button>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-sm text-primary">schedule</span>
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">35 DAKİKA</span>
      </div>
      <h3 className="text-2xl font-editorial text-on-surface group-hover:text-primary transition-colors">Mercimek Çorbası</h3>
      <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">Süzme kıvamı ve tereyağlı sosuyla sofraların vazgeçilmez başlangıcı.</p>
      </div>
      </div>
      {/*  Card 4  */}
      <div className="group cursor-pointer lg:mt-[-3rem]">
      <div className="relative mb-6 overflow-hidden rounded-xl h-80 shadow-sm transition-all group-hover:shadow-xl">
      <img alt="Bahçe Salatası" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Fresh vibrant salad with arugula, strawberries, walnuts and balsamic glaze in a ceramic bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCT8gPQQD9l9SrtzXLCxnCpvOV5pSrKTP3-0K_4w6BSGbvYzUT8S1MAtSsiT_IZZqEHUQsTMDsaz6FnCvHQlSkuV7A-Dd8wZpx0zgwFkuYhRK6NxKXxrdUq-wqt4kYIoRWNiDIB3mvev7hP-OwjqE84WfEDm0-88chzb65dnPmrjPFmsZ8ci0561BptZGIqI7MNNRSqb9TGVUYzx-jIo7P0CZ69c7W3-56G0po2yiCthbaryOSoBqzWf4Rq6OlBIVxVC4mjhTEzGiDA"/ />
      <div className="absolute top-4 left-4">
      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">DİYET</span>
      </div>
      <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all">
      <span className="material-symbols-outlined" data-icon="favorite" style={{fontVariationSettings: "'FILL' 0"}}>favorite</span>
      </button>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-sm text-primary">schedule</span>
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">15 DAKİKA</span>
      </div>
      <h3 className="text-2xl font-editorial text-on-surface group-hover:text-primary transition-colors">Yaz Bahçesi Salatası</h3>
      <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">Taze meyveler ve kuruyemişlerle zenginleştirilmiş, ferahlatıcı bir öğün alternatifi.</p>
      </div>
      </div>
      {/*  Card 5 (Visual Break/Promotion)  */}
      <div className="bg-primary-fixed text-on-primary-fixed p-8 rounded-xl flex flex-col justify-center items-center text-center shadow-lg h-80">
      <span className="material-symbols-outlined text-5xl mb-4">book</span>
      <h4 className="text-2xl font-editorial mb-2">Kendi Defterini Oluştur</h4>
      <p className="text-sm opacity-80 mb-6">En sevdiğin tarifleri tek bir yerde topla ve sevdiklerinle paylaş.</p>
      <button className="bg-on-primary-fixed text-primary-fixed px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-on-primary-fixed/90 transition-colors">Şimdi Dene</button>
      </div>
      {/*  Card 6  */}
      <div className="group cursor-pointer">
      <div className="relative mb-6 overflow-hidden rounded-xl h-80 shadow-sm transition-all group-hover:shadow-xl">
      <img alt="Buddha Bowl" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A colorful buddha bowl with quinoa, avocado, chickpeas, and roasted sweet potatoes in a deep bowl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_S7Dc3RkWKW9JMY9asNgmT4W22Yzak4IehZ1VHzk7qGn6Fh2-SKTURd7kG6hfJap1OduSpvHk1Qa0gTzWfuTYbdx6YDWjk-DhXNnMksUIuIYTDiD32yaGaHF21gyEpFR6COA2XH-sYe6eCQYXGV4TNHSjtQVLS4WEer1ipN1WcwxJVPBk6gBg0Y_Ekbkeo5N60YY5Fs_H1WTT9ntiAB69GBFgEw9BBpjUWM0-e_u4bfqrCteMmhd51fEzmBA7IhNgaU-YeXj9YRP"/ />
      <div className="absolute top-4 left-4">
      <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary tracking-widest uppercase">VEGAN</span>
      </div>
      <button className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-red-500 transition-all">
      <span className="material-symbols-outlined" data-icon="favorite" style={{fontVariationSettings: "'FILL' 0"}}>favorite</span>
      </button>
      </div>
      <div>
      <div className="flex items-center gap-2 mb-2">
      <span className="material-symbols-outlined text-sm text-primary">schedule</span>
      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">30 DAKİKA</span>
      </div>
      <h3 className="text-2xl font-editorial text-on-surface group-hover:text-primary transition-colors">Protein Deposu Bowl</h3>
      <p className="text-on-surface-variant text-sm mt-2 line-clamp-2">Kinoa, avokado ve fırınlanmış nohutla hazırlanan, hem doyurucu hem sağlıklı bir kase.</p>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar Implementation (Mobile)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl border-t border-surface-container">
      <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="explore" style={{fontVariationSettings: "'FILL' 1"}}>explore</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="search">search</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="add_box">add_box</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ekle</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all" href="#">
      <span className="material-symbols-outlined" data-icon="person">person</span>
      <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </a>
      </nav>
      {/*  Floating FAB (contextual for home screen)  */}
      <button className="fixed bottom-10 right-10 z-30 h-16 w-16 btn-primary-gradient text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all lg:hidden">
      <span className="material-symbols-outlined text-3xl">add</span>
      </button>
    </>
  );
}
