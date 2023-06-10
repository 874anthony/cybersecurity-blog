import Link from 'next/link';
import { UI, Icons } from '@/ui';

export default function SocialNetworks() {
  return (
    <UI.HStack color="white" spacing="24px" my={4}>
      <Link href="https://github.com/874anthony">
        <Icons.IconGithub size="24px" />
      </Link>

      <Link href="https://www.linkedin.com/in/anthony-acosta-montes/?locale=en_US">
        <Icons.IconLinkedin size="24px" />
      </Link>

      <Link href="https://www.instagram.com/874anthonyy">
        <Icons.IconInstagram size="24px" />
      </Link>
    </UI.HStack>
  );
}
