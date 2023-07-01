import './App.css'
import Header from './components/Header'
import ChocolatesList from './components/ChocolatesList'

// import alexandre from './assets/alexandre.png'

export default function App() {

  return (
    <>
      <Header />
      <div className="container m-auto">
        <ChocolatesList />
      </div>
    </>

  )
}
