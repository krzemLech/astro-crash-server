import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    image: z.string().optional(),
    author: z.string(),
    categories: z.array(z.string()),
    date: z.string().transform((date) =>
      new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    ),
    featured: z.boolean().default(false),
    description: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};
