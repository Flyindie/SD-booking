import Nevbar from '../components/Nevbar'

export default function Home() {

    return (
        <div className='bg-[#F6D8D5] pb-50'>
        <Nevbar/>
        <div className='flex items-center justify-center'>
            <div className='bg-white mt-20 rounded-2xl py-10 px-15 mx-25'>
                <div className='flex gap-5 flex-col md:flex-row'>
                    <img src="/image 1.png" className='w-100 h-70'/>
                    <div>
                        <p className='text-xl'>Blank gun Glock 17 ปืนปลอมประกอบฉาก</p>
                        <p className='text-[#A40000] font-semibold text-3xl mt-2'>10 บาท/วัน</p>
                    </div>
                </div>
                <p className='w-full max-w-180 text-sm my-8'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex gap-10'>
                    <div className='w-full text-sm'>
                        <p>จำนวน</p>
                        <div className='border border-solid border-[#7A7A7A] py-2 rounded-lg'>
                            <input type="text" className='outline-none'/>
                        </div>
                    </div>
                    <div className='w-full text-sm'>
                        <p>ระยะเวลาการเช่า(วัน)</p>
                        <div className='border border-solid border-[#7A7A7A] py-2 rounded-lg'>
                            <input type="text" className='outline-none'/>
                        </div>
                    </div>
                </div>
                <button className='w-full bg-[#A40000] text-white py-1 text-2xl rounded mt-4 cursor-pointer'>
                    เช่า
                </button>
            </div>
        </div>
        </div>
    )
}