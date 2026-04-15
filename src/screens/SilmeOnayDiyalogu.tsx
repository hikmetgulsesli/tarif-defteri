// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Silme Onay Diyaloğu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SilmeOnayDiyaloguProps {}

export function SilmeOnayDiyalogu(props: SilmeOnayDiyaloguProps) {
  return (
    <>
      {/*  Background Content: Simulating a Recipe Detail Page  */}
      <div className="max-w-4xl mx-auto px-6 py-12 opacity-40 select-none pointer-events-none">
      <div className="mb-8">
      <h1 className="text-5xl font-headline font-bold text-primary mb-4 leading-tight">Geleneksel Anne Köftesi</h1>
      <div className="flex items-center gap-4 text-on-surface-variant font-medium">
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">schedule</span> 45 Dakika</span>
      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">restaurant</span> 4 Kişilik</span>
      </div>
      </div>
      <div className="relative w-full h-96 mb-12 rounded-xl overflow-hidden shadow-lg">
      <img alt="Anne Köftesi" className="w-full h-full object-cover" data-alt="Close-up of golden brown traditional Turkish meatballs served on a rustic ceramic plate with fresh parsley and a side of roasted peppers in warm kitchen lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWN-Bni3RFVSjVLwq477tECnQu-9VWs5Fp4ComoJOioc1XgYSXXzpfjQC21O8665DyAN2X_6woSZBEHkc-umoFhHJU8S3G3KeRK-XQcEGmD97Z7w1yS6I8kez_ZNB3Y0JWH0LRNSeXNssksSG8-W_dLf4f4TQtCFlvDUTUhvKWQSAO98NJvrniq6WO-ZhVa2mCuYp3g1TIdm67oCEoLEX9gqd4uOwWqJxqSOO6a1T4sdbaRnIWrzvu7tZUkiM3L0nVB6cO04LUzYnv"/ />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="md:col-span-1 space-y-6">
      <h2 className="text-2xl font-headline font-bold text-on-surface border-b border-outline-variant pb-2">Malzemeler</h2>
      <ul className="space-y-3">
      <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-container"></div> 500g Dana Kıyma</li>
      <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-container"></div> 1 Adet Kuru Soğan</li>
      <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary-container"></div> 2 Dilim Bayat Ekmek</li>
      </ul>
      </div>
      <div className="md:col-span-2 space-y-6">
      <h2 className="text-2xl font-headline font-bold text-on-surface border-b border-outline-variant pb-2">Hazırlanışı</h2>
      <p className="leading-relaxed">Soğanları rendeleyip kıyma ile geniş bir kaba alın. Ekmek içlerini ıslatıp suyunu sıkarak ekleyin...</p>
      </div>
      </div>
      </div>
      {/*  Modal Backdrop  */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1e1b17]/60 backdrop-blur-sm">
      {/*  Modal Container  */}
      <div className="w-full max-w-md bg-surface rounded-[2rem] editorial-shadow overflow-hidden transform scale-100 transition-all">
      {/*  Modal Content Inner  */}
      <div className="p-8">
      {/*  Visual Icon Anchor  */}
      <div className="w-16 h-16 bg-error-container text-on-error-container rounded-2xl flex items-center justify-center mb-6 mx-auto">
      <span className="material-symbols-outlined text-4xl" data-icon="delete_forever">delete_forever</span>
      </div>
      {/*  Text Header  */}
      <div className="text-center space-y-3 mb-8">
      <h3 className="text-3xl font-headline font-bold text-on-surface tracking-tight">Tarifi Sil?</h3>
      <p className="text-on-surface-variant font-medium leading-relaxed">
                              Bu tarifi silmek istediğinizden emin misiniz? Bu işlem geri alınamaz.
                          </p>
      </div>
      {/*  Action Buttons  */}
      <div className="flex flex-col gap-3">
      {/*  Primary Delete Action  */}
      <button className="w-full py-4 px-6 bg-error text-on-error rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-on-error-container transition-colors active:scale-[0.98] transition-transform">
      <span className="material-symbols-outlined" data-icon="delete">delete</span>
                              Sil
                          </button>
      {/*  Secondary Cancel Action  */}
      <button className="w-full py-4 px-6 bg-surface-container-high text-on-surface-variant rounded-2xl font-bold text-lg hover:bg-surface-container-highest transition-colors active:scale-[0.98] transition-transform">
                              İptal
                          </button>
      </div>
      </div>
      {/*  Subtle Tonal Footer/Edge Decor  */}
      <div className="h-2 w-full bg-error/10"></div>
      </div>
      </div>
      {/*  The Shell suppressing BottomNavBar as per transactional rule  */}
      {/*  But keeping TopNavBar visual for context if needed, hidden for modal focus as per 'Relevance Check'  */}
      {/*  Manual Material Symbols Injection  */}
      <style>
              .material-symbols-outlined {
                  font-family: 'Material Symbols Outlined';
                  font-weight: normal;
                  font-style: normal;
                  font-size: 24px;
                  line-height: 1;
                  letter-spacing: normal;
                  text-transform: none;
                  display: inline-block;
                  white-space: nowrap;
                  word-wrap: normal;
                  direction: ltr;
                  -webkit-font-feature-settings: 'liga';
                  -webkit-font-smoothing: antialiased;
              }
          </style>
    </>
  );
}
