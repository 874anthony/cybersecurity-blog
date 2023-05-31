import { Fragment } from 'react';
import Head from 'next/head';

import { Icons, UI } from '@/ui';
import { SocialNetworks } from '@/components';

import { getAllFilesMetadata } from '@/lib/mdx';
import { Divider, Tag } from '@chakra-ui/react';

export default function Home({ posts }) {
  return (
    <Fragment>
      <Head>
        <title>👨‍💻 874anthony | Cibersecurity Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UI.Box w="100vw" h="100vh" px="64" py="16" bg="brand.950">
        <UI.Grid gap={8} alignItems="center" templateColumns="2fr 1fr">
          <UI.Flex flexDir="column" gap={2}>
            <UI.Heading
              as="h1"
              letterSpacing={-0.5}
              color="white"
              fontWeight={700}
              fontSize={32}
              mb={2}
            >
              Anthony Acosta (a.k.a. @874anthony)
            </UI.Heading>

            <UI.Text as="h2" color="white" fontWeight={700} fontSize={24}>
              Cibersecurity Student and Software Developer.
            </UI.Text>

            <UI.Text
              lineHeight={1.7}
              color="white"
              fontWeight={400}
              fontSize={16}
            >
              This is my personal blog where I write about my journey in the
              cybersecurity world and some other software development stuff. My
              goal here is to come back to this blog in a few years and see how
              much I&apos;ve grown. I hope others can benefit from this blog as
              well.
            </UI.Text>
          </UI.Flex>

          <UI.Box>
            <UI.Image
              src="/images/hacking-hero.jpg"
              alt="A person with a hoodie and in the dark"
              width="100%"
              borderRadius={50}
            />
          </UI.Box>
        </UI.Grid>

        <SocialNetworks />

        <Divider my={8} />

        <UI.Flex my="24px" direction="column">
          <UI.Heading
            letterSpacing={1}
            as="h3"
            fontSize={24}
            fontWeight={700}
            color="white"
          >
            Lastest posts
          </UI.Heading>

          <UI.Box mt={2} as="span" display="block" py={2}>
            <UI.Text
              fontFamily="body"
              as="h4"
              size="md"
              fontWeight={400}
              fontSize={16}
              my={2}
              color="white"
            >
              HTB Encoding Machine Writeup - Medium
            </UI.Text>

            <UI.Flex align="center" fontSize="sm" color="white">
              <Icons.IconCalendar fill="white" />
              <UI.Text ml={1} color="dark">
                2023-05-31{' '}
                <Tag
                  key="✨ Medium"
                  size="sm"
                  color="white"
                  textAlign="center"
                  background="secondary.600"
                  colorScheme="secondary"
                >
                  ✨ Medium
                </Tag>
              </UI.Text>
            </UI.Flex>
          </UI.Box>
        </UI.Flex>

        {/* <div>
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.slug}`}
            rel="noopener noreferrer"
          >
            <h2>
              {post.title} <span>-&gt;</span>
            </h2>
            <p>{post.date}</p>
          </Link>
        ))}
      </div> */}
      </UI.Box>
    </Fragment>
  );
}

export async function getStaticProps() {
  const posts = await getAllFilesMetadata();

  // console.log(posts);

  return {
    props: { posts },
  };
}