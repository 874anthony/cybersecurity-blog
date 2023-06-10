import { UI } from '@/ui';

import { PostMetadata, Footer, SectionLinks } from '.';

export default function Layout({ children, metadata = {}, type = 'post' }) {
  const isPost = type === 'post';

  return (
    <UI.Box
      as="section"
      bg="brand.950"
      borderTop="8px solid"
      borderColor="secondary.500"
      color="gray.200"
      minHeight="100vh"
    >
      <UI.Container maxW="container.lg" pt="8">
        <SectionLinks />

        {isPost ? (
          <UI.Flex direction="column">
            <UI.Heading
              as="h1"
              fontSize={36}
              fontWeight={700}
              mb={4}
              letterSpacing={1}
            >
              {metadata.title}
            </UI.Heading>

            <PostMetadata {...metadata} />
          </UI.Flex>
        ) : (
          <UI.Heading as="h2" my={4} size="xl">
            {metadata.title}
          </UI.Heading>
        )}

        {children}
      </UI.Container>

      <Footer />
    </UI.Box>
  );
}
