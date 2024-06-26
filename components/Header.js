import Image from 'next/image';
import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12 text-center">
      <Image src="/assets/IconWhite.png" alt="Carrot" width={100} height={100} />
      <p className="text-xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
