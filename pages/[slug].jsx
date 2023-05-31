import { getFileBySlug, getFiles } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote';

export default function Post({ sourceContent, frontmatter }) {
  return <MDXRemote {...sourceContent} />;
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
