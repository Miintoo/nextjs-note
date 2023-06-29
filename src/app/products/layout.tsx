import Link from 'next/link';

type Props = {
  children: React.ReactNode;
}

export default function ProductsLayout({children}: Props) {
  
  return <>
    <ul>
      <Link href='/products/women'>Girl</Link>
      <Link href='/products/man'>Male</Link>
    </ul>
    <section>
      {children}
    </section>
  </>;
}