import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * OG image gerada dinamicamente (tipografia + paleta do design system).
 * Placeholder até haver uma fotografia real de evento para usar como capa social.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: 80,
          background: "linear-gradient(160deg, #1C1D15 0%, #0B0C0A 70%)",
          color: "#F5F3EC",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, textTransform: "uppercase", color: "#C9A24B" }}>
          Desde {siteConfig.legalFoundingYear} · {siteConfig.location.region}
        </div>
        <div style={{ fontSize: 64, marginTop: 24, fontWeight: 600, maxWidth: 900, display: "flex" }}>
          Estrutura para momentos inesquecíveis.
        </div>
      </div>
    ),
    { ...size }
  );
}
