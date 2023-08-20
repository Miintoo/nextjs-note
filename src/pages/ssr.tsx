import MeowArticle from '@/components/MeowArticle';
import { Product, getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import clothesImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

type Props = {
  products: Product[];
};

export default async function SSGPage({ products }: Props) {
  // 서버 파일(DB)에 있는 제품의 리스트를 읽어와서 그걸 보여줌

  return (
    <section>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt='Clothes' />
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </section>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  return {
    props: { products },
  };
}
