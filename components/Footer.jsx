import styled from '@emotion/styled';
import { UI, Icons } from '@/ui';

const StyledFooter = styled.footer`
  background-color: var(--chakra-colors-brand-950);
  color: var(--chakra-colors-gray-200);
  position: relative;
  overflow: visible;
  z-index: 2;
  padding: 2rem 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <UI.Container maxW="container.2xl">
        <UI.Flex
          direction="column"
          justify="space-between"
          align="center"
          textAlign="center"
          fontFamily="body"
          fontSize="sm"
          fontWeight="500"
        >
          <UI.Text>
            &copy; {new Date().getFullYear()} Anthony Acosta | Based on{' '}
            <UI.Link
              href="https://carlosazaustre.es/"
              target="_blank"
              rel="noopener noreferrer"
              color="secondary.500"
              fontWeight="700"
              _hover={{ color: 'secondary.600' }}
            >
              Carlos Azaustre
              <Icons.ExternalLinkIcon ml={1} />
            </UI.Link>{' '}
            | Made with 🖥️ and 💜
          </UI.Text>
        </UI.Flex>
      </UI.Container>
    </StyledFooter>
  );
}
