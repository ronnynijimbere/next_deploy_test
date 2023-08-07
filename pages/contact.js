//Contact details page
import Header from "../components/Header"

const ContactPage = () => (
  <div className="container">
    <Header pageTitle="Contact Page" />
    <div className="page-content">
    <h1>This is the Contact page</h1>
    <p>Channels in which to contact me include:</p>
    <ol>
        <li>email: horizonsow@gmail.com</li>
        <li>cellphone number: (+27)67 656 2004</li>
        <li>cellphone number: (+27)76 795 0794</li>
    </ol>
    </div>
    <style jsx>{`
      h1 {
        font-family: arial; sans serif;
        font-size: x-large
      }
      p {
        font family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: medium
      }
      ol {
        display: flex;
        align-items: center;
        text-align: center;
      }
      li {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif
        font-size: medium
        font-style: bold
      }
      body{
        background-color: #c3beba;
        font-family: 
      }
    `}</style>
  </div>
)

export default ContactPage