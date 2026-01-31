import { useNavigate } from 'react-router-dom'

export default function Card() {
    const navigate = useNavigate()

    return (
        <button className='bg-white w-65 p-3 cursor-pointer'
            onClick={() => navigate('/buy')}>
            <img src="/image 1.png" className="w-65 h-35" />
        <div className="flex items-end">
            <p>Blank gun Glock 17 ปืนปลอมประกอบฉาก</p>
            <span className="text-xl w-full">10 บาท/วัน</span>
        </div>
        </button>
    )
}