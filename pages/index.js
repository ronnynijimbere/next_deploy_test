//Main page. This includes a header with a title and a static image
import Header from "../components/Header"

const IndexPage = () => (
	<div className="container">
		<Header pageTitle="Projects Page" />
		<div className="page-content" >
			<h1>This is the projects page!</h1>
			<img src="/ITPic.jpg" alt="a picture" />
      <img src="/unnamed - 2021-10-22T103826.642" alt="a-rage-comic meme" />


		 <p>Here below will be a link to my Github repository, which holds my developer projects. It contains a fully working webpage detailing myself as mentioned earlier</p>
		 <a href='https://github.com/darkhorizonfxr53'></a>
		 <style jsx>{`
		      .container {
				position: relative;
				text-align: center;
			  }
		
			  h1 {
				position: absolute;
				top: 40%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 1;
				color: white;
				background-color: rgba(0, 0, 0, 0.5);
				padding: 10px;
			  }
		
			  img {
			 	display: block;
			 	margin: 0 auto; /* Center the image horizontally */
			 	width: 60%; /* Set the maximum width of the image */
			 	height: auto;
			   }
		 `}</style>

		 <style global jsx>{`
		 	body{
		 		background-color: #a6a69c;
		 		font-family: "Times New Roman", serif
		 	}
		 	`}</style> 
		</div>
	</div>	
)

export default IndexPage

