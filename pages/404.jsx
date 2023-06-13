import NextLink from 'next/link';
import NextImage from 'next/image';
import { UI } from '@/ui';

import { Layout } from '@/components';

const metadata = {
  title: '404',
};

export default function NotFound() {
  return (
    <Layout type="blog" metadata={metadata}>
      <NextImage
        width={500}
        height={500}
        // fill="responsive"
        src="/assets/not-found.gif"
        alt="404 Not Found"
      />
      <UI.Heading as="h4" fontSize={24} p={4}>
        The page you searched for was not found.
        <br />
        <br />
        You still have a chance to find what you are looking for:{' '}
        <NextLink
          style={{
            color: '#a855f7',
            textDecoration: 'underline',
            textUnderlineOffset: '6px',
          }}
          href="/blog"
        >
          👉 look at my blog.
        </NextLink>
      </UI.Heading>
    </Layout>
  );
}
