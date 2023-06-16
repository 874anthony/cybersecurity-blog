import { UI, Icons } from '@/ui';

const github = {
  user: '874anthony',
  repo: 'cibersecurity-blog',
};

export default function HTBProfile() {
  return (
    <UI.Flex fontSize={['sm', 'md']} align="center" gap={1}>
      <Icons.IconHackthebox fill="white" />
      <UI.Text fontWeight={500} ml={1}>
        In case you want to contact me, or see my stats, check out my{' '}
        <UI.Link
          isExternal
          color="secondary.500"
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.hackthebox.com/users/609847"
        >
          HTB profile! <Icons.ExternalLinkIcon />
        </UI.Link>
      </UI.Text>
    </UI.Flex>
  );
}
