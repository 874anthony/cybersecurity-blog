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
