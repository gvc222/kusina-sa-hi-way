import './App.css';
import logo from "./assets/gallery/logo.png";

const App = () => {
  const call = () => {
    window.open('tel:+639662064758')
  }
  const addressURL = "https://www.google.com/maps/dir//4JX7%2B96H+Kusina+sa+Hi-way,+Santiago+-+Tuguegarao+Rd,+Mallig,+Isabela/@17.148425,121.6105424,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x338ff5322e7dfbc9:0x8acd6aff483e1644!2m2!1d121.6131353!2d17.1484259!3e0?entry=ttu";
  return (
    <div className="app">
      <nav class="navigation__bar">
        <div className="nav__logo"><a href="/"><img src={logo} alt="Kusina sa Hi-way logo" className="logo__image" /></a></div>
        <div className="nav__menu"><a href="#menu">Menu</a></div>
        <div className="nav__reviews"><a href="#reviews">Reviews</a></div>
        <div className="nav__gallery"><a href="#gallery">Gallery</a></div>
        <div className="nav__contact"><a href="#contact">Contact Us</a></div>
        <div className="nav__directions"><a target="_blank" rel="noreferrer" href={addressURL}>Get Directions</a></div>
      </nav>

      <div className="container">
        
        <div className="header">
          <h1 className="hero__title">Kusina sa Hi-Way</h1>
          <p className="text">Open daily from 6:00AM to 9:30PM</p>
          <p className="text">Located at National Highway,</p>
          <p className="text">Muñoz West, Roxas, Isabela</p>
          <hr />
        </div>
        
        <section id="menu" className="menu">
          
          <h2>Menu</h2>
          <h3>Daily Menu</h3>
          <p>Our daily rotation of foods are curated to serve the most fresh ingredients to your table. You name it, we got it! If you would like to call ahead to make reservations or to inquire about the daily menu, please call our phone number at +639662064758.</p>
          <h3>Paluto</h3>
          <p>Your favorite food is not on the daily menu? Make a custom order to suit your tastes with our <i>Paluto</i> service!</p>
          <h3>Paihaw</h3>
          <p>Choose among a wide variety of skewered meats to cook at the grill with your favorite flavor of marinade!</p>
        </section>
        <section className="reviews">
          <hr />
          <h2 id="reviews">Reviews</h2>
          <div className="fb__posts">
            <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgusvdecastro%2Fposts%2Fpfbid02Geuxh9RTb3XjHtBpLRwseGg1bC8C378HLLcVJisVsKytW3BvVTNScHkddFBYNB9Ql&show_text=true&width=500" width="500" height="656" title="fb-post-1" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="fb-post-2"src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fchandelamaresh%2Fposts%2Fpfbid0MhNwssryMTjUrbqoJsZFMGBj9mZA5b9T86TQwrJZyYGvqbeUR5nTyHD9y25T8jsEl&show_text=true&width=500" width="500" height="656" scrolling="yes" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="fb-post-3" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fonivag.naquilan%2Fposts%2Fpfbid02dpYYoLQ3Pc1jDE7KTgKZETWb4smESsGscxzY4vURDYQQKRbzziWs3bu2gTQQJLPtl&show_text=true&width=500" width="500" height="200" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="fb-post-4" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02zjegzZzbiY8MhqhjJ2q1g1Koq7SLru8ijkHu6QKN5pjkfzdTaX5trCC4Vs1gUofPl%26id%3D100074575539852&show_text=true&width=500" width="500" height="200"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="fb-post-5" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmelailomboy%2Fposts%2Fpfbid05VdJHA1QaFAH7E4PMBWU8DXGYNYxWUBDmN6kgtTDnYngiZYVhS97jSUE3hzXpxe5l&show_text=true&width=500" width="500" height="225" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="fb-post-6" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fjvr07john%2Fposts%2Fpfbid0c5CTbFGFTNfX9KvzqfkhquUbZztNBiVENHGzMYhf8Vo6KpTEKvMhhn5m3yRQcjkNl&show_text=true&width=500" width="500" height="225" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            
          </div>
        </section>
        <section className="gallery">
          <hr />
          <h2 id="gallery">Gallery</h2>
          <div className="gallery__container">
            <iframe title="gallery-1" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkusinasahiway%2Fposts%2Fpfbid02UZn2KDskTJwKkkQDX2mKsRqf4hfmL3AxrpYfS5tZiTmtKGXx3Hxc7Rz7nh1SVtx3l&show_text=true&width=500" width="500" height="700" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="gallery-2" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkusinasahiway%2Fposts%2Fpfbid02RVKxp4e1VoV7EYSwnd2wnpMuqRxfLT2JzwxSCLG9f2RCkHF3mDJVEngMvLxJWsXal&show_text=true&width=500" width="500" height="700" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="gallery-3" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkusinasahiway%2Fposts%2Fpfbid035Mm6LtED2TLV9ReZsjwkPuhLXE9FX4P1zuYAdf8vt7QYrHb1FDDsHHE51HoUvhb6l&show_text=true&width=500" width="500" height="700" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            <iframe title="gallery-4" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fkusinasahiway%2Fposts%2Fpfbid02UVxKv8Tdxf8qZ9xrqYu4MqEpRgTHriYn1ENrua8i8JWumGAaFt9jqgvzDLyL3FhAl&show_text=true&width=500" width="500" height="700" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
          
        </section>
        <section className="contact">
          <hr />
          <h2 id="contact">Contact Us</h2>
          <iframe title="google-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3812.4475863726097!2d121.6105424!3d17.148425!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x338ff5322e7dfbc9%3A0x8acd6aff483e1644!2sKusina%20sa%20Hi-way!5e0!3m2!1sen!2sph!4v1702304637458!5m2!1sen!2sph" width="600" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          <div className="contact__info">
            <div className="call">
              <h3 className="call__us">Contact us</h3>
              <button className="call__now" onClick={call}>Call now</button>
              <p className="phone__number">Mobile Phone</p>
              <p>+639662064758</p>
            </div>
            <div className="address">
              <h3 className="address__title">Address</h3>
            <a href={addressURL}>
              <button className="get__directions">Get directions</button>
            </a>
            </div>
            <div className="business__hours">
              <h3 className="business__title">Business Hours</h3>
              <button className="open__daily">Open Daily</button>
              <p className="text__hours">6:00AM - 9:00PM</p>

            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="footer__text">
            <div className="footer__nav">
              <div className="nav__menu"><a href="#menu">Menu</a></div>
              <div className="nav__reviews"><a href="#reviews">Reviews</a></div>
              <div className="nav__gallery"><a href="#gallery">Gallery</a></div>
              <div className="nav__contact"><a href="#contact">Contact Us</a></div>
              <div className="nav__directions"><a target="_blank" rel="noreferrer" href={addressURL}>Get Directions</a></div>
            </div>
            <p className="footer__p">Powered by Kusina sa Hi-Way © 2023</p>
          </div>
          
        </footer>
      </div>
    
      
    </div>
  )
}

export default App;
