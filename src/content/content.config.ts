import { defineCollection, z } from "astro:content";

export const collections = {
  pages: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      text: z.string(),
      imageUrl: z.string(),
      propertyUrl: z.string(),

      seo: z.object({
        title: z.string(),
        description: z.string(),
        ogImage: z.string(),
      }),
    }),
  }),
};