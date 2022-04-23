import Link from "next/link";

const SideMenu = ({sites}) => {
    return (
        <div className="side-menu">
            <Link href='/contests'>
                <a>All</a>
            </Link>
            <Link href='/contests/codechef'>
                <a>Codechef</a>
            </Link>
            <Link href='/contests/codeforces'>
                <a>Codeforces</a>
            </Link>
            <Link href='/contests/hackerrank'>
                <a>Hackerrank</a>
            </Link>
            <Link href='/contests/hackerearth'>
                <a>Hackerearth</a>
            </Link>
        </div>
    );
}
 
export default SideMenu;