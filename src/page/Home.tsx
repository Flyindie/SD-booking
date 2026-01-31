import Nevbar from '../components/nevbar'
import Filter from '../components/Filter'
import Card from '../components/Card'

export default function Home() {
  

  return (
    <div className='bg-[#F6D8D5] h-screen'>
      <Nevbar/>
      <div className='grid grid-cols-[1fr_3fr] px-30 mt-10 gap-7'>
        <Filter/>
        <div className='grid grid-cols-3 gap-3'>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}