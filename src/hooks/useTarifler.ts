import { useState, useEffect, useCallback } from "react";
import type { Tarif } from "../types/tarif";

const STORAGE_KEY = "lezzet-defteri-tarifler";

function loadTarifler(): Tarif[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveTarifler(tarifler: Tarif[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tarifler));
}

export function useTarifler() {
  const [tarifler, setTarifler] = useState<Tarif[]>(() => loadTarifler());

  useEffect(() => {
    saveTarifler(tarifler);
  }, [tarifler]);

  const tarifEkle = useCallback((tarif: Omit<Tarif, "id" | "favori" | "olusturulmaTarihi">) => {
    const yeniTarif: Tarif = {
      ...tarif,
      id: crypto.randomUUID(),
      favori: false,
      olusturulmaTarihi: new Date().toISOString(),
    };
    setTarifler((prev) => [...prev, yeniTarif]);
    return yeniTarif;
  }, []);

  const tarifGuncelle = useCallback((id: string, guncelleme: Partial<Tarif>) => {
    setTarifler((prev) =>
      prev.map((t) => (t.id === id ? { ...t, ...guncelleme } : t))
    );
  }, []);

  const tarifSil = useCallback((id: string) => {
    setTarifler((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const favoriToggle = useCallback((id: string) => {
    setTarifler((prev) =>
      prev.map((t) => (t.id === id ? { ...t, favori: !t.favori } : t))
    );
  }, []);

  const tarifGetir = useCallback(
    (id: string) => tarifler.find((t) => t.id === id) ?? null,
    [tarifler]
  );

  return {
    tarifler,
    tarifEkle,
    tarifGuncelle,
    tarifSil,
    favoriToggle,
    tarifGetir,
  };
}
