import '../../Styles/guestPages/HomePage.css'
import { Link } from 'react-router-dom'
function HomePage() {
  return (
    <div>
      <header>
        <a href="#" className="logo">Odonto</a>
        <div className="navbar-btn"></div>
        <div className="menu">
          <div className="menu-items">
            <a href="#">Home</a>
            <a href="#">Nosotros</a>
            <Link to='/login'>Login</Link>
          </div>
        </div>
      </header>

      <section className="home">
        <video className='video-slide active' src="/vid/vid1.mp4" autoPlay muted loop></video>
        <div className="content active">
          <h1>Service 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quod neque explicabo nisi praesentium facilis, repellendus maxime iste dignissimos, unde repellat repudiandae eos illo enim fugit odio aspernatur magnam minus.</p>
          <a href="#">Read more</a>
        </div>
      </section>
    </div>
  )
}

export default HomePage