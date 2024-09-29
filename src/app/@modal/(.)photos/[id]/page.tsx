export default function PhotoModal({ params }: { params: { id: string } }) {
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', border: '1px solid black' }}>
      <h2>사진 {params.id} 모달</h2>
      <p>이것은 인터셉트된 모달 뷰입니다.</p>
    </div>
  )
}