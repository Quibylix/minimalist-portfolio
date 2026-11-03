import { type APIRoute } from "astro";

export const GET: APIRoute = ({ params, cookies }) => {
  const { locale } = params;

  if (locale !== "en" && locale !== "es") {
    return new Response(JSON.stringify({ error: "Invalid locale" }), {
      status: 400,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  cookies.set("locale", locale, {
    path: "/",
  });

  return new Response(JSON.stringify({ message: "Locale updated" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
