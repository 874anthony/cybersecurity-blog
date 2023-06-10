import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

const image = fetch(
  new URL('/public/assets/hacking-hero.jpg', import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(request) {
  try {
    const imageData = await image;
    const { searchParams } = new URL(request.url);

    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 75)
      : '874anthony cybersec blog';

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: 'url(/public/assets/hacking-hero.jpg)',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {/* <img
              src={imageData}
              alt="Vercel"
              height={200}
              style={{ margin: '0 30px' }}
              width={232}
            /> */}
          </div>
          <div
            style={{
              fontSize: 60,
              fontStyle: 'normal',
              letterSpacing: '-0.025em',
              color: 'white',
              marginTop: 30,
              padding: '0 120px',
              lineHeight: 1.4,
              whiteSpace: 'pre-wrap',
            }}
          >
            {title}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
