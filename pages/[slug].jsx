import { MDXRemote } from 'next-mdx-remote';
import { useRouter } from 'next/router';

import { getFileBySlug, getFiles } from '@/lib/mdx';
import { MDXComponents, Layout, ScrollToTop } from '@/components';
import { useEffect } from 'react';

export default function Post({ sourceContent, frontmatter }) {
  const router = useRouter();

  useEffect(() => {
    if (frontmatter.redirect) {
      router.push(frontmatter.redirect);
    }
  });

  return (
    <>
      {frontmatter && !frontmatter.redirect && (
        <Layout metadata={frontmatter}>
          <MDXRemote {...sourceContent} components={MDXComponents} />
          <ScrollToTop />
        </Layout>
      )}
    </>
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
