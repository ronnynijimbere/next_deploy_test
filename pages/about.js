//About page. This is a page about me. 
//This page includes the link to my Github repository
import Header from "../components/Header";

const AboutPage = () => (
  <div>
  <Header />
    <h1>This is the About page</h1>
    <h2>This is a page dedicated to explaining my life. </h2>
    <p>I spent my primary schooling years at Sir Edmund Hillary Primary school. That was from 2006 until 2012. I spent my secondary years at Queens High School.
      They are both based in Johannesburg, South Africa.
    </p>
    <p>After schooling, I enrolled at a university known as the University of South Africa(also known as Unisa).</p>
    <p>During my time at Unisa, I had worked at a retail store called Western Accessories Fishing Tackle. As the name suggests, it was a bait and tackle store. 
      I worked there for a little over 2 years, then resigned due to lack of growth in the organisation. </p>

    <p>I am an individual who loves learning and reading. I go into more detail in a project of mine. The link to it will be given in this project </p>  

    {/* //Due to Heroku's new pricing, I do not have a project deployed there.  */}

    <a href='https://github.com/darkhorizonfxr53'>My GitHub repository</a>

    <p>The link above is my Github repository. It is where my projects can be seen publicly.</p>
    <style jsx>{`
      h1 {
        font-family: arial; sans serif;
        font-size: x-large
      }
      h2 {
        font-family: 'Courier New', Courier, monospace
        font-size: large
      }
      p {
        font family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: medium
      }
      a {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
        font-size: medium
        font-style: bold
      }
    `}</style>
  </div>  
  
)

export default AboutPage;