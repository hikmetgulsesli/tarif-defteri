import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { TarifDuzenle } from "./TarifDuzenle";
import type { Tarif } from "../types/tarif";

const ornekTarif: Tarif = {
  id: "test-id-1",
  ad: "Ev Yapımı Lazanya",
  kategori: "Ana Yemek",
  hazirlikSuresi: 45,
  pisirmeSuresi: 35,
  malzemeler: [
    { miktar: "12 adet", ad: "lazanya yaprağı" },
    { miktar: "500g", ad: "kıyma (orta yağlı)" },
    { miktar: "2 adet", ad: "kuru soğan" },
  ],
  adimlar: [
    { aciklama: "Soğanları küp küp doğrayın ve kıyma ile birlikte zeytinyağında kavurun." },
    { aciklama: "Ayrı bir tencerede tereyağını eritin, unu ekleyip kokusu çıkana kadar kavurun." },
    { aciklama: "Fırın kabına sırasıyla lazanya, kıymalı harç ve beşamel sosu kat kat dizin." },
  ],
  sefNotu: "Üzerine taze fesleğen serpmeyi unutmayın.",
  favori: false,
  olusturulmaTarihi: "2026-04-15T10:00:00.000Z",
};

function renderTarifDuzenle(
  tarif = ornekTarif,
  onKaydet = vi.fn(),
  onIptal = vi.fn()
) {
  return render(
    <BrowserRouter>
      <TarifDuzenle tarif={tarif} onKaydet={onKaydet} onIptal={onIptal} />
    </BrowserRouter>
  );
}

describe("TarifDuzenle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("düzenleme başlığını render eder", () => {
    renderTarifDuzenle();
    expect(screen.getByText("Tarifi Düzenle")).toBeInTheDocument();
  });

  it("mevcut tarif verilerini form alanlarına doldurur", () => {
    renderTarifDuzenle();
    expect(screen.getByLabelText("Tarif adı")).toHaveValue("Ev Yapımı Lazanya");
  });

  it("mevcut hazırlık ve pişirme sürelerini gösterir", () => {
    renderTarifDuzenle();
    expect(screen.getByLabelText("Hazırlık süresi")).toHaveValue("45");
    expect(screen.getByLabelText("Pişirme süresi")).toHaveValue("35");
  });

  it("tarif adı güncellenebilir", async () => {
    const user = userEvent.setup();
    renderTarifDuzenle();
    const input = screen.getByLabelText("Tarif adı");
    await user.clear(input);
    await user.type(input, "İtalyan Lazanya");
    expect(input).toHaveValue("İtalyan Lazanya");
  });

  it("kategori değiştirilebilir", async () => {
    const user = userEvent.setup();
    renderTarifDuzenle();
    const select = screen.getByLabelText("Kategori");
    await user.selectOptions(select, "Hamur İşleri");
    expect(select).toHaveValue("Hamur İşleri");
  });

  it("yeni malzeme eklenebilir", async () => {
    const user = userEvent.setup();
    renderTarifDuzenle();
    await user.click(screen.getByLabelText("Yeni malzeme ekle"));
    // Should now have 4 ingredients (3 original + 1 new)
    const miktarInputs = screen.getAllByLabelText(/Malzeme \d+ miktar/);
    expect(miktarInputs).toHaveLength(4);
  });

  it("malzeme silinebilir", async () => {
    const user = userEvent.setup();
    renderTarifDuzenle();
    // Delete first ingredient - hover to make visible (testing-library doesn't need hover for aria)
    const deleteBtns = screen.getAllByLabelText(/Malzeme \d+ sil/);
    await user.click(deleteBtns[0]);
    const miktarInputs = screen.getAllByLabelText(/Malzeme \d+ miktar/);
    expect(miktarInputs).toHaveLength(2);
  });

  it("yeni adım eklenebilir", async () => {
    const user = userEvent.setup();
    renderTarifDuzenle();
    await user.click(screen.getByLabelText("Yeni adım ekle"));
    const adimInputs = screen.getAllByLabelText(/Adım \d+/);
    expect(adimInputs).toHaveLength(4);
  });

  it("adım silinebilir", async () => {
    const user = userEvent.setup();
    renderTarifDuzenle();
    const deleteBtns = screen.getAllByLabelText(/Adım \d+ sil/);
    await user.click(deleteBtns[0]);
    const adimInputs = screen.getAllByLabelText(/Adım \d+/);
    expect(adimInputs).toHaveLength(2);
  });

  it("boş isimle kaydetme hatası gösterir", async () => {
    const user = userEvent.setup();
    const onKaydet = vi.fn();
    renderTarifDuzenle(undefined, onKaydet);
    const input = screen.getByLabelText("Tarif adı");
    await user.clear(input);
    await user.click(screen.getByText("Değişiklikleri Kaydet"));
    expect(screen.getByText("Tarif adı zorunludur.")).toBeInTheDocument();
    expect(onKaydet).not.toHaveBeenCalled();
  });

  it("geçerli güncelleme ile onKaydet çağırır", async () => {
    const user = userEvent.setup();
    const onKaydet = vi.fn();
    renderTarifDuzenle(undefined, onKaydet);

    const input = screen.getByLabelText("Tarif adı");
    await user.clear(input);
    await user.type(input, "İtalyan Lazanya");

    await user.click(screen.getByText("Değişiklikleri Kaydet"));

    expect(onKaydet).toHaveBeenCalledWith(
      "test-id-1",
      expect.objectContaining({
        ad: "İtalyan Lazanya",
      })
    );
  });

  it("İptal butonu geri döner", async () => {
    const user = userEvent.setup();
    const onIptal = vi.fn();
    renderTarifDuzenle(undefined, undefined, onIptal);
    const iptalButtons = screen.getAllByText("İptal");
    await user.click(iptalButtons[0]);
    expect(onIptal).toHaveBeenCalled();
  });

  it("geri navigasyon çalışır", async () => {
    const user = userEvent.setup();
    const onIptal = vi.fn();
    renderTarifDuzenle(undefined, undefined, onIptal);
    const backLink = screen.getByText("Defterim / Tariflerim");
    await user.click(backLink);
    expect(onIptal).toHaveBeenCalled();
  });
});
