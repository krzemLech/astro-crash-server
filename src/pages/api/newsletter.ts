import type { APIRoute } from "astro";
import { XataClient } from "../../xata";

export const post: APIRoute = async ({ request, redirect }) => {
  const xata = new XataClient({ apiKey: import.meta.env.XATA_API_KEY });
  const data = await request.formData();
  const email = data.get("email") as string;
  if (!email) return redirect("/newsletter/error?msg=Email is required", 307);
  try {
    await xata.db.subscribers.create({ email });
  } catch (err: any) {
    console.error(err);
    const msg = err.errors[0].message;
    return redirect(
      `/newsletter/error?msg=${msg || "Email must be unique"}`,
      307
    );
  }
  return redirect("/newsletter/success", 307);
};
