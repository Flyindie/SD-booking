import { useNavigate } from 'react-router-dom'

export default function Nevbar() {
  const navigate = useNavigate()

  return (
    <div className='bg-[#B31717] text-white flex justify-between items-center px-8 py-5'>
        <button className=' text-4xl font-bold cursor-pointer'
          onClick={() => navigate('/')}>
            Booking Props
        </button>
        <div className='flex gap-5 text-lg'>
            <a href="/">ปืนปลอม</a>
            <a href="/">ยานพาหนะ</a>
            <a href="/">เฟอนิเจอร์</a>
            <a href="/">ชุดนักแสดง</a>
            <a className='font-bold' href="/">Sing in</a>
        </div>
    </div>
  )
}