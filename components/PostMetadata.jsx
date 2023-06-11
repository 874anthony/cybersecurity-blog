import { UI, Icons } from '@/ui';
import { formatDate } from '@/lib/formatDate';
import { OpenPR } from '.';

export default function PostMetadata({ date, tags, slug, readingTime }) {
  return (
    <UI.Flex direction="column" py={2} gap={3}>
      <UI.Flex
        gap={4}
        direction={['column', 'column', 'row']}
        align={['left', 'left', 'center']}
        justify="flex-start"
        color="white"
        fontSize={['sm', 'md']}
        fontWeight="500"
        fontFamily="heading"
      >
        <UI.Flex alignItems="center" gap={1}>
          <Icons.IconCalendar fill="white" />
          <UI.Text ml={1} color="secondary.500">
            {formatDate(date)}
          </UI.Text>
        </UI.Flex>

        <UI.Flex alignItems="center" gap={1}>
          <Icons.IconClock fill="white" />
          <UI.Text ml={1}>{Math.round(readingTime.minutes)} min read</UI.Text>
        </UI.Flex>

        <UI.Flex alignItems="center" gap={1}>
          {tags.map((tag) => (
            <UI.Tag
              key={tag}
              size="sm"
              color="white"
              textAlign="center"
              background="slateblue.600"
              colorScheme="slateblue"
            >
              {tag}
            </UI.Tag>
          ))}
        </UI.Flex>
      </UI.Flex>

      <OpenPR slug={slug} />
    </UI.Flex>
  );
}
