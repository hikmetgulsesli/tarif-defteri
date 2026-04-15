export interface Malzeme {
  miktar: string;
  ad: string;
}

export interface Adim {
  aciklama: string;
}

export interface Tarif {
  id: string;
  ad: string;
  kategori: string;
  hazirlikSuresi: number;
  pisirmeSuresi?: number;
  malzemeler: Malzeme[];
  adimlar: Adim[];
  sefNotu: string;
  gorselUrl?: string;
  favori: boolean;
  olusturulmaTarihi: string;
}

export type Kategori =
  | "Ana Yemek"
  | "Çorbalar"
  | "Tatlılar"
  | "Zeytinyağlılar"
  | "Hamur İşleri";

export const KATEGORILER: Kategori[] = [
  "Ana Yemek",
  "Çorbalar",
  "Tatlılar",
  "Zeytinyağlılar",
  "Hamur İşleri",
];
