import MeowArticle from '@/components/MeowArticle';
import { getProducts } from '@/service/products';
import Image from 'next/image';
import Link from 'next/link';
import clothesImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

export default async function ProductsPage() {
  // 서버 파일(DB)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
  const products = await getProducts();
  
  

  return (<section>
    <h1>제품 소개 페이지!</h1>
    <Image src={clothesImage} alt='Clothes' />
    <ul>
      {products.map(({id, name}, index) => (
        <li key={index}>
          <Link href={`/products/${id}`}>{name}</Link>
        </li>
      ))}               
    </ul>
    <MeowArticle />
    </section>)
}