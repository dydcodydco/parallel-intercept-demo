export default function Photo({ params }: { params: { id: string } }) {
  console.log(params);
  return <div>사진 {params.id} 상세 페이지</div>
}