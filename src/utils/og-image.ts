import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { siteConfig } from '../data/site';

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

interface OgImageInput {
  title: string;
  description: string;
  label: string;
  path: string;
}

let cachedFonts:
  | Promise<
      {
        name: string;
        data: Buffer;
        weight: 400 | 700;
        style: 'normal';
      }[]
    >
  | null = null;

function truncate(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, Math.max(0, maxLength - 1)).trimEnd()}...`;
}

async function loadFonts() {
  const [regular, bold] = await Promise.all([
    readFile(
      join(
        process.cwd(),
        'node_modules',
        '@fontsource',
        'inter',
        'files',
        'inter-latin-400-normal.woff'
      )
    ),
    readFile(
      join(
        process.cwd(),
        'node_modules',
        '@fontsource',
        'inter',
        'files',
        'inter-latin-700-normal.woff'
      )
    ),
  ]);

  return [
    {
      name: 'Inter',
      data: regular,
      weight: 400 as const,
      style: 'normal' as const,
    },
    {
      name: 'Inter',
      data: bold,
      weight: 700 as const,
      style: 'normal' as const,
    },
  ];
}

async function getFonts() {
  if (!cachedFonts) {
    cachedFonts = loadFonts();
  }

  return cachedFonts;
}

export async function renderOgImage(input: OgImageInput) {
  const title = truncate(input.title, 92);
  const description = truncate(input.description, 172);
  const pagePath = truncate(input.path || '/', 56);

  const markup = {
    type: 'div',
    props: {
      style: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#08101f',
        backgroundImage:
          'radial-gradient(circle at 82% 20%, rgba(62, 194, 255, 0.26), transparent 42%), radial-gradient(circle at 18% 80%, rgba(255, 124, 57, 0.24), transparent 44%)',
        border: '1px solid rgba(190, 206, 243, 0.2)',
        borderRadius: '26px',
        color: '#f3f7ff',
        padding: '54px',
        fontFamily: 'Inter',
      },
      children: [
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
            children: [
              {
                type: 'div',
                props: {
                  style: {
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    fontSize: '26px',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                  },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: {
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #ff7c39, #3ec2ff)',
                        },
                      },
                    },
                    siteConfig.shortName,
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: {
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: '#8d9dc3',
                    border: '1px solid rgba(190, 206, 243, 0.2)',
                    borderRadius: '999px',
                    padding: '8px 14px',
                  },
                  children: input.label,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              maxWidth: '1000px',
            },
            children: [
              {
                type: 'h1',
                props: {
                  style: {
                    margin: 0,
                    fontSize: '66px',
                    lineHeight: 1.03,
                    letterSpacing: '-0.03em',
                    fontWeight: 700,
                  },
                  children: title,
                },
              },
              {
                type: 'p',
                props: {
                  style: {
                    margin: 0,
                    fontSize: '29px',
                    lineHeight: 1.35,
                    color: '#b8c4dd',
                    maxWidth: '980px',
                  },
                  children: description,
                },
              },
            ],
          },
        },
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '22px',
              color: '#8d9dc3',
            },
            children: [
              siteConfig.tagline,
              pagePath,
            ],
          },
        },
      ],
    },
  };

  const svg = await satori(markup, {
    width: OG_WIDTH,
    height: OG_HEIGHT,
    fonts: await getFonts(),
  });

  const png = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: OG_WIDTH,
    },
  })
    .render()
    .asPng();

  const body = new Uint8Array(png);

  return new Response(body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
