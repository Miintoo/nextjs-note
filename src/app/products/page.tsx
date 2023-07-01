import { getProducts } from '@/service/products';
import Link from 'next/link';



export default function ProductsPage() {
  // 서버 파일(DB)에 있는 제품의 리스트를 읽어와서 그걸 보여줌
  const products = getProducts();
  
  return (<section>
    <h1>제품 소개 페이지!</h1>
    <ul>
      {products.map((product, index) => (
        <li key={index}>
          <Link href={`/products/${product}`}>{product}</Link>
        </li>
      ))}
    </ul>
    </section>)
}