import { UI } from '@/ui';

export default function CustomImage(props) {
  return (
    <UI.Image
      {...props}
      style={{ boxShadow: '0 0 10px rgba(107, 33, 168, 0.90)' }}
      rounded="md"
      alt={props.alt}
    />
  );
}
