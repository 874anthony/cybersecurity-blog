import { UI, Icons } from '@/ui';

const github = {
  user: '874anthony',
  repo: 'cibersecurity-blog',
};

export default function OpenPR({ slug }) {
  return (
    <UI.Flex align="center" gap={1}>
      <Icons.IconGithub fill="white" />
      <UI.Text fontWeight={500} ml={1}>
        Do you see a typo? Something is wrong?{' '}
        <UI.Link
          isExternal
          color="secondary.500"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://github.com/${github.user}/${github.repo}/edit/main/data/${slug}.mdx`}
        >
          Make a PR! <Icons.ExternalLinkIcon />
        </UI.Link>
      </UI.Text>
    </UI.Flex>
  );
}
