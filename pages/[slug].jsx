import { MDXRemote } from 'next-mdx-remote';

import { getFileBySlug, getFiles } from '@/lib/mdx';
import { MDXComponents, Layout, ScrollToTop } from '@/components';

export default function Post({ sourceContent, frontmatter }) {
  return (
    <Layout metadata={frontmatter}>
      <MDXRemote {...sourceContent} components={MDXComponents} />
      <ScrollToTop />
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const { sourceContent, frontmatter } = await getFileBySlug(params.slug);

  // Redirect to 404 if private is set to true
  if (frontmatter.private) {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }

  return {
    props: {
      sourceContent,
      frontmatter,
    },
  };
}

export async function getStaticPaths() {
  const posts = getFiles();
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
