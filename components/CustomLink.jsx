import NextLink from 'next/link';
import styled from '@emotion/styled';
import { UI, Icons } from '@/ui';

const StyledLink = styled(NextLink)`
  color: var(--chakra-colors-brand-900);
`;

export default function CustomLink(props) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <StyledLink href={href} {...props} />;
  }

  return (
    <UI.Link
      isExternal
      color="secondary.500"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {props.children}{' '}
      {typeof props.children !== 'object' && (
        <Icons.ExternalLinkIcon mx="2px" />
      )}
    </UI.Link>
  );
}
