import { type APIRoute } from "astro";

export const GET: APIRoute = ({ params, cookies }) => {
  const { locale } = params;

  if (locale !== "en" && locale !== "es") {
    return new Response(
      JSON.stringify({
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ error: "Invalid locale" }),
      })
    );
  }

  cookies.set("locale", locale, {
    path: "/",
  });

  return new Response(
    JSON.stringify({
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  );
};
