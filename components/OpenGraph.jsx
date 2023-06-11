import Head from 'next/head';

export default function OpenGraph({ metadata = {} }) {
  const SEO = {
    title: metadata.title || 'Learn Cybersecurity related things and more!',
    description:
      metadata.description ||
      'Blog posts about solved CTF challenges, walkthroughs, challenges, web development analysis and much more...',
    slug: metadata.slug || '',
    image: `https://cybersecurity-blog-rust.vercel.app/api/og?title=${this.title}`,
    date: metadata.date || new Date().toISOString(),
  };

  return (
    <Head>
      <title>{SEO.title}</title>
      <meta name="robots" content="follow, index" />
      <meta content={SEO.description} name="description" />

      <meta
        property="og:url"
        content={`https://cybersecurity-blog-rust.vercel.app/${SEO.slug}`}
      />
      <link
        rel="canonical"
        href={`https://cybersecurity-blog-rust.vercel.app/${SEO.slug}`}
      />
      <meta property="og:title" content={SEO.title} />
      <meta property="og:description" content={SEO.description} />
      <meta property="og:image" content={SEO.image} />
      <meta property="og:site_name" content="874anthony Cyber Blog" />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@874anthony" />
      <meta name="twitter:title" content={SEO.title} />
      <meta name="twitter:description" content={SEO.description} />
      <meta name="twitter:image" content={SEO.image} />
      <meta property="article:published_time" content={SEO.date} />
    </Head>
  );
}
