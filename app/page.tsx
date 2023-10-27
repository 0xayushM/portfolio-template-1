import Image from 'next/image'
import Stars from './components/stars'
import BlogButton from './components/blogButton'
import Sidebar from './components/sidebar'

export default function Home() {
  return (
    <div>
      <div><Stars/></div>
      <div className='fixed w-full h-full top-0 text-white'>
        <Sidebar/>
      </div>
    </div>
  )
}
