import React from 'react'
import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
import PhotoModal from '../@modal/(.)photos/[id]/page'

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

describe('PhotoModal', () => {
  it('메인 페이지에서 링크를 클릭하면 올바른 params로 모달이 열립니다', async () => {
    const params = { id: '1' }
    const searchParams = { key: 'value' }

    // 콘솔 로그 스파이를 렌더링 전에 설정
    const consoleSpy = jest.spyOn(console, 'log')

    render(<PhotoModal params={params} searchParams={searchParams} />)

    expect(screen.getByText('사진 1 모달')).toBeInTheDocument()
    expect(screen.getByText('이것은 인터셉트된 모달 뷰입니다.')).toBeInTheDocument()

    // 콘솔 로그 확인
    expect(consoleSpy).toHaveBeenCalledWith('searchParams : ', searchParams)
    expect(consoleSpy).toHaveBeenCalledWith('params : ', params)

    // 스파이 복원
    consoleSpy.mockRestore()
  })
})