import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { entrySlug } from '@/lib/utils';
import type { Lang } from '@/i18n/strings';
import fs from 'node:fs';
import path from 'node:path';

export async function getStaticPaths() {
  const ptArticles = await getCollection('pt-articles');
  const enArticles = await getCollection('en-articles');

  return [
    ...ptArticles.map((a) => ({
      params: { lang: 'pt', slug: entrySlug(a.id) },
      props: {
        title: a.data.title,
        description: a.data.description,
        category: a.data.category,
        lang: 'pt' as Lang,
      },
    })),
    ...enArticles.map((a) => ({
      params: { lang: 'en', slug: entrySlug(a.id) },
      props: {
        title: a.data.title,
        description: a.data.description,
        category: a.data.category,
        lang: 'en' as Lang,
      },
    })),
  ];
}

let _fontData: Buffer | null = null;

function getFont(): Buffer {
  if (_fontData) return _fontData;
  const fontPath = path.join(
    process.cwd(),
    'node_modules/@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff'
  );
  _fontData = fs.readFileSync(fontPath);
  return _fontData;
}

const CATEGORY_COLORS: Record<string, string> = {
  backend: '#4ade80',
  databases: '#60a5fa',
  platform: '#a78bfa',
  observability: '#f59e0b',
  data: '#34d399',
  career: '#f472b6',
  ai: '#818cf8',
};

export const GET: APIRoute = async ({ props }) => {
  const { title, description, category } = props as {
    title: string;
    description: string;
    category: string;
    lang: Lang;
  };

  const fontData = getFont();
  const accent = CATEGORY_COLORS[category] ?? '#4ade80';

  const shortTitle = title.length > 52 ? title.slice(0, 49) + '…' : title;
  const shortDesc = description.length > 110 ? description.slice(0, 107) + '…' : description;

  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          background: '#0d1117',
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          padding: '72px 80px',
          fontFamily: 'IBM Plex Sans',
          position: 'relative',
        },
        children: [
          // top accent line
          {
            type: 'div',
            props: {
              style: {
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                height: '4px',
                background: accent,
              },
              children: '',
            },
          },
          // category badge
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '36px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: {
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: accent,
                    },
                    children: '',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: {
                      color: accent,
                      fontSize: '14px',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    },
                    children: category,
                  },
                },
              ],
            },
          },
          // title
          {
            type: 'div',
            props: {
              style: {
                color: '#f0f6fc',
                fontSize: '52px',
                fontWeight: '600',
                lineHeight: '1.15',
                letterSpacing: '-0.02em',
                flex: '1',
              },
              children: shortTitle,
            },
          },
          // description
          {
            type: 'div',
            props: {
              style: {
                color: '#8b949e',
                fontSize: '22px',
                lineHeight: '1.5',
                marginBottom: '48px',
              },
              children: shortDesc,
            },
          },
          // footer
          {
            type: 'div',
            props: {
              style: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid #21262d',
                paddingTop: '24px',
              },
              children: [
                {
                  type: 'div',
                  props: {
                    style: { color: '#8b949e', fontSize: '18px' },
                    children: 'Victor Alencastro',
                  },
                },
                {
                  type: 'div',
                  props: {
                    style: { color: accent, fontSize: '16px', letterSpacing: '0.04em' },
                    children: 'victorcode.dev',
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'IBM Plex Sans',
          data: fontData,
          weight: 400,
          style: 'normal',
        },
      ],
    }
  );

  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: 1200 },
  })
    .render()
    .asPng();

  return new Response(png, {
    headers: { 'Content-Type': 'image/png' },
  });
};
