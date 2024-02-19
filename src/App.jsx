import { useState } from 'react'
import './App.css'

function App() {
  let [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="container">
        <img className='bdayPic' src="/images/didi.jfif" alt="pic" />
        <img className='bdayText' src="/images/bdayText.png" alt="happy birthday" />
        <img
          onClick={() => setToggle(true)}
          className={`gift ${toggle ? 'shaking' : ''}`}
          src="/svgs/gift.svg"
          alt="gift"
        />
        {toggle && <><img src="/video/celeb.gif" alt="gif" />
        <audio autoPlay>
  <source src="/audio/bdayWish.mp4" type="audio/mp4" />
</audio>

        </>}
      </div>
    </>
  )
}

export default App
