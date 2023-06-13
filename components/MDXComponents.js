import { UI } from '@/ui';
import BoxInfo from './BoxInfo';
import CustomLink from './CustomLink';

export const MDXComponents = {
  a: CustomLink,
  h1: (props) => (
    <UI.Heading
      as="h1"
      my={8}
      color="secondary.500"
      fontWeight={900}
      size="lg"
      {...props}
    />
  ),
  h2: (props) => (
    <UI.Heading
      as="h2"
      my={4}
      color="secondary.500"
      fontWeight={700}
      size="lg"
      {...props}
    />
  ),
  h3: (props) => (
    <UI.Heading as="h3" my={4} fontWeight={700} size="md" {...props} />
  ),
  h4: (props) => <UI.Heading as="h4" my={2} size="md" {...props} />,
  h5: (props) => <UI.Heading as="h5" my={2} size="sm" {...props} />,
  h6: (props) => <UI.Heading as="h6" my={2} size="sm" {...props} />,
  p: (props) => <UI.Text fontSize="md" lineHeight={6} my={8} {...props} />,
  table: (props) => (
    <UI.TableContainer borderRadius={4} my={8}>
      <UI.Table
        bg={'#6b21a8'}
        variant="unstyled"
        fontFamily={'body'}
        fontSize={14}
        fontWeight={500}
        color="white"
        style={{ borderCollapse: 'separate', borderSpacing: '0 1em' }}
        {...props}
      />
    </UI.TableContainer>
  ),
  thead: (props) => <UI.Thead py={8} {...props} />,
  tbody: (props) => <UI.Tbody bg={'#6b21a8'} {...props} />,
  th: (props) => <UI.Th color="white" {...props} />,
  tr: (props) => <UI.Tr {...props} />,
  td: (props) => <UI.Td {...props} />,
  blockquote: (props) => (
    <UI.HStack
      as="blockquote"
      bg={'#6b21a8'}
      borderLeft={'5px solid #9f7aea'}
      px={4}
      my={4}
      fontStyle={'italic'}
      fontWeight={700}
      {...props}
    />
  ),
  BoxInfo,
};
