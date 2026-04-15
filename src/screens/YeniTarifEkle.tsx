import { useState, useRef } from "react";
import type { Malzeme, Adim, Kategori } from "../types/tarif";
import { KATEGORILER } from "../types/tarif";

interface YeniTarifEkleProps {
  onKaydet: (tarif: {
    ad: string;
    kategori: Kategori;
    hazirlikSuresi: number;
    pisirmeSuresi: number;
    malzemeler: Malzeme[];
    adimlar: Adim[];
    sefNotu: string;
    gorselUrl?: string;
  }) => void;
  onIptal: () => void;
}

export function YeniTarifEkle({ onKaydet, onIptal }: YeniTarifEkleProps) {
  const [ad, setAd] = useState("");
  const [kategori, setKategori] = useState<Kategori>("Ana Yemek");
  const [hazirlikSuresi, setHazirlikSuresi] = useState("");
  const [malzemeler, setMalzemeler] = useState<Malzeme[]>([
    { miktar: "", ad: "" },
    { miktar: "", ad: "" },
  ]);
  const [adimlar, setAdimlar] = useState<Adim[]>([
    { aciklama: "" },
    { aciklama: "" },
  ]);
  const [sefNotu, setSefNotu] = useState("");
  const [gorselUrl, setGorselUrl] = useState<string | undefined>(undefined);
  const [hata, setHata] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const malzemeEkle = () => {
    setMalzemeler([...malzemeler, { miktar: "", ad: "" }]);
  };

  const malzemeSil = (index: number) => {
    if (malzemeler.length <= 1) return;
    setMalzemeler(malzemeler.filter((_, i) => i !== index));
  };

  const malzemeGuncelle = (
    index: number,
    alan: keyof Malzeme,
    deger: string
  ) => {
    const yeni = [...malzemeler];
    yeni[index] = { ...yeni[index], [alan]: deger };
    setMalzemeler(yeni);
  };

  const adimEkle = () => {
    setAdimlar([...adimlar, { aciklama: "" }]);
  };

  const adimSil = (index: number) => {
    if (adimlar.length <= 1) return;
    setAdimlar(adimlar.filter((_, i) => i !== index));
  };

  const adimGuncelle = (index: number, aciklama: string) => {
    const yeni = [...adimlar];
    yeni[index] = { aciklama };
    setAdimlar(yeni);
  };

  const gorselYukle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      setHata("Görsel boyutu 5MB'dan küçük olmalıdır.");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setGorselUrl(reader.result as string);
      setHata(null);
    };
    reader.readAsDataURL(file);
  };

  const dogrula = (): string | null => {
    if (!ad.trim()) return "Tarif adı zorunludur.";
    if (!hazirlikSuresi || Number(hazirlikSuresi) <= 0)
      return "Hazırlık süresi geçerli bir sayı olmalıdır.";
    const gecerliMalzemeler = malzemeler.filter(
      (m) => m.ad.trim() || m.miktar.trim()
    );
    if (gecerliMalzemeler.length === 0)
      return "En az bir malzeme eklemelisiniz.";
    const gecerliAdimlar = adimlar.filter((a) => a.aciklama.trim());
    if (gecerliAdimlar.length === 0) return "En az bir adım eklemelisiniz.";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dogrulamaHatasi = dogrula();
    if (dogrulamaHatasi) {
      setHata(dogrulamaHatasi);
      return;
    }
    setHata(null);
    onKaydet({
      ad: ad.trim(),
      kategori,
      hazirlikSuresi: Number(hazirlikSuresi),
      pisirmeSuresi: 0,
      malzemeler: malzemeler.filter((m) => m.ad.trim()),
      adimlar: adimlar.filter((a) => a.aciklama.trim()),
      sefNotu: sefNotu.trim(),
      gorselUrl,
    });
  };

  return (
    <>
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none border-b-0">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">
            Lezzet Defteri
          </div>
          <nav className="hidden md:flex items-center space-gap-8 gap-8">
            <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 cursor-pointer" onClick={onIptal}>Kategoriler</a>
            <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 cursor-pointer" onClick={onIptal}>Favoriler</a>
            <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 cursor-pointer" onClick={onIptal}>Defterim</a>
            <div className="flex items-center gap-4 ml-4">
              <span className="material-symbols-outlined text-primary text-2xl cursor-pointer" data-icon="account_circle">account_circle</span>
            </div>
          </nav>
          <button className="md:hidden" onClick={onIptal} type="button">
            <span className="material-symbols-outlined text-primary" data-icon="menu">menu</span>
          </button>
        </div>
        <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12 mb-24">
        {/* Editorial Header */}
        <div className="mb-12 relative">
          <div className="absolute -top-6 -left-4 w-24 h-24 bg-primary-container/10 rounded-full blur-3xl"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-on-surface mb-2 tracking-tight">
            Yeni Tarif Oluştur
          </h1>
          <p className="text-on-surface-variant font-medium tracking-wide opacity-80 italic">
            Mutfak mirasınızı bugün bir adım öteye taşıyın.
          </p>
        </div>

        {hata && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
            <span className="material-symbols-outlined">error</span>
            {hata}
          </div>
        )}

        <form className="space-y-12" onSubmit={handleSubmit}>
          {/* Section 1: Temel Bilgiler */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-8 space-y-6">
              <div className="space-y-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-primary ml-1">
                  Tarif Adı
                </label>
                <input
                  className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary/20 shadow-sm transition-all placeholder:text-outline-variant/60"
                  placeholder="Örn: Anne Yarısı Mercimek Çorbası"
                  type="text"
                  value={ad}
                  onChange={(e) => setAd(e.target.value)}
                  aria-label="Tarif adı"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary ml-1">
                    Kategori
                  </label>
                  <select
                    className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary/20 shadow-sm appearance-none cursor-pointer"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value as Kategori)}
                    aria-label="Kategori seçin"
                  >
                    {KATEGORILER.map((k) => (
                      <option key={k} value={k}>
                        {k}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-widest text-primary ml-1">
                    Hazırlık Süresi (Dakika)
                  </label>
                  <input
                    className="w-full bg-surface-container-lowest border-none rounded-xl p-4 text-on-surface focus:ring-2 focus:ring-primary/20 shadow-sm"
                    placeholder="30"
                    type="number"
                    value={hazirlikSuresi}
                    onChange={(e) => setHazirlikSuresi(e.target.value)}
                    min="1"
                    aria-label="Hazırlık süresi"
                  />
                </div>
              </div>
            </div>

            {/* Image Upload */}
            <div className="md:col-span-4 h-full">
              <div className="relative group h-full">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-2 group-hover:rotate-1 transition-transform border border-dashed border-outline-variant/30"></div>
                <div
                  className="relative h-64 md:h-full min-h-[240px] bg-surface-container-low rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-outline-variant/40 overflow-hidden cursor-pointer hover:bg-surface-container-high transition-colors"
                  onClick={() => fileInputRef.current?.click()}
                  role="button"
                  tabIndex={0}
                  aria-label="Görsel yükle"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      fileInputRef.current?.click();
                    }
                  }}
                >
                  {gorselUrl ? (
                    <img
                      alt="Yüklenen görsel"
                      className="absolute inset-0 w-full h-full object-cover"
                      src={gorselUrl}
                    />
                  ) : (
                    <>
                      <img
                        alt="Tarif placeholder"
                        className="absolute inset-0 w-full h-full object-cover opacity-20"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqWvmONwG-eP65LVTjPgsZxVC7RIBaamD53OKjFS4iiHktuVKnP7PxSOk4kMGqWmeyahs6DmLbUlbNuTrIePUwnDXrQkr8BsqjPFyHJq_BG5mrHxVcQ4ijhs_OqTeRt59qjC0vXmj4_Kgu6W-HfpLHXu5jm79DDedic1NN997WABNf3rLCHpGMgNuhT4RKHiOXloibctpm0lzw7l1m8PfOkn7e-0arkFyV_p_o74UBIjqht90qw9TLdWxLHVkETukvf9pHXHmHMVBG"
                      />
                      <span className="material-symbols-outlined text-4xl text-primary mb-2" data-icon="add_a_photo">
                        add_a_photo
                      </span>
                      <span className="text-sm font-semibold text-on-surface">
                        Görsel Yükle
                      </span>
                      <span className="text-xs text-on-surface-variant mt-1">
                        JPG, PNG (Max 5MB)
                      </span>
                    </>
                  )}
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  className="hidden"
                  onChange={gorselYukle}
                  aria-label="Görsel dosyası seçin"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Malzemeler */}
          <div className="bg-surface-container-low rounded-3xl p-8 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg" data-icon="restaurant">
                  restaurant
                </span>
                <h2 className="text-2xl font-bold">Malzemeler</h2>
              </div>
              <button
                className="flex items-center gap-2 text-sm font-bold text-primary hover:bg-primary/5 px-4 py-2 rounded-full transition-all"
                type="button"
                onClick={malzemeEkle}
                aria-label="Yeni malzeme satırı ekle"
              >
                <span className="material-symbols-outlined text-lg" data-icon="add_circle">
                  add_circle
                </span>
                Yeni Satır
              </button>
            </div>
            <div className="space-y-4">
              {malzemeler.map((malzeme, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <input
                    className="flex-1 bg-surface-container-lowest border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/20"
                    placeholder="Miktar (Örn: 2 adet)"
                    type="text"
                    value={malzeme.miktar}
                    onChange={(e) =>
                      malzemeGuncelle(index, "miktar", e.target.value)
                    }
                    aria-label={`Malzeme ${index + 1} miktar`}
                  />
                  <input
                    className="flex-[2] bg-surface-container-lowest border-none rounded-xl p-3 text-sm focus:ring-2 focus:ring-primary/20"
                    placeholder="Malzeme (Örn: Orta boy soğan)"
                    type="text"
                    value={malzeme.ad}
                    onChange={(e) =>
                      malzemeGuncelle(index, "ad", e.target.value)
                    }
                    aria-label={`Malzeme ${index + 1} adı`}
                  />
                  <button
                    className="p-2 text-outline hover:text-error transition-colors cursor-pointer"
                    type="button"
                    onClick={() => malzemeSil(index)}
                    disabled={malzemeler.length <= 1}
                    aria-label={`Malzeme ${index + 1} sil`}
                  >
                    <span className="material-symbols-outlined" data-icon="delete">
                      delete
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: Yapılış Adımları */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-outline-variant/10 pb-4">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg" data-icon="format_list_numbered">
                format_list_numbered
              </span>
              <h2 className="text-2xl font-bold">Hazırlanışı</h2>
            </div>
            <div className="space-y-10 relative">
              {adimlar.map((adim, index) => (
                <div key={index} className="flex gap-6 items-start relative">
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 ${
                      index === 0
                        ? "bg-primary text-white shadow-lg shadow-primary/20"
                        : "bg-surface-container-high text-on-surface-variant"
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-grow space-y-3">
                    <textarea
                      className={`w-full bg-surface-container-lowest border-none rounded-2xl p-5 text-on-surface focus:ring-2 focus:ring-primary/20 shadow-sm ${
                        index > 0 ? "opacity-60 focus:opacity-100 transition-opacity" : ""
                      }`}
                      placeholder={
                        index === 0
                          ? "İlk adım olarak ne yapmalı?"
                          : "Sonraki aşamayı buraya ekleyin..."
                      }
                      rows={3}
                      value={adim.aciklama}
                      onChange={(e) => adimGuncelle(index, e.target.value)}
                      aria-label={`Adım ${index + 1}`}
                    />
                  </div>
                  <button
                    className="p-2 mt-2 text-outline hover:text-error transition-colors cursor-pointer"
                    type="button"
                    onClick={() => adimSil(index)}
                    disabled={adimlar.length <= 1}
                    aria-label={`Adım ${index + 1} sil`}
                  >
                    <span className="material-symbols-outlined" data-icon="close">
                      close
                    </span>
                  </button>
                </div>
              ))}
              <div className="pl-16">
                <button
                  className="px-6 py-3 rounded-xl border border-dashed border-primary/40 text-primary font-bold text-sm hover:bg-primary/5 transition-all flex items-center gap-2 cursor-pointer"
                  type="button"
                  onClick={adimEkle}
                  aria-label="Yeni adım ekle"
                >
                  <span className="material-symbols-outlined" data-icon="add">
                    add
                  </span>
                  Adım Ekle
                </button>
              </div>
            </div>
          </div>

          {/* Section 4: Notlar */}
          <div className="pt-8">
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">
                  auto_awesome
                </span>
                <h2 className="text-xl font-bold italic">Şefin Notu</h2>
              </div>
              <textarea
                className="w-full bg-transparent border-none focus:ring-0 p-0 text-on-surface-variant italic leading-relaxed placeholder:text-outline-variant/60"
                placeholder="Servis önerileri, saklama koşulları veya küçük sırlar..."
                rows={4}
                value={sefNotu}
                onChange={(e) => setSefNotu(e.target.value)}
                aria-label="Şefin notu"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-12">
            <button
              className="w-full sm:w-auto px-8 py-4 rounded-2xl text-on-surface-variant font-bold hover:bg-surface-container-high transition-colors cursor-pointer"
              type="button"
              onClick={onIptal}
            >
              İptal
            </button>
            <button
              className="w-full sm:w-auto px-12 py-4 signature-gradient rounded-2xl text-white font-bold text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
              type="submit"
            >
              Tarifi Kaydet
            </button>
          </div>
        </form>
      </main>

      {/* Bottom Navigation Bar (Mobile only) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all cursor-pointer" onClick={onIptal}>
          <span className="material-symbols-outlined" data-icon="explore">explore</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all cursor-pointer" onClick={onIptal}>
          <span className="material-symbols-outlined" data-icon="search">search</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all cursor-pointer" onClick={() => {}}>
          <span className="material-symbols-outlined" data-icon="add_box">add_box</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ekle</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all cursor-pointer" onClick={onIptal}>
          <span className="material-symbols-outlined" data-icon="person">person</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
        </a>
      </nav>

      {/* Floating Background Decorative Elements */}
      <div className="fixed top-20 right-0 -z-10 opacity-20 hidden lg:block">
        <svg height="400" viewBox="0 0 200 200" width="400" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87,-15.7,86.1,-0.5C85.2,14.6,80.1,29.2,71.8,41.4C63.6,53.7,52.2,63.6,39.1,70.1C26,76.6,13,79.7,-0.7,80.9C-14.4,82.1,-28.8,81.4,-41.7,75.4C-54.6,69.3,-66,57.9,-73.4,44.4C-80.8,30.8,-84.1,15.4,-82.9,0.7C-81.7,-14.1,-76,-28.1,-67.2,-40.1C-58.4,-52.1,-46.5,-62,-33.5,-69.6C-20.5,-77.2,-6.4,-82.5,8.1,-96.6C22.6,-110.6,31.4,-83.6,44.7,-76.4Z"
            fill="#E07A2F"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </>
  );
}
