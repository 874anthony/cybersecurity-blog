import { UI } from '@/ui';

export const MDXComponents = {
  h1: (props) => <UI.Heading as="h1" my={8} size="lg" {...props} />,
  h2: (props) => <UI.Heading as="h2" my={4} size="lg" {...props} />,
  h3: (props) => <UI.Heading as="h3" my={4} size="md" {...props} />,
  h4: (props) => <UI.Heading as="h4" my={2} size="md" {...props} />,
  h5: (props) => <UI.Heading as="h5" my={2} size="sm" {...props} />,
  h6: (props) => <UI.Heading as="h6" my={2} size="sm" {...props} />,
  p: (props) => <UI.Text fontSize="md" lineHeight={6} my={8} {...props} />,
};
