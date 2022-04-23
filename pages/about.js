import Image from 'next/image'

const About = () => {
    return (
        <div>
            <div className="about-div">
                    <Image src='/1.jpeg' width={480} height={300} alt='asset-2'/>
                <div className="about-info">
                    <h2>About</h2>
                    <p>I am Smruti Ranjan Badatya, a Computer Science Undergrad.</p>
                    <p>Made this project while Learning Next.js</p>
                    <p>Find me on Insta <a href='https://www.instagram.com/__iamsmruti'>@__iamsmruti</a></p>
                    <p>Link to the Github Repo - <a href=''>Link</a></p>
                    <pre><p>Thanks For Visiting   ; )</p></pre>
                </div>
            </div>
        </div>
    );
}
 
export default About;