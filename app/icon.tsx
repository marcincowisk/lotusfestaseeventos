import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon gerado como monograma tipográfico — evita depender de um arquivo de
 * logo real (não disponível/confirmado) até que a identidade visual definitiva
 * seja fornecida pelo cliente.
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
          background: "#0B0C0A",
          color: "#C9A24B",
          fontSize: 20,
          fontWeight: 600,
        }}
      >
        L
      </div>
    ),
    { ...size }
  );
}
