import cocoa from '../components/images/cocoa.webp'
import palmoil from '../components/images/palmoil.webp'
import belgian from '../components/images/belgian.webp'
import Comment from '../components/Comment'

export default function Home ()  {
  return (
    <>
    <div className="home container text-center py-4">
      <h1>Welcome to the Leonidas Chocolates</h1>
      <h5 className="my-3">We are a company that cares about the environment and the quality of our products</h5>
      <div className="d-flex justify-content-center home-image my-5">
        <img src={cocoa} alt="100% cocoa" />
        <img src={palmoil} alt="No palm oil" />
        <img src={belgian} alt="100% Belgian" />
      </div>
      <hr />
      <h5 className="my-5">See what people are talking about us:</h5>
      <Comment />
    </div>
    </>

  )
}
