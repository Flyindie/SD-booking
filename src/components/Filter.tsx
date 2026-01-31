export default function Filter() {

  return (
    <div className='bg-white rounded-xl px-7 py-4'>
        <h1 className="font-semibold text-xl">Filters</h1>
        <div className="grid grid-cols-2 gap-5 mt-3">
            <button className="text-[#B31717] border border-solid border-[#B31717] py-2 rounded-xl">
                ปืนสั้น
            </button>
            <button className="text-[#B31717] border border-solid border-[#B31717] py-2 rounded-xl">
                ปืนยาว
            </button>
            <button className="text-[#B31717] border border-solid border-[#B31717] py-2 rounded-xl">
                ระเบิดมือ
            </button>
            <button className="text-[#B31717] border border-solid border-[#B31717] py-2 rounded-xl">
                ระเบิดแสวงเครื่อง
            </button>
            <button className="text-[#B31717] border border-solid border-[#B31717] py-2 rounded-xl">
                ปืนกล
            </button>
        </div>
    </div>
  )
}