import { useState, useRef } from "react";
import type { Tarif, Malzeme, Adim, Kategori } from "../types/tarif";
import { KATEGORILER } from "../types/tarif";

interface TarifDuzenleProps {
  tarif: Tarif;
  onKaydet: (id: string, guncelleme: Partial<Tarif>) => void;
  onIptal: () => void;
}

export function TarifDuzenle({ tarif, onKaydet, onIptal }: TarifDuzenleProps) {
  const [ad, setAd] = useState(tarif.ad);
  const [kategori, setKategori] = useState<Kategori>(tarif.kategori as Kategori);
  const [hazirlikSuresi, setHazirlikSuresi] = useState(String(tarif.hazirlikSuresi));
  const [pisirmeSuresi, setPisirmeSuresi] = useState(String(tarif.pisirmeSuresi ?? ""));
  const [malzemeler, setMalzemeler] = useState<Malzeme[]>(tarif.malzemeler);
  const [adimlar, setAdimlar] = useState<Adim[]>(tarif.adimlar);
  const [sefNotu, setSefNotu] = useState(tarif.sefNotu);
  const [gorselUrl, setGorselUrl] = useState(tarif.gorselUrl ?? "");
  const [hata, setHata] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const malzemeEkle = () => {
    setMalzemeler([...malzemeler, { miktar: "", ad: "" }]);
  };

  const malzemeSil = (index: number) => {
    if (malzemeler.length <= 1) return;
    setMalzemeler(malzemeler.filter((_, i) => i !== index));
  };

  const malzemeGuncelle = (index: number, alan: keyof Malzeme, deger: string) => {
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
    onKaydet(tarif.id, {
      ad: ad.trim(),
      kategori,
      hazirlikSuresi: Number(hazirlikSuresi),
      pisirmeSuresi: pisirmeSuresi ? Number(pisirmeSuresi) : 0,
      malzemeler: malzemeler.filter((m) => m.ad.trim()),
      adimlar: adimlar.filter((a) => a.aciklama.trim()),
      sefNotu: sefNotu.trim(),
      gorselUrl: gorselUrl || undefined,
    });
  };

  return (
    <>
      {/* TopNavBar */}
      <nav className="bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm dark:shadow-none fixed top-0 w-full z-50">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">
            Lezzet Defteri
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 cursor-pointer" onClick={onIptal}>Kategoriler</a>
            <a className="text-[#5c554d] dark:text-[#c7b9a7] font-medium hover:text-[#984800] transition-colors duration-300 cursor-pointer" onClick={onIptal}>Favoriler</a>
            <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold cursor-pointer" onClick={onIptal}>Defterim</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#984800] dark:text-[#E07A2F] cursor-pointer">account_circle</span>
          </div>
        </div>
        <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 px-4 md:px-8 max-w-5xl mx-auto pb-12">
        {/* Header Section */}
        <header className="mb-12">
          <nav className="flex items-center gap-2 text-on-surface-variant text-sm mb-4 cursor-pointer" onClick={onIptal}>
            <span className="material-symbols-outlined text-sm">arrow_back</span>
            <span className="font-medium">Defterim / Tariflerim</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface mb-2 tracking-tight">
            Tarifi Düzenle
          </h1>
          <p className="text-on-surface-variant italic">
            "Mutfaktaki her dokunuş, yeni bir hikaye fısıldar."
          </p>
        </header>

        {hata && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
            <span className="material-symbols-outlined">error</span>
            {hata}
          </div>
        )}

        {/* Edit Form Canvas */}
        <form className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" onSubmit={handleSubmit}>
          {/* Media & Basic Info (Left Column) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Recipe Image */}
            <div className="relative group">
              <div className="rounded-xl overflow-hidden editorial-shadow bg-surface-container-low aspect-square">
                {gorselUrl ? (
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={ad}
                    src={gorselUrl}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-5xl mb-2">image</span>
                    <span className="text-sm">Görsel yok</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    className="bg-surface/90 backdrop-blur px-4 py-2 rounded-full text-sm font-bold text-primary flex items-center gap-2 cursor-pointer"
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <span className="material-symbols-outlined text-base">photo_camera</span>
                    Fotoğrafı Değiştir
                  </button>
                </div>
              </div>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png"
                className="hidden"
                onChange={gorselYukle}
                aria-label="Fotoğraf değiştir"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-white p-3 rounded-xl editorial-shadow">
                <span className="material-symbols-outlined">auto_fix_high</span>
              </div>
            </div>

            {/* Basic Meta Info */}
            <div className="bg-surface-container-low p-6 rounded-xl space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  TARİF ADI
                </label>
                <input
                  className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg text-lg font-headline font-bold text-on-surface p-3"
                  type="text"
                  value={ad}
                  onChange={(e) => setAd(e.target.value)}
                  aria-label="Tarif adı"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  KATEGORİ
                </label>
                <select
                  className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg text-on-surface p-3 cursor-pointer"
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value as Kategori)}
                  aria-label="Kategori"
                >
                  {KATEGORILER.map((k) => (
                    <option key={k} value={k}>{k}</option>
                  ))}
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    HAZIRLIK (DK)
                  </label>
                  <div className="flex items-center bg-surface-container-lowest rounded-lg p-3">
                    <span className="material-symbols-outlined text-primary mr-2">timer</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 p-0 w-full font-bold"
                      type="number"
                      value={hazirlikSuresi}
                      onChange={(e) => setHazirlikSuresi(e.target.value)}
                      min="1"
                      aria-label="Hazırlık süresi"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                    PİŞİRME (DK)
                  </label>
                  <div className="flex items-center bg-surface-container-lowest rounded-lg p-3">
                    <span className="material-symbols-outlined text-primary mr-2">oven_gen</span>
                    <input
                      className="bg-transparent border-none focus:ring-0 p-0 w-full font-bold"
                      type="number"
                      value={pisirmeSuresi}
                      onChange={(e) => setPisirmeSuresi(e.target.value)}
                      min="0"
                      aria-label="Pişirme süresi"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Content (Right Column) */}
          <div className="lg:col-span-7 space-y-8">
            {/* Ingredients Section */}
            <section className="bg-surface-container-low p-8 rounded-xl editorial-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Malzemeler
                </h3>
                <button
                  className="text-primary flex items-center gap-1 text-sm font-bold cursor-pointer"
                  type="button"
                  onClick={malzemeEkle}
                  aria-label="Yeni malzeme ekle"
                >
                  <span className="material-symbols-outlined text-base">add</span> Yeni Ekle
                </button>
              </div>
              <div className="space-y-3">
                {malzemeler.map((malzeme, index) => (
                  <div key={index} className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg group">
                    <span className="material-symbols-outlined text-outline-variant cursor-grab">drag_indicator</span>
                    <input
                      className="flex-1 bg-transparent border-none focus:ring-0 p-0 font-medium"
                      type="text"
                      value={malzeme.miktar}
                      onChange={(e) => malzemeGuncelle(index, "miktar", e.target.value)}
                      placeholder="Miktar"
                      aria-label={`Malzeme ${index + 1} miktar`}
                    />
                    <input
                      className="flex-1 bg-transparent border-none focus:ring-0 p-0 font-medium"
                      type="text"
                      value={malzeme.ad}
                      onChange={(e) => malzemeGuncelle(index, "ad", e.target.value)}
                      placeholder="Malzeme adı"
                      aria-label={`Malzeme ${index + 1} adı`}
                    />
                    <button
                      className="opacity-0 group-hover:opacity-100 text-error-container text-on-error-container bg-error-container rounded-full p-1 transition-opacity cursor-pointer"
                      type="button"
                      onClick={() => malzemeSil(index)}
                      disabled={malzemeler.length <= 1}
                      aria-label={`Malzeme ${index + 1} sil`}
                    >
                      <span className="material-symbols-outlined text-sm">close</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Steps Section */}
            <section className="bg-surface-container-low p-8 rounded-xl editorial-shadow">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Hazırlanış Adımları
                </h3>
                <button
                  className="text-primary flex items-center gap-1 text-sm font-bold cursor-pointer"
                  type="button"
                  onClick={adimEkle}
                  aria-label="Yeni adım ekle"
                >
                  <span className="material-symbols-outlined text-base">add</span> Adım Ekle
                </button>
              </div>
              <div className="space-y-6">
                {adimlar.map((adim, index) => (
                  <div key={index} className="flex gap-4 group">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-grow space-y-2">
                      <textarea
                        className="w-full bg-surface-container-lowest border-none focus:ring-2 focus:ring-primary/20 rounded-lg p-3 text-sm leading-relaxed min-h-[80px]"
                        value={adim.aciklama}
                        onChange={(e) => adimGuncelle(index, e.target.value)}
                        placeholder={`Adım ${index + 1} açıklaması`}
                        aria-label={`Adım ${index + 1}`}
                      />
                    </div>
                    <button
                      className="opacity-0 group-hover:opacity-100 h-fit text-on-error-container cursor-pointer"
                      type="button"
                      onClick={() => adimSil(index)}
                      disabled={adimlar.length <= 1}
                      aria-label={`Adım ${index + 1} sil`}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Chef's Note */}
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary" data-icon="auto_awesome">auto_awesome</span>
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

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                className="flex-1 signature-gradient text-white py-4 px-8 rounded-xl font-bold text-lg editorial-shadow hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                type="submit"
              >
                Değişiklikleri Kaydet
              </button>
              <button
                className="flex-1 bg-surface-container-high text-on-surface py-4 px-8 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors cursor-pointer"
                type="button"
                onClick={onIptal}
              >
                İptal
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* SideNavBar (Desktop) */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full flex flex-col p-4 z-40 bg-[#fdfcfb]/80 dark:bg-[#1E1B17]/80 backdrop-blur-xl rounded-r-2xl w-64 shadow-[0_20px_40px_rgba(45,42,38,0.06)]">
        <div className="mb-10 pt-4 flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-low flex items-center justify-center">
            <span className="material-symbols-outlined text-primary text-2xl">restaurant</span>
          </div>
          <div>
            <h4 className="font-['Noto_Serif'] italic text-lg text-[#984800]">Mutfak Günlüğüm</h4>
            <p className="text-[10px] text-on-surface-variant font-medium tracking-wide">Hoş geldin, Şef</p>
          </div>
        </div>
        <nav className="flex-grow space-y-2">
          <a className="flex items-center gap-4 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide cursor-pointer" onClick={onIptal}>
            <span className="material-symbols-outlined">home</span> Ana Sayfa
          </a>
          <a className="flex items-center gap-4 bg-[#E07A2F]/10 text-[#984800] font-bold rounded-xl px-4 py-3 font-['Inter'] text-sm tracking-wide cursor-pointer">
            <span className="material-symbols-outlined">add_circle</span> Tarif Ekle
          </a>
          <a className="flex items-center gap-4 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide cursor-pointer" onClick={onIptal}>
            <span className="material-symbols-outlined">menu_book</span> Koleksiyonlar
          </a>
          <a className="flex items-center gap-4 text-[#5c554d] px-4 py-3 hover:bg-[#f5f0e6]/50 hover:translate-x-1 transition-transform duration-200 font-['Inter'] text-sm tracking-wide cursor-pointer" onClick={onIptal}>
            <span className="material-symbols-outlined">settings</span> Ayarlar
          </a>
        </nav>
        <button className="mt-auto signature-gradient text-white py-3 rounded-xl font-bold text-sm shadow-md cursor-pointer">
          Yeni Tarif Paylaş
        </button>
      </aside>

      {/* BottomNavBar (Mobile) */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] flex justify-around items-center px-4 pb-6 pt-2 shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all cursor-pointer" onClick={onIptal}>
          <span className="material-symbols-outlined">explore</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all cursor-pointer" onClick={onIptal}>
          <span className="material-symbols-outlined">search</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
        </a>
        <a className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all cursor-pointer">
          <span className="material-symbols-outlined">add_box</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2 hover:text-[#984800] active:scale-90 transition-all cursor-pointer" onClick={onIptal}>
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
        </a>
      </nav>
    </>
  );
}
