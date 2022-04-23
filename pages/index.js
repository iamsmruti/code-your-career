import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Your Career</title>
      </Head>
      <div className='home'>
        <div className="hero">
          <Image src="/2.jpg" width={500} height={500} alt='asset-1'/>
          <div className='hero-info'>
            <h3>Let&apos;s Write Some <br /> Code !</h3>

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
