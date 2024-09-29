import Link from 'next/link';
import ChildComponent from './_component/childComponent';

export default function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <nav>
        <ul>
          <li><Link href="/dashboard?search=1">대시보드</Link></li>
          <li><Link href="/photos/1">사진 1</Link></li>
          <li><Link href={{
            pathname: '/photos/1',
            query: { search: '1' }
          }}>사진 1 + query string</Link></li>
          <li><Link href="/photos/2">사진 2</Link></li>
          <li><Link href="/photos/2/3">사진 2,3</Link></li>
        </ul>
      </nav>
      <ChildComponent />
    </div>
  )
}
