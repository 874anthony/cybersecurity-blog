import { MDXRemote } from 'next-mdx-remote';

import { UI } from '@/ui';
import { getFileBySlug, getFiles } from '@/lib/mdx';
import { MDXComponents, PostMetadata } from '@/components';

export default function Post({ sourceContent, frontmatter }) {
  return (
    <UI.Box
      as="section"
      bg="brand.950"
      borderTop="8px solid"
      borderColor="secondary.500"
      color="gray.200"
      height={{ base: '100%', md: '100vh' }}
    >
      <UI.Container maxW="container.md" pt={24}>
        <UI.Flex direction="column" mb={8}>
          <UI.Heading
            as="h1"
            fontSize={36}
            fontWeight={700}
            mb={4}
            letterSpacing={1}
          >
            {frontmatter.title}
          </UI.Heading>

          <PostMetadata {...frontmatter} />
        </UI.Flex>

        <MDXRemote {...sourceContent} components={MDXComponents} />
      </UI.Container>
    </UI.Box>
  );
}

export async function getStaticProps({ params }) {
  const { sourceContent, frontmatter } = await getFileBySlug(params.slug);

  return {
    props: {
      sourceContent,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx/, ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
