import { ImageResponse } from "next/og";
import { getPost } from "@/lib/mdx";

export const alt = "Blog post by Rahul Maurya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image({ params }: { params: { slug: string } }) {
  let title = "Blog";
  let description = "";
  try {
    const post = getPost(params.slug);
    title = post.title;
    description = post.description;
  } catch {}

  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #1e1b4b 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          fontSize: 18,
          color: "#a5b4fc",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: 3,
          marginBottom: 24,
        }}
      >
        Rahul Maurya · Blog
      </div>

      <div
        style={{
          fontSize: title.length > 40 ? 52 : 64,
          fontWeight: 800,
          color: "white",
          lineHeight: 1.15,
          marginBottom: 28,
          maxWidth: 900,
        }}
      >
        {title}
      </div>

      {description && (
        <div
          style={{
            fontSize: 26,
            color: "#c7d2fe",
            maxWidth: 800,
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      )}

      <div
        style={{
          position: "absolute",
          bottom: 80,
          right: 80,
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "#6366f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24,
          fontWeight: 700,
          color: "white",
        }}
      >
        R
      </div>
    </div>,
    { ...size }
  );
}
