import { z } from "zod";

export const PostSchema = z.object({
  slug: z.string().max(50),
  uuid: z.string().uuid(),
  title: z.string().max(50),
  subtitle: z.string().max(150),
  body: z.string(),
  meta_description: z.string().max(150),
  created: z.string().datetime(),
  modified: z.string().datetime(),
  published: z.string().datetime(),
  is_published: z.boolean(),
  tags: z.array(z.string().max(50)),
});

export type PostResponse = z.infer<typeof PostSchema>;
