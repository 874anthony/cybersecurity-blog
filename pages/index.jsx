import { Fragment } from 'react';
import Link from 'next/link';

import { UI } from '@/ui';
import {
  PostListItem,
  SocialNetworks,
  SectionLinks,
  OpenGraph,
  Footer,
} from '@/components';

import { getAllFilesMetadata } from '@/lib/mdx';
import { formatDate } from '@/lib/formatDate';
import { orderByDate } from '@/lib/orderByDate';

export default function Home({ posts }) {
  return (
    <Fragment>
      <OpenGraph />

      <UI.Box
        w="100%"
        bg="brand.950"
        borderTop="8px solid"
        borderColor="secondary.500"
      >
        <UI.Container maxW="container.lg" pt="8">
          <SectionLinks />

          <UI.Flex
            direction={['column', 'row']}
            justify="space-between"
            align="left"
          >
            <UI.Box width={['100%', '75%']} order={[2, 1]}>
              <UI.Heading
                as="h1"
                letterSpacing={-0.5}
                color="gray.200"
                fontWeight={700}
                fontSize={[28, 32]}
                mt={8}
                mb={4}
              >
                Anthony Acosta (a.k.a. @874anthony)
              </UI.Heading>

              <UI.Heading
                as="h2"
                color="gray.200"
                fontWeight={700}
                fontSize={[20, 24]}
                my={2}
              >
                Cybersecurity Student and Software Developer.
              </UI.Heading>

              <UI.Text
                lineHeight={1.7}
                color="gray.200"
                fontWeight={400}
                fontSize={[14, 16]}
              >
                This is my personal blog where I write about my journey in the
                cybersecurity world and some other software development stuff.
                My goal here is to come back to this blog in a few years and see
                how much I&apos;ve grown. I hope others can benefit from this
                blog as well.
              </UI.Text>
            </UI.Box>

            <UI.Box
              width={['65%', '29%']}
              order={[1, 2]}
              alignSelf={['start', 'center']}
            >
              <UI.Image
                width="100%"
                borderRadius={50}
                src="/assets/hacking-hero.jpg"
                alt="A person with a hoodie and in the dark"
              />
            </UI.Box>
          </UI.Flex>

          <SocialNetworks />

          <UI.Divider my={8} />

          <UI.Flex mt="24px" direction="column">
            <UI.Heading
              letterSpacing={1}
              as="h3"
              fontSize={[20, 24]}
              fontWeight={700}
              color="gray.200"
            >
              Latest posts
            </UI.Heading>

            {posts.map((post) => (
              <Link key={post.slug} href={`/${post.slug}`}>
                <PostListItem
                  title={post.title}
                  date={formatDate(post.date)}
                  tags={post.tags}
                />
              </Link>
            ))}

            <Link style={{ marginTop: '8px' }} href="/blog">
              <UI.Text color="secondary.500">See all posts &rarr;</UI.Text>
            </Link>
          </UI.Flex>
        </UI.Container>
      </UI.Box>

      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const unorderedPosts = await getAllFilesMetadata();
  const posts = unorderedPosts.sort(orderByDate).slice(0, 10);

  return {
    props: { posts },
  };
}
