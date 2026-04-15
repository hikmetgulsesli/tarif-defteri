// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Tarif Detay
//
// Enhanced for US-004: Tarif Detay Görüntüleme ve Silme
// - Accepts recipe data via props
// - Interactive handlers for edit, delete, favorite toggle
// - Delete button triggers SilmeOnayDiyalogu

import { useState } from "react";

export interface Tarif {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  category: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  calories: string;
  ingredients: string[];
  steps: { title: string; description: string }[];
  notes?: string;
  isFavorite: boolean;
}

export interface TarifDetayProps {
  recipe: Tarif;
  onBack: () => void;
  onEdit: (recipeId: string) => void;
  onDelete: (recipeId: string) => void;
  onToggleFavorite: (recipeId: string) => void;
  onStartCooking: (recipeId: string) => void;
}

export function TarifDetay({
  recipe,
  onBack,
  onEdit,
  onDelete,
  onToggleFavorite,
  onStartCooking,
}: TarifDetayProps) {
  const [isFavorite, setIsFavorite] = useState(recipe.isFavorite);

  const handleFavoriteToggle = () => {
    setIsFavorite((prev) => !prev);
    onToggleFavorite(recipe.id);
  };

  return (
    <>
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl">
        <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
          <button
            className="flex items-center gap-2 text-primary hover:opacity-80 transition-all group"
            onClick={onBack}
            aria-label="Geri Dön"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-medium">Geri Dön</span>
          </button>
          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 px-4 py-2 text-primary font-medium hover:bg-surface-container-low rounded-xl transition-all"
              onClick={() => onEdit(recipe.id)}
              aria-label="Düzenle"
            >
              <span className="material-symbols-outlined">edit</span>
              <span>Düzenle</span>
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 text-error font-medium hover:bg-error-container/20 rounded-xl transition-all"
              onClick={() => onDelete(recipe.id)}
              aria-label="Sil"
            >
              <span className="material-symbols-outlined">delete</span>
              <span>Sil</span>
            </button>
          </div>
        </div>
        <div className="bg-surface-container-low h-[2px] w-full"></div>
      </header>
      <main className="max-w-7xl mx-auto px-6 pb-24 pt-8">
        {/* Hero Section */}
        <section className="relative mb-12">
          <div className="relative w-full h-[500px] rounded-[2rem] overflow-hidden shadow-[0_20px_40px_rgba(45,42,38,0.06)]">
            <img
              alt={recipe.imageAlt}
              className="w-full h-full object-cover"
              src={recipe.image}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-[0.15em] rounded-full">
                  {recipe.category}
                </span>
                <h1 className="font-headline text-5xl md:text-6xl font-bold text-white max-w-2xl leading-tight">
                  {recipe.title}
                </h1>
              </div>
              <button
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-error shadow-xl transform hover:scale-105 active:scale-95 transition-all"
                onClick={handleFavoriteToggle}
                aria-label={isFavorite ? "Favorilerden Çıkar" : "Favorilere Ekle"}
              >
                <span
                  className="material-symbols-outlined text-3xl"
                  style={{
                    fontVariationSettings: isFavorite ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  favorite
                </span>
              </button>
            </div>
          </div>
          {/* Stats Overlay (Asymmetric Float) */}
          <div className="absolute -bottom-6 left-12 right-12 hidden md:flex gap-6">
            <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                schedule
              </span>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  HAZIRLIK
                </p>
                <p className="font-bold text-on-surface">{recipe.prepTime}</p>
              </div>
            </div>
            <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                restaurant
              </span>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  PİŞİRME
                </p>
                <p className="font-bold text-on-surface">{recipe.cookTime}</p>
              </div>
            </div>
            <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                group
              </span>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  PORSİYON
                </p>
                <p className="font-bold text-on-surface">{recipe.servings}</p>
              </div>
            </div>
            <div className="flex-1 bg-surface-container-lowest p-6 rounded-2xl shadow-lg flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container text-3xl">
                local_fire_department
              </span>
              <div>
                <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">
                  KALORİ
                </p>
                <p className="font-bold text-on-surface">{recipe.calories}</p>
              </div>
            </div>
          </div>
        </section>
        {/* Main Recipe Content (Editorial Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 lg:mt-24">
          {/* Left Sidebar: Ingredients (Bento Style) */}
          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-surface-container-low rounded-[2rem] p-8">
              <h2 className="font-headline text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">
                  kitchen
                </span>
                Malzemeler
              </h2>
              <ul className="space-y-4">
                {recipe.ingredients.map((ingredient, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <div className="w-6 h-6 border-2 border-outline-variant rounded-md flex items-center justify-center group-hover:border-primary transition-colors">
                      <div className="w-3 h-3 bg-primary rounded-sm opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    </div>
                    <span className="text-on-surface leading-relaxed">
                      {ingredient}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            {recipe.notes && (
              <div className="bg-primary-container/10 rounded-[2rem] p-8 border-2 border-primary-container/20 border-dashed">
                <h3 className="font-headline text-xl font-bold text-primary mb-4">
                  Notlar
                </h3>
                <p className="text-on-surface-variant italic leading-relaxed">
                  "{recipe.notes}"
                </p>
              </div>
            )}
          </aside>
          {/* Right Content: Steps */}
          <article className="lg:col-span-8">
            <h2 className="font-headline text-3xl font-bold mb-10 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">
                menu_book
              </span>
              Hazırlanışı
            </h2>
            <div className="space-y-10 relative">
              {/* Progress Line */}
              <div className="absolute left-6 top-4 bottom-4 w-px bg-surface-container-high hidden md:block"></div>
              {recipe.steps.map((step, index) => {
                const isHighlight = index === 2;
                return (
                  <div
                    key={index}
                    className="flex flex-col md:flex-row gap-8 relative"
                  >
                    <div
                      className={`flex-shrink-0 w-12 h-12 ${
                        isHighlight
                          ? "bg-primary-container ring-4 ring-primary-container/20"
                          : "bg-primary"
                      } text-white rounded-full flex items-center justify-center text-xl font-bold z-10 shadow-lg`}
                    >
                      {index + 1}
                    </div>
                    <div
                      className={`flex-1 p-8 rounded-3xl ${
                        isHighlight
                          ? "bg-white/40 backdrop-blur-md shadow-xl border border-white/50"
                          : "bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
                      }`}
                    >
                      <h4 className="font-bold text-primary mb-2 text-lg">
                        {step.title}
                      </h4>
                      <p
                        className={`leading-relaxed ${
                          isHighlight
                            ? "text-on-surface"
                            : "text-on-surface-variant"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* Action Button */}
            <div className="mt-16 flex justify-center">
              <button
                className="px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-white rounded-full font-bold text-lg shadow-[0_20px_40px_rgba(152,72,0,0.2)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
                onClick={() => onStartCooking(recipe.id)}
                aria-label="Şimdi Pişirmeye Başla"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Şimdi Pişirmeye Başla
              </button>
            </div>
          </article>
        </div>
      </main>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-surface shadow-[0_-4px_12px_rgba(0,0,0,0.05)] md:hidden">
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant p-2"
          href="/"
        >
          <span className="material-symbols-outlined">explore</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
            Keşfet
          </span>
        </a>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant p-2"
          href="/ara"
        >
          <span className="material-symbols-outlined">search</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
            Ara
          </span>
        </a>
        <div className="flex flex-col items-center justify-center bg-primary-container text-white rounded-full p-3 -mt-6 shadow-lg">
          <span className="material-symbols-outlined">add_box</span>
        </div>
        <a
          className="flex flex-col items-center justify-center text-on-surface-variant p-2"
          href="/profil"
        >
          <span className="material-symbols-outlined">person</span>
          <span className="text-[10px] font-bold uppercase tracking-widest mt-1">
            Profil
          </span>
        </a>
      </nav>
      {/* Side Navigation (Web) */}
      <aside className="fixed left-0 top-0 h-full flex flex-col p-4 z-40 hidden md:flex bg-surface/80 backdrop-blur-xl w-64 rounded-r-2xl shadow-[0_20px_40px_rgba(45,42,38,0.06)] border-r border-surface-container-low">
        <div className="mb-12 px-4 py-6">
          <h1 className="font-headline italic text-2xl text-primary mb-1">
            Lezzet Defteri
          </h1>
          <p className="text-xs text-on-surface-variant font-medium">
            Mutfak Günlüğüm
          </p>
        </div>
        <nav className="flex-1 space-y-2">
          <a
            className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1 transition-all rounded-xl group"
            href="/"
          >
            <span className="material-symbols-outlined group-hover:text-primary">
              home
            </span>
            <span className="text-sm font-medium">Ana Sayfa</span>
          </a>
          <a
            className="flex items-center gap-4 px-4 py-3 bg-primary-container/10 text-primary font-bold rounded-xl"
            href="/tarifler"
          >
            <span className="material-symbols-outlined">menu_book</span>
            <span className="text-sm">Defterim</span>
          </a>
          <a
            className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1 transition-all rounded-xl group"
            href="/favoriler"
          >
            <span className="material-symbols-outlined group-hover:text-primary">
              collections_bookmark
            </span>
            <span className="text-sm font-medium">Koleksiyonlar</span>
          </a>
          <a
            className="flex items-center gap-4 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1 transition-all rounded-xl group"
            href="/ayarlar"
          >
            <span className="material-symbols-outlined group-hover:text-primary">
              settings
            </span>
            <span className="text-sm font-medium">Ayarlar</span>
          </a>
        </nav>
        <div className="mt-auto px-4 py-6 border-t border-surface-container-low">
          <a
            className="block w-full py-3 bg-primary text-white rounded-xl font-bold text-sm shadow-md hover:shadow-lg transition-all text-center"
            href="/yeni-tarif"
          >
            Yeni Tarif Paylaş
          </a>
        </div>
      </aside>
    </>
  );
}
