import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      descripcion: z.string(),
      portada: image(),
      fecha: z.coerce.date(),
      autora: z.string().default('Aída Huertas'),
      fotos: z.string().optional(),
      // URL que tenía en Wix; se redirige en public/_redirects
      url_original: z.string(),
    }),
});

export const collections = { blog };
