import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { YeniTarifEkle } from "./screens/YeniTarifEkle";
import { TarifDuzenle } from "./screens/TarifDuzenle";
import type { Tarif, Kategori } from "./types/tarif";
import { useTarifler } from "./hooks/useTarifler";
import "./index.css";

function TariflerListesi({ tarifler, onYeni, onDuzenle, onFavoriToggle, onSil }: {
  tarifler: Tarif[];
  onYeni: () => void;
  onDuzenle: (id: string) => void;
  onFavoriToggle: (id: string) => void;
  onSil: (id: string) => void;
}) {
  const [arama, setArama] = useState("");
  const [filtreKategori, setFiltreKategori] = useState<string>("");

  const filtrelenmis = tarifler.filter((t) => {
    const aramaUygun = t.ad.toLowerCase().includes(arama.toLowerCase()) ||
      t.kategori.toLowerCase().includes(arama.toLowerCase());
    const kategoriUygun = !filtreKategori || t.kategori === filtreKategori;
    return aramaUygun && kategoriUygun;
  });

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-sm">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-[#984800] dark:text-[#E07A2F] font-['Noto_Serif']">
            Lezzet Defteri
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-[#984800] border-b-2 border-[#984800] pb-1 font-bold">Ana Sayfa</a>
            <a className="text-[#5c554d] font-medium hover:text-[#984800] transition-colors cursor-pointer">Kategoriler</a>
            <a className="text-[#5c554d] font-medium hover:text-[#984800] transition-colors cursor-pointer">Favoriler</a>
          </nav>
          <button
            className="hidden md:flex items-center gap-2 bg-[#E07A2F] text-white px-4 py-2 rounded-xl font-bold text-sm hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
            onClick={onYeni}
          >
            <span className="material-symbols-outlined text-lg">add</span>
            Yeni Tarif
          </button>
        </div>
        <div className="bg-[#f5f0e6] dark:bg-[#2d2a26] h-[2px] w-full"></div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8 pb-32">
        {/* Hero */}
        <section className="relative mb-12 h-[300px] rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#984800]/80 to-transparent flex flex-col justify-center px-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 font-['Noto_Serif']">
              Tariflerinizi Keşfedin
            </h1>
            <p className="text-white/80 text-lg italic max-w-md">
              Mutfak mirasınızı bir araya toplayın, her tarif bir hikaye.
            </p>
          </div>
          <div className="absolute inset-0 bg-[#984800]/30 -z-10"></div>
        </section>

        {/* Search & Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
            <input
              className="w-full bg-surface-container-low border-none rounded-full py-3 pl-12 pr-4 text-on-surface focus:ring-2 focus:ring-primary/20 transition-all"
              type="text"
              placeholder="Tarif ara..."
              value={arama}
              onChange={(e) => setArama(e.target.value)}
              aria-label="Tarif ara"
            />
          </div>
          <select
            className="bg-surface-container-low border-none rounded-full py-3 px-6 text-on-surface cursor-pointer focus:ring-2 focus:ring-primary/20"
            value={filtreKategori}
            onChange={(e) => setFiltreKategori(e.target.value)}
            aria-label="Kategori filtrele"
          >
            <option value="">Tüm Kategoriler</option>
            <option value="Ana Yemek">Ana Yemek</option>
            <option value="Çorbalar">Çorbalar</option>
            <option value="Tatlılar">Tatlılar</option>
            <option value="Zeytinyağlılar">Zeytinyağlılar</option>
            <option value="Hamur İşleri">Hamur İşleri</option>
          </select>
        </div>

        {/* Recipe Grid */}
        {filtrelenmis.length === 0 ? (
          <div className="text-center py-16">
            <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">restaurant_menu</span>
            <h2 className="text-2xl font-bold text-on-surface mb-2">
              {arama || filtreKategori ? "Sonuç Bulunamadı" : "Henüz Tarif Yok"}
            </h2>
            <p className="text-on-surface-variant mb-6">
              {arama || filtreKategori
                ? "Farklı anahtar kelimeler veya kategori deneyin."
                : "İlk tarifinizi ekleyerek başlayın!"}
            </p>
            {!arama && !filtreKategori && (
              <button
                className="bg-[#E07A2F] text-white px-8 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all cursor-pointer"
                onClick={onYeni}
              >
                Yeni Tarif Oluştur
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtrelenmis.map((tarif) => (
              <div
                key={tarif.id}
                className="bg-surface-container-low rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
                onClick={() => onDuzenle(tarif.id)}
                role="button"
                tabIndex={0}
                aria-label={`${tarif.ad} tarifini düzenle`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onDuzenle(tarif.id);
                  }
                }}
              >
                <div className="h-48 overflow-hidden bg-surface-container">
                  {tarif.gorselUrl ? (
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={tarif.ad}
                      src={tarif.gorselUrl}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                      <span className="material-symbols-outlined text-5xl text-primary/30">restaurant</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-primary">
                      {tarif.kategori}
                    </span>
                    <button
                      className="p-1 hover:scale-110 transition-transform cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onFavoriToggle(tarif.id);
                      }}
                      aria-label={tarif.favori ? "Favorilerden çıkar" : "Favorilere ekle"}
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: tarif.favori ? '"FILL" 1' : '"FILL" 0', color: tarif.favori ? "#E07A2F" : "inherit" }}>
                        favorite
                      </span>
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-on-surface mb-1">{tarif.ad}</h3>
                  <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">timer</span>
                      {tarif.hazirlikSuresi} dk
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-base">restaurant</span>
                      {tarif.malzemeler.length} malzeme
                    </span>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <button
                      className="flex-1 text-sm font-bold text-primary bg-primary/10 py-2 rounded-lg hover:bg-primary/20 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDuzenle(tarif.id);
                      }}
                    >
                      Düzenle
                    </button>
                    <button
                      className="text-sm font-bold text-error bg-error/10 py-2 px-3 rounded-lg hover:bg-error/20 transition-colors cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSil(tarif.id);
                      }}
                      aria-label="Tarifi sil"
                    >
                      <span className="material-symbols-outlined text-base">delete</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-[#fdfcfb] dark:bg-[#1E1B17] shadow-[0_-4px_12px_rgba(0,0,0,0.05)] rounded-t-3xl">
        <a className="flex flex-col items-center justify-center text-[#984800] p-2 font-bold">
          <span className="material-symbols-outlined">explore</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Keşfet</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2">
          <span className="material-symbols-outlined">search</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Ara</span>
        </a>
        <a
          className="flex flex-col items-center justify-center bg-[#E07A2F] text-white rounded-full p-3 -mt-6 shadow-lg active:scale-90 transition-all cursor-pointer"
          onClick={onYeni}
        >
          <span className="material-symbols-outlined">add_box</span>
        </a>
        <a className="flex flex-col items-center justify-center text-[#5c554d] p-2">
          <span className="material-symbols-outlined">person</span>
          <span className="font-['Inter'] text-[10px] font-bold uppercase tracking-widest mt-1">Profil</span>
        </a>
      </nav>
    </>
  );
}

