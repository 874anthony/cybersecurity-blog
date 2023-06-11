import NextImage from 'next/image';
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const image = fetch(
  new URL('/public/assets/hacking-hero.jpg', import.meta.url)
).then((res) => res.arrayBuffer());

const font = fetch(
  new URL('/public/assets/poppins.woff', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(request) {
  try {
    const imageData = await image;
    const fontData = await font;

    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 75)
      : 'Learn Cybersecurity related things and more!';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage:
              'url(https://cybersecurity-blog-rust.vercel.app/assets/og-background.jpg)',
            opacity: 0.95,
            height: '100%',
            width: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            borderBottom: '8px solid',
            borderColor: '#3b0764',
          }}
        >
          <img
            src={imageData}
            style={{
              title: 'A person with a hoodie and in the dark',
              width: '400px',
              height: '400px',
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />

          <div
            style={{
              fontSize: 64,
              fontFamily: 'Poppins',
              fontWeight: 900,
              fontStyle: 'normal',
              letterSpacing: '-1px',
              color: 'white',
              marginLeft: '48px',
              lineHeight: 1.1,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1000,
        height: 500,
        fonts: [
          {
            name: 'Poppins',
            data: fontData,
            format: 'woff',
          },
        ],
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
