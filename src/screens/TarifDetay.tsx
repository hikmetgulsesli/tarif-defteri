// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Tarif Detay
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface TarifDetayProps {}

export function TarifDetay(props: TarifDetayProps) {
  return (
    <>
      {/*  Top Navigation (Contextually Suppressed in Detail View per Rule, using Back action priority)  */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
      <a className="flex items-center gap-2 text-primary hover:opacity-80 transition-all group" href="#">
      <span className="material-symbols-outlined">arrow_back</span>
      <span className="font-medium">Geri Dön</span>
      </a>
      <div className="flex gap-4">
      <button className="flex items-center gap-2 px-4 py-2 text-primary font-medium hover:bg-surface-container-low rounded-xl transition-all">
      <span className="material-symbols-outlined">edit</span>
      <span>Düzenle</span>
      </button>
      <button className="flex items-center gap-2 px-4 py-2 text-error font-medium hover:bg-error-container/20 rounded-xl transition-all">
      <span className="material-symbols-outlined">delete</span>
      <span>Sil</span>
      </button>
      </div>
      </div>
      <div className="bg-surface-container-low h-[2px] w-full"></div>
      </header>
      <main className="max-w-7xl mx-auto px-6 pb-24 pt-8">
      {/*  Hero Section  */}
      <section className="relative mb-12">
      <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(45,42,38,0.06)]">
      <img alt="Anne Usulü Mercimek Çorbası" className="w-full h-full object-cover" data-alt="Close-up of a steaming bowl of red lentil soup with a swirl of butter and chili flakes on a rustic wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZMOMtiLTfZRfkaHe3BsU9hhdy6el8OWJolcjsZdxl6CeLehCZkzbUQr1nMJSETLkVRdGZwvSHVRZoUX-XhgGR9BtArM8Mziu-rC9TbZkRtdqn8ILWCw3wVdkqFdrorh3TdMNSiVwhnG75sTMqz0a4SYuaSYGlfRVddXo3zfJOS9Oy5iV8MaSBn03ZDf2c5RgBpXLDIyyzf_44hcrgUd4vxP5H1-vi2Mbu7fOFH5m2xknsakhkaKfuwEZ-x0mXC15bo7FOsyl5QvDk"/ />
      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
      <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
      <div className="space-y-4">
      <span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-[0.15em] rounded-full">
                                  ÇORBALAR
                              </span>
      <h1 className="serif-text text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
                                  Anne Usulü Mercimek Çorbası
                              </h1>
      </div>
      <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-error shadow-xl transform hover:scale-105 active:scale-95 transition-all">
      <span className="material-symbols-outlined filled-icon text-3xl" style={{fontVariationSettings: "'FILL' 1"}}>favorite</span>
      </button>
      </div>
      </div>
      {/*  Stats Overlay (Asymmetric Float)  */}
      <div className="absolute -bottom-6 left-12 right-12 hidden md:flex gap-6">
      <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
      <span className="material-symbols-outlined text-primary-container text-3xl">schedule</span>
      <div>
      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">HAZIRLIK</p>
      <p className="font-bold text-on-surface">15 Dakika</p>
      </div>
      </div>
      <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
      <span className="material-symbols-outlined text-primary-container text-3xl">restaurant</span>
      <div>
      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">PİŞİRME</p>
      <p className="font-bold text-on-surface">30 Dakika</p>
      </div>
      </div>
      <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
      <span className="material-symbols-outlined text-primary-container text-3xl">group</span>
      <div>
      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">PORSİYON</p>
      <p className="font-bold text-on-surface">4 Kişilik</p>
      </div>
      </div>
      <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
      <span className="material-symbols-outlined text-primary-container text-3xl">local_fire_department</span>
      <div>
      <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">KALORİ</p>
      <p className="font-bold text-on-surface">180 kcal</p>
      </div>
      </div>
      </div>
      </section>
      {/*  Main Recipe Content (Editorial Grid)  */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 lg:mt-24">
      {/*  Left Sidebar: Ingredients (Bento Style)  */}
      <aside className="lg:col-span-4 space-y-8">
      <div className="bg-surface-container-low rounded-[2rem] p-8">
      <h2 className="serif-text text-2xl font-bold mb-6 flex items-center gap-3">
      <span className="material-symbols-outlined text-primary">kitchen</span>
                              Malzemeler
                          </h2>
      <ul className="space-y-4">
      <li className="flex items-center gap-4 group cursor-pointer">
      <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors">
      <div className="w-3 h-3 bg-primary rounded-sm opacity-0 group-hover:opacity-10 transition-opacity"></div>
      </div>
      <span className="text-on-surface leading-relaxed">2 su bardağı kırmızı mercimek</span>
      </li>
      <li className="flex items-center gap-4 group cursor-pointer">
      <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors"></div>
      <span className="text-on-surface leading-relaxed">1 adet kuru soğan</span>
      </li>
      <li className="flex items-center gap-4 group cursor-pointer">
      <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors"></div>
      <span className="text-on-surface leading-relaxed">1 adet havuç</span>
      </li>
      <li className="flex items-center gap-4 group cursor-pointer">
      <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors"></div>
      <span className="text-on-surface leading-relaxed">1 yemek kaşığı un</span>
      </li>
      <li className="flex items-center gap-4 group cursor-pointer">
      <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors"></div>
      <span className="text-on-surface leading-relaxed">2 yemek kaşığı tereyağı</span>
      </li>
      <li className="flex items-center gap-4 group cursor-pointer">
      <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors"></div>
      <span className="text-on-surface leading-relaxed">6 su bardağı sıcak su</span>
      </li>
      <li className="flex items-center gap-4 group cursor-pointer">
      <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors"></div>
      <span className="text-on-surface leading-relaxed">1 çay kaşığı tuz ve karabiber</span>
      </li>
      </ul>
      </div>
      <div className="bg-primary-container/10 rounded-[2rem] p-8 border-2 border-primary-container/20 border-dashed">
      <h3 className="serif-text text-xl font-bold text-primary mb-4">Notlar</h3>
      <p className="text-on-surface-variant italic leading-relaxed">
                              "Çorbayı servis etmeden önce üzerine tereyağında yakılmış pul biber ve nane eklerseniz gerçek anne lezzetini yakalarsınız. Kıvamı koyu gelirse biraz sıcak su ekleyebilirsiniz."
                          </p>
      </div>
      </aside>
      {/*  Right Content: Steps  */}
      <article className="lg:col-span-8">
      <h2 className="serif-text text-3xl font-bold mb-10 flex items-center gap-3">
      <span className="material-symbols-outlined text-primary">menu_book</span>
                          Hazırlanışı
                      </h2>
      <div className="space-y-10 relative">
      {/*  Progress Line  */}
      <div className="absolute left-6 top-4 bottom-4 w-px bg-surface-container-high hidden md:block"></div>
      {/*  Step 1  */}
      <div className="flex flex-col md:flex-row gap-8 relative">
      <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">1</div>
      <div className="flex-1 bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-primary mb-2 text-lg">Ön Hazırlık</h4>
      <p className="text-on-surface-variant leading-relaxed">
                                      Mercimekleri bol suda nişastası gidene kadar yıkayın. Soğan ve havucu soyup gelişigüzel (küp küp) doğrayın.
                                  </p>
      </div>
      </div>
      {/*  Step 2  */}
      <div className="flex flex-col md:flex-row gap-8 relative">
      <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">2</div>
      <div className="flex-1 bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-primary mb-2 text-lg">Kavurma İşlemi</h4>
      <p className="text-on-surface-variant leading-relaxed">
                                      Tencereye tereyağını alın ve eritin. Soğanları ekleyip şeffaf olana kadar soteleyin. Ardından havuçları ve unu ekleyip unun kokusu çıkana kadar 2 dakika kavurun.
                                  </p>
      </div>
      </div>
      {/*  Step 3 (Glassmorphism highlight step)  */}
      <div className="flex flex-col md:flex-row gap-8 relative">
      <div className="flex-shrink-0 w-12 h-12 bg-primary-container text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg ring-4 ring-primary-container/20">3</div>
      <div className="flex-1 bg-white/40 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50">
      <h4 className="font-bold text-primary mb-2 text-lg">Pişirme</h4>
      <p className="text-on-surface leading-relaxed">
                                      Yıkanmış mercimekleri tencereye ilave edin. 6 su bardağı sıcak suyu, tuzu ve karabiberi ekleyip karıştırın. Tencerenin kapağını kapatıp mercimekler ve havuçlar yumuşayana kadar yaklaşık 25-30 dakika pişirin.
                                  </p>
      </div>
      </div>
      {/*  Step 4  */}
      <div className="flex flex-col md:flex-row gap-8 relative">
      <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg">4</div>
      <div className="flex-1 bg-surface-container-lowest p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
      <h4 className="font-bold text-primary mb-2 text-lg">Blender ve Servis</h4>
      <p className="text-on-surface-variant leading-relaxed">
                                      Pişen çorbayı pürüzsüz bir kıvam alana kadar el blenderından geçirin. İsteğe göre üzerine tereyağlı sos ile sıcak servis yapın.
                                  </p>
      </div>
      </div>
      </div>
      {/*  Action Button  */}
      <div className="mt-16 flex justify-center">
      <button className="px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(152,72,0,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3">
      <span className="material-symbols-outlined">play_circle</span>
                              Şimdi Pişirmeye Başla
                          </button>
      </div>
      </article>
      </div>
      </main>
      {/*  Bottom Navigation (Contextually visible as we are at a destination)  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-surface shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden">
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2" href="#">
      <span className="material-symbols-outlined">explore</span>
      <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
      </a>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2" href="#">
      <span className="material-symbols-outlined">search</span>
      <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
      </a>
      <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-full p-3 -mt-6 shadow-lg">
      <span className="material-symbols-outlined">add_box</span>
      </div>
      <a className="flex flex-col items-center justify-center text-on-surface-variant p-2" href="#">
      <span className="material-symbols-outlined">person</span>
      <span className="text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
      </a>
      </nav>
      {/*  Side Navigation (Web)  */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 hidden md:flex bg-surface/80 backdrop-blur-xl w-64 rounded-r-2xl shadow-[0_20px_40px_rgba(45,42,38,0.06)] border-r border-surface-container-low">
      <div className="mb-12 px-4 py-6">
      <h1 className="serif-text italic text-2xl text-primary mb-1">Lezzet Defteri</h1>
      <p className="text-xs text-on-surface-variant font-medium">Mutfak Günü güm</p>
      </div>
      <nav className="flex-1 space-y-2">
      <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1 transition-all rounded-xl group" href="#">
      <span className="material-symbols-outlined group-hover:text-primary">home</span>
      <span className="text-sm font-medium">Ana Sayfa</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 bg-primary-container/10 text-primary font-bold rounded-xl" href="#">
      <span className="material-symbols-outlined">menu_book</span>
      <span className="text-sm">Defterim</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1 transition-all rounded-xl group" href="#">
      <span className="material-symbols-outlined group-hover:text-primary">collections_bookmark</span>
      <span className="text-sm font-medium">Koleksiyonlar</span>
      </a>
      <a className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1 transition-all rounded-xl group" href="#">
      <span className="material-symbols-outlined group-hover:text-primary">settings</span>
      <span className="text-sm font-medium">Ayarlar</span>
      </a>
      </nav>
      <div className="mt-auto px-4 py-6 border-t border-surface-container-low">
      <button className="w-full py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all">
                      Yeni Tarif Paylaş
                  </button>
      </div>
      </aside>
    </>
  );
}
