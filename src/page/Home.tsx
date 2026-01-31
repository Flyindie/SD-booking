import Nevbar from '../components/Nevbar'
import Filter from '../components/Filter'
import Card from '../components/Card'

export default function Home() {
  

  return (
    <div className='bg-[#F6D8D5] pb-50'>
      <Nevbar/>
      <div className='grid lg:grid-cols-[1fr_3fr] px-30 mt-10 gap-7'>
        <Filter/>
        <div 
          className='grid
            grid-cols-2 
            xl:grid-cols-3 
            xxl:grid-cols-4 
            gap-3'>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </div>
  )
}