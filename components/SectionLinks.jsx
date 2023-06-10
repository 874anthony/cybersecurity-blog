import NextLink from 'next/link';
import styled from '@emotion/styled';
import { UI } from '@/ui';

const sections = [
  { name: '🏠', url: '/' },
  { name: 'Articles', url: '/blog' },
];

const SectionLinkItem = styled(NextLink)`
  font-family: var(--chakra-fonts-body);
  font-size: var(--chakra-fontSizes-md);
  font-weight: 500;
  text-decoration: none;
  color: var(--chakra-colors-white);
  padding-right: var(--chakra-space-8);
  border-radius: var(--chakra-radii-2xl);
  transition: color var(--chakra-transition-duration-slow)
    var(--chakra-transition-easing-ease-in);

  &:hover {
    text-decoration: underline;
    color: var(--chakra-colors-secondary-500);
  }
`;

export default function SectionLinks() {
  return (
    <nav>
      <UI.Flex alignItems="center" direction="row" wrap="wrap" py="8">
        {sections.map(({ name, url }) => (
          <SectionLinkItem key={name} href={url} passHref>
            {name}
          </SectionLinkItem>
        ))}
      </UI.Flex>
    </nav>
  );
}
