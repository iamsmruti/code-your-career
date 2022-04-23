import Image from 'next/image'

const About = () => {
    return (
        <div>
            <div className="about-div">
                    <img src='https://i.vimeocdn.com/video/321165511-86d16a83e794bd9ddf79c0982b06e5daa01221899dcf66a350a9e05bb6a31a23-d?mw=1000&mh=563&q=70' />
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