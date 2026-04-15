import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { YeniTarifEkle } from "./YeniTarifEkle";

function renderYeniTarifEkle(
  onKaydet = vi.fn(),
  onIptal = vi.fn()
) {
  return render(
    <BrowserRouter>
      <YeniTarifEkle onKaydet={onKaydet} onIptal={onIptal} />
    </BrowserRouter>
  );
}

describe("YeniTarifEkle", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("form başlığını render eder", () => {
    renderYeniTarifEkle();
    expect(screen.getByText("Yeni Tarif Oluştur")).toBeInTheDocument();
  });

  it("tüm form alanlarını render eder", () => {
    renderYeniTarifEkle();
    expect(screen.getByLabelText("Tarif adı")).toBeInTheDocument();
    expect(screen.getByLabelText("Kategori seçin")).toBeInTheDocument();
    expect(screen.getByLabelText("Hazırlık süresi")).toBeInTheDocument();
    expect(screen.getByText("Malzemeler")).toBeInTheDocument();
    expect(screen.getByText("Hazırlanışı")).toBeInTheDocument();
    expect(screen.getByText("Şefin Notu")).toBeInTheDocument();
    expect(screen.getByText("Tarifi Kaydet")).toBeInTheDocument();
    expect(screen.getByText("İptal")).toBeInTheDocument();
  });

  it("varsayılan 2 malzeme satırı ile başlar", () => {
    renderYeniTarifEkle();
    const miktarInputs = screen.getAllByLabelText(/Malzeme \d+ miktar/);
    const adInputs = screen.getAllByLabelText(/Malzeme \d+ adı/);
    expect(miktarInputs).toHaveLength(2);
    expect(adInputs).toHaveLength(2);
  });

  it("varsayılan 2 adım alanı ile başlar", () => {
    renderYeniTarifEkle();
    // Only textareas with aria-label matching "Adım X" (not "Adım X sil")
    const adimTextareas = screen.getAllByLabelText(/^Adım \d+$/);
    expect(adimTextareas).toHaveLength(2);
  });

  it("tarif adı girilebilir", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    const input = screen.getByLabelText("Tarif adı");
    await user.type(input, "Mercimek Çorbası");
    expect(input).toHaveValue("Mercimek Çorbası");
  });

  it("kategori seçilebilir", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    const select = screen.getByLabelText("Kategori seçin");
    await user.selectOptions(select, "Çorbalar");
    expect(select).toHaveValue("Çorbalar");
  });

  it("hazırlık süresi girilebilir", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    const input = screen.getByLabelText("Hazırlık süresi");
    await user.type(input, "30");
    // Number input returns numeric value
    expect(input).toHaveValue(30);
  });

  it("yeni malzeme satırı eklenebilir", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    const ekleBtn = screen.getByLabelText("Yeni malzeme satırı ekle");
    await user.click(ekleBtn);
    const miktarInputs = screen.getAllByLabelText(/Malzeme \d+ miktar/);
    expect(miktarInputs).toHaveLength(3);
  });

  it("malzeme silinebilir (en az 1 kalır)", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    // Add a third ingredient first
    await user.click(screen.getByLabelText("Yeni malzeme satırı ekle"));
    expect(screen.getAllByLabelText(/Malzeme \d+ miktar/)).toHaveLength(3);
    // Delete the first one
    const deleteBtns = screen.getAllByLabelText(/Malzeme \d+ sil/);
    await user.click(deleteBtns[0]);
    expect(screen.getAllByLabelText(/Malzeme \d+ miktar/)).toHaveLength(2);
  });

  it("yeni adım eklenebilir", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    const ekleBtn = screen.getByLabelText("Yeni adım ekle");
    await user.click(ekleBtn);
    const adimTextareas = screen.getAllByLabelText(/^Adım \d+$/);
    expect(adimTextareas).toHaveLength(3);
  });

  it("adım silinebilir (en az 1 kalır)", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    await user.click(screen.getByLabelText("Yeni adım ekle"));
    expect(screen.getAllByLabelText(/^Adım \d+$/)).toHaveLength(3);
    const deleteBtns = screen.getAllByLabelText(/^Adım \d+ sil$/);
    await user.click(deleteBtns[0]);
    expect(screen.getAllByLabelText(/^Adım \d+$/)).toHaveLength(2);
  });

  it("boş form gönderilirse hata gösterir", async () => {
    const user = userEvent.setup();
    const onKaydet = vi.fn();
    renderYeniTarifEkle(onKaydet);
    await user.click(screen.getByText("Tarifi Kaydet"));
    expect(screen.getByText("Tarif adı zorunludur.")).toBeInTheDocument();
    expect(onKaydet).not.toHaveBeenCalled();
  });

  it("sadece ad ile gönderilirse hazırlık süresi hatası gösterir", async () => {
    const user = userEvent.setup();
    const onKaydet = vi.fn();
    renderYeniTarifEkle(onKaydet);
    await user.type(screen.getByLabelText("Tarif adı"), "Test Tarif");
    await user.click(screen.getByText("Tarifi Kaydet"));
    expect(screen.getByText("Hazırlık süresi geçerli bir sayı olmalıdır.")).toBeInTheDocument();
    expect(onKaydet).not.toHaveBeenCalled();
  });

  it("geçerli verilerle form gönderir", async () => {
    const user = userEvent.setup();
    const onKaydet = vi.fn();
    renderYeniTarifEkle(onKaydet);

    await user.type(screen.getByLabelText("Tarif adı"), "Mercimek Çorbası");
    await user.selectOptions(screen.getByLabelText("Kategori seçin"), "Çorbalar");
    await user.type(screen.getByLabelText("Hazırlık süresi"), "30");

    // Fill first ingredient
    const miktarInputs = screen.getAllByLabelText(/Malzeme \d+ miktar/);
    const adInputs = screen.getAllByLabelText(/Malzeme \d+ adı/);
    await user.type(miktarInputs[0], "1 su bardağı");
    await user.type(adInputs[0], "Kırmızı mercimek");

    // Fill first step
    const adimTextareas = screen.getAllByLabelText(/^Adım \d+$/);
    await user.type(adimTextareas[0], "Mercimekleri yıkayıp tencereye alın.");

    await user.click(screen.getByText("Tarifi Kaydet"));

    expect(onKaydet).toHaveBeenCalledWith(
      expect.objectContaining({
        ad: "Mercimek Çorbası",
        kategori: "Çorbalar",
        hazirlikSuresi: 30,
        malzemeler: expect.arrayContaining([
          expect.objectContaining({ miktar: "1 su bardağı", ad: "Kırmızı mercimek" }),
        ]),
        adimlar: expect.arrayContaining([
          expect.objectContaining({ aciklama: "Mercimekleri yıkayıp tencereye alın." }),
        ]),
      })
    );
  });

  it("İptal butonu onIptal çağırır", async () => {
    const user = userEvent.setup();
    const onIptal = vi.fn();
    renderYeniTarifEkle(vi.fn(), onIptal);
    const iptalButtons = screen.getAllByText("İptal");
    await user.click(iptalButtons[0]);
    expect(onIptal).toHaveBeenCalled();
  });

  it("şef notu girilebilir", async () => {
    const user = userEvent.setup();
    renderYeniTarifEkle();
    const textarea = screen.getByLabelText("Şefin notu");
    await user.type(textarea, "Limondan vazgeçmeyin!");
    expect(textarea).toHaveValue("Limondan vazgeçmeyin!");
  });
});
