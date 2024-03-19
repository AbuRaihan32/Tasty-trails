import './App.css'
import Banner from './components/Banner/Banner'
import Navbar from './components/Navbar/Navbar'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <>
      <div className='max-w-[1260px] mx-auto'>
        <div className='w-[90%] mx-auto'>
          <Navbar></Navbar>
          <Banner></Banner>
          <Recipes></Recipes>
        </div>
      </div>
    </>
  )
}

export default App
