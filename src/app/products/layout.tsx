import { Metadata } from 'next';
import Link from 'next/link';

type Props = {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '멋진 제품 사이트 | 전체 제품 확인',
  description: '멋진 제품을 확인해보세요',
 
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