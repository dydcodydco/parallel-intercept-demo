export default function PhotoCatchAll({ params }: { params: { id: string[] } }) {
  const id = params.id.join('/')
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', border: '1px solid black' }}>
      <h2>캐치올 라우트 사진 페이지</h2>
      <p>사진 ID: {id}</p>
    </div>
  )
}