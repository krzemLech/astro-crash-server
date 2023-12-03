import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import markdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new markdownIt();

export async function GET(context: APIContext) {
  const posts = await getCollection("posts");
  return rss({
    title: "Rhythm Nation",
    description: "A community of music producers and enthusiasts",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description,
      link: `/blog/${post.slug}`,
      constent: parser.render(sanitizeHtml(post.body)),
      image: post.data.image,
    })),
  });
}
