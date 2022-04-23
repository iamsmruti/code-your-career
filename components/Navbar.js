import Image from 'next/Image'
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="navbar">
            <Link href='/' className="logo">
                <Image src='/code-your-life.png' width={150} height={75}/>
            </Link>
            <div className='menu'>
                <Link href='/'>
                    <a>Home</a>
                </Link>
                <Link href='/about'>
                    <a>About</a>
                </Link>
            </div>
        </div>
    );
}
 
export default Navbar;