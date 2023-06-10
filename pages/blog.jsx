import { useEffect, useRef, useState } from 'react';
import NextLink from 'next/link';

import { UI } from '@/ui';
import { Layout, PostListItem, ScrollToTop } from '@/components';

import { getAllFilesMetadata } from '@/lib/mdx';
import { orderByDate } from '@/lib/orderByDate';
import { formatDate } from '@/lib/formatDate';
import { usePagination } from '@/lib/usePagination';

const metadata = {
  title: 'Lastest posts',
};

export default function Blog({ posts }) {
  const { next, currentPage, currentData, maxPage } = usePagination(posts, 10);
  const [element, setElement] = useState(null);
  const observer = useRef();
  const prevY = useRef(0);

  const currentPosts = currentData();

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        const firstEntry = entries[0];
        const y = firstEntry.boundingClientRect.y;

        if (prevY.current > y) {
          next();
        }

        prevY.current = y;
      },
      { threshold: 0.5 }
    );
  }, [next]);

  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);

  const loadingTemplate = (
    <UI.Text fontSize="xl" fontWeight="bold" p={6} ref={setElement}>
      Loading...
    </UI.Text>
  );

  return (
    <Layout metadata={metadata} type="blog">
      <ScrollToTop />
      {currentPosts &&
        currentPosts.map((post) => (
          <NextLink href={post.slug} key={post.slug}>
            <PostListItem
              title={post.title}
              date={formatDate(post.date)}
              tags={post.tags}
            />
          </NextLink>
        ))}

      {currentPage !== maxPage && loadingTemplate}
    </Layout>
  );
}

export async function getStaticProps() {
  const unorderedPosts = await getAllFilesMetadata();
  const posts = unorderedPosts.sort(orderByDate);

  return {
    props: { posts },
  };
}
