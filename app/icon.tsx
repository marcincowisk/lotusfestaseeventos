import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon gerado como monograma tipográfico — badge vermelho (cor real da
 * marca) com "L" branco, legível em tamanhos pequenos de aba do navegador.
 * Trocar por um recorte real do símbolo do logo (a flor de lótus) assim que
 * o arquivo vetorial oficial for fornecido.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#E12622",
          color: "#FFFFFF",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
