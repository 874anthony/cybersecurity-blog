import { UI, Icons } from '@/ui';

export default function LinkProfile() {
  return (
    <UI.Flex fontSize={['sm', 'md']} align="center" gap={1}>
      <Icons.IconHackthebox fill="white" />
      <UI.Text fontWeight={500} ml={1}>
        In case you want to contact me, you can find me on my{' '}
        <UI.Link
          isExternal
          color="secondary.500"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/874anthony"
        >
          LinkedIn profile. <Icons.ExternalLinkIcon />
        </UI.Link>
      </UI.Text>
    </UI.Flex>
  );
}
