'use client';

export default function ChildComponent() {
  return (
    <>
      <div onClickCapture={(e) => {
        if (e.target === e.currentTarget) {
          console.log('모달 닫힘');
        }
      }}>parent 1 캡쳐
        <div onClickCapture={(e) => console.log('parent 2', e.target)}>parent 2
          <div onClickCapture={(e) => console.log('child 1', e.target)}>child</div>
        </div>
      </div>
      <div onClick={(e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
          console.log('모달 닫힘');
        }
      }}>parent 1
      <div onClick={(e: React.MouseEvent) => console.log('parent 2', e.target)}>parent 2
        <div onClick={(e: React.MouseEvent) => console.log('child 1', e.target)}>child</div>
      </div>
    </div>
    </>
  )
}