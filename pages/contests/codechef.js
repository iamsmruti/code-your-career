import Link from "next/link"
import Contest from "../../components/Contest"

export const getStaticProps = async () =>{
    const res = await fetch('https://kontests.net/api/v1/code_chef')
    const data = await res.json()

    return {
        props: {
            contests : data
        }
    }
}

const Codechef = ({contests}) => {
    
    return (
        <div className="sites">
            {contests.map(((contest, i) => (
                <div key={i}>
                    <Contest contest={contest} id={i}/>
                </div>
            )))}
        </div>
    );
}
 
export default Codechef;