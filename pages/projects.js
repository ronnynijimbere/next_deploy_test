//Projects page. This shows some projects along with their respective Github links

import Header from "../components/Header"

export default () => (
    <div>
        <Header/>
        <div className="project-row">
      <div className="project">
        <h2>Web Projects App</h2>
        <p>
          This is is a project that required creating a website where users could buy items. In my case, school items.
        </p>
        <a href="https://github.com/darkhorizonfxr53/Online-Store">GitHub Shopping page repoisitory</a>
      </div>

      <div className="project">
        <h2>Hangman</h2>
        <p>
          This is a Hangman game created with React. The user has to guess which
          word it is before they are "hanged".
        </p>
        <a href="https://github.com/darkhorizonfxr53/Hangman">GitHub Hangman repoisitory</a>
        <br />
        
      </div>
    </div>

    <div>

      <div className="project">
        <h2>HTML Website</h2>
        <p>
          This is my first Capstone project created with HTML & Javascript
          combined It is a fully functioning website.
        </p>
        <a href="https://github.com/darkhorizonfxr53/Webpage">GitHub website repoisitory</a>
      </div>
    </div>

    <style jsx>{`
      a {
        color: black;
      }

      a:active {
        color: yellow;
      }

      h1 {
        text-align: center;
      }
      .project-row {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-left: 20px;
        margin-right: 20px;
      }

      .project {
        width: 48%;
        padding: 20px;
        background-color: #f0f0f0;
        margin-right: 20px;
        border-radius: 10px;
        overflow: hidden;
      }

      .project:last-child {
        margin-right: 0;
      }

      h2 {
        margin-top: 0;
      }
    `}</style>

    <style global jsx>{`
      body {
        background-color: #b5c5c4;
        font-family: "Times New Roman", serif;
      }
    `}</style>
    </div>
)