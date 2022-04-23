import Head from 'next/head'
import Image from 'next/image'
import SideMenu from '../components/SideMenu'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Your Career</title>
      </Head>
      <div className='home'>
        <div className="hero">
          <img src="https://i.pinimg.com/originals/2f/cf/68/2fcf68e6bc39382a639e4531b923c602.jpg" alt="" />
          <div className='hero-info'>
            <h3>Let's Write Some <br /> Code !</h3>

            <p>Find Information about the upcoming coding contests.</p>

            <Link href='/contests'>
              <a>Go For it !</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
