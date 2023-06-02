import { UI } from '@/ui';

export default function BoxInfo({ imageURL, alt, description }) {
  return (
    <UI.Box>
      <UI.Heading
        as="h1"
        my={6}
        color="secondary.500"
        fontWeight={700}
        size="lg"
      >
        Box Overview
      </UI.Heading>

      <UI.Flex gap={6} align="center" direction="column">
        <UI.Image borderRadius={8} src={imageURL} alt={alt} />

        <UI.Text fontSize={16} fontWeight={500} mr={2}>
          {description}
        </UI.Text>
      </UI.Flex>
    </UI.Box>
  );
}
