import { UI, Icons } from '@/ui';

export default function PostListItem({ title, date, tags }) {
  return (
    <UI.Box mt={2} as="span" display="block" py={2}>
      <UI.Text
        fontFamily="body"
        as="h4"
        size="md"
        fontWeight={500}
        fontSize={16}
        my={2}
        color="gray.200"
      >
        {title}
      </UI.Text>

      <UI.Flex align="center" fontSize="sm" color="gray.200">
        <Icons.IconCalendar fill="white" />
        <UI.Text ml={1} fontWeight={500} color="secondary.500">
          {date}{' '}
          {tags.map((tag) => (
            <UI.Tag
              key={tag}
              size="sm"
              color="white"
              textAlign="center"
              background="slateblue.600"
              colorScheme="slateblue"
              ml={1}
            >
              {tag}
            </UI.Tag>
          ))}
        </UI.Text>
      </UI.Flex>
    </UI.Box>
  );
}
