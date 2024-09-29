import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>홈페이지</h1>
      <nav>
        <ul>
          <li><Link href="/dashboard">대시보드</Link></li>
          <li><Link href="/photos/1">사진 1</Link></li>
          <li><Link href="/photos/2">사진 2</Link></li>
          <li><Link href="/photos/2/3">사진 2,3</Link></li>
        </ul>
      </nav>
    </div>
  )
}