function Uygulama() {
  const { tarifler, tarifEkle, tarifGuncelle, tarifSil, favoriToggle, tarifGetir } = useTarifler();
  const navigate = useNavigate();
  const [duzenlenecekId, setDuzenlenecekId] = useState<string | null>(null);

  const handleYeniKaydet = useCallback(
    (data: {
      ad: string;
      kategori: Kategori;
      hazirlikSuresi: number;
      pisirmeSuresi: number;
      malzemeler: { miktar: string; ad: string }[];
      adimlar: { aciklama: string }[];
      sefNotu: string;
      gorselUrl?: string;
    }) => {
      tarifEkle(data);
      navigate("/");
    },
    [tarifEkle, navigate]
  );

  const handleDuzenleKaydet = useCallback(
    (id: string, guncelleme: Partial<Tarif>) => {
      tarifGuncelle(id, guncelleme);
      setDuzenlenecekId(null);
      navigate("/");
    },
    [tarifGuncelle, navigate]
  );

  const duzenlenecekTarif = duzenlenecekId ? tarifGetir(duzenlenecekId) : null;

  return (
    <Routes>
      <Route
        path="/"
        element={
          <TariflerListesi
            tarifler={tarifler}
            onYeni={() => navigate("/yeni")}
            onDuzenle={(id) => {
              setDuzenlenecekId(id);
              navigate("/duzenle");
            }}
            onFavoriToggle={favoriToggle}
            onSil={tarifSil}
          />
        }
      />
      <Route
        path="/yeni"
        element={
          <YeniTarifEkle
            onKaydet={handleYeniKaydet}
            onIptal={() => navigate("/")}
          />
        }
      />
      <Route
        path="/duzenle"
        element={
          duzenlenecekTarif ? (
            <TarifDuzenle
              tarif={duzenlenecekTarif}
              onKaydet={handleDuzenleKaydet}
              onIptal={() => {
                setDuzenlenecekId(null);
                navigate("/");
              }}
            />
          ) : (
            <div className="flex items-center justify-center min-h-screen">
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">error</span>
                <p className="text-on-surface-variant text-lg mb-4">Tarif bulunamadı.</p>
                <button
                  className="bg-[#E07A2F] text-white px-6 py-3 rounded-xl font-bold cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Ana Sayfaya Dön
                </button>
              </div>
            </div>
          )
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Uygulama />
    </BrowserRouter>
  );
}
