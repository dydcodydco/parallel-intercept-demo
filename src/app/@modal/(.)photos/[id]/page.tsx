type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function PhotoModal({ params, searchParams }: Props) {
  console.log('searchParams : ', searchParams);
  console.log('params : ', params);
  return (
    <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'white', padding: '20px', border: '1px solid black' }}>
      <h2>사진 {params.id} 모달</h2>
      <p>이것은 인터셉트된 모달 뷰입니다.</p>
    </div>
  )
}