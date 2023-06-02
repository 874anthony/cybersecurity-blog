import fs from 'node:fs';
import path from 'node:path';

import { serialize } from 'next-mdx-remote/serialize';

import matter from 'gray-matter';
import remarkGfm from 'remark-gfm';
import mdxPrism from 'mdx-prism';

const root = process.cwd();

export const getFiles = () => fs.readdirSync(path.join(root, 'data'));

export const getFileBySlug = async (slug) => {
  const mdxSourceFile = fs.readFileSync(
    path.join(root, 'data', `${slug}.mdx`),
    'utf-8'
  );

  const { data: metadata, content } = await matter(mdxSourceFile);

  const sourceContent = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [mdxPrism],
    },
  });

  return {
    sourceContent,
    frontmatter: {
      slug,
      ...metadata,
    },
  };
};

export const getAllFilesMetadata = async () => {
  const files = getFiles();

  return files.reduce((allPosts, postSlug) => {
    const mdxSourceFile = fs.readFileSync(
      path.join(root, 'data', postSlug),
      'utf-8'
    );
    const { data: metadata } = matter(mdxSourceFile);

    const slugWithoutExtension = postSlug.replace('.mdx', '');
    return [{ ...metadata, slug: slugWithoutExtension }, ...allPosts];
  }, []);
};
