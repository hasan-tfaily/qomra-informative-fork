export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) {
    return new Response("Missing image URL", { status: 400 });
  }

  try {
    const res = await fetch(imageUrl);

    if (!res.ok) throw new Error("Failed to fetch image");

    // Create a new response with the image stream
    return new Response(res.body, {
      status: 200,
      headers: new Headers({
        "Content-Type": res.headers.get("Content-Type"),
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=3600",
      }),
    });
  } catch (error) {
    return new Response("Image fetch failed", { status: 500 });
  }
}
