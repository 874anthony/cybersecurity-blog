import { UI, Icons } from '@/ui';
import { formatDate } from '@/lib/formatDate';
import Link from 'next/link';
import { OpenPR } from '.';

export default function PostMetadata({ date, tags, slug }) {
  return (
    <UI.Flex direction="column" py={2} gap={3}>
      <UI.Flex gap={4}>
        <UI.Flex alignItems="center" gap={1}>
          <Icons.IconCalendar fill="white" />
          <UI.Text ml={1} fontWeight={500} color="secondary.500">
            {formatDate(date)}
          </UI.Text>
        </UI.Flex>

        <UI.Flex alignItems="center" gap={1}>
          <Icons.IconClock fill="white" />
          <UI.Text fontWeight={500} ml={1}>
            5 min read
          </UI.Text>
        </UI.Flex>

        <UI.Flex alignItems="center" gap={1}>
          {tags.map((tag) => (
            <UI.Tag
              key={tag}
              fontWeight={500}
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
