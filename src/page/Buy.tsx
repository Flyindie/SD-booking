import Nevbar from '../components/nevbar'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <div className='bg-[#F6D8D5] h-screen'>
        <Nevbar/>
        <div className='flex items-center justify-center'>
            <div className='bg-white mt-20'>
                <div className='flex gap-5'>
                    <img src="/image 1.png" className='w-100 h-70'/>
                    <div>
                        <p>Blank gun Glock 17 ปืนปลอมประกอบฉาก</p>
                        <p>10 บาท/วัน</p>
                    </div>
                </div>
                <p className='w-full max-w-150'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex'>
                    <div>
                        <p>จำนวน</p>
                        <input type="text" className='outline-none'/>
                    </div>
                    <div>
                        <p>ระยะเวลาเช่า</p>
                        <input type="text" className='outline-none'/>
                    </div>
                </div>
                <button onClick={() => navigate('/')}>เช่า</button>
            </div>
        </div>
        </div>
    )
}