// let slide = 1;

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.about = React.createRef();
	  this.music = React.createRef();
    this.state = {
      aboutActive: 'ready',
      musicActive: 'ready',
      loaded: 'ready'
    };
  }
  
  componentDidMount() {
    const music = this.music.current;
    const about = this.about.current;
    document.body.style.background = '#fff';
    var options = {
      root: null,
      threshold: 0
    };
      var callBack = (obs) => {
        var target = obs[0].target;

        if (target === about) {
          if (!obs[0].isIntersecting) return;
          this.setState({ aboutActive: 'active' });
          observer.unobserve(about);
        } else if (target === music) {
          if (!obs[0].isIntersecting) return;
          this.setState({ musicActive: 'active' });
          observer.unobserve(music);
        }
      };

	      var observer = new IntersectionObserver(callBack, options);
	      observer.observe(about);
	      observer.observe(music);
  }
  
  render() {
    return (
      <main>
        <section id="welcome">
          <p>I'm Jesse and I'm a frontend dev.</p>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1055214/jesse.png" />
          <h1>hello.</h1>
        </section>
        <section id="about" ref={this.about} className={this.state.aboutActive}>
          <div className="graphic">
             <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50"/>
            </svg>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1055214/jesse-cartoon.png" />
          </div>
          <div className="text">
            <h2>About</h2>
            <p>
              I've been living in San Francisco for the last two years. I'm currenlty working in-house at a large Cupertino tech company that likes to keep the details of their work 🤫. Unfortunately, that means I don't have much recent work to show, but I promise it exists, and it's cool stuff!
            </p>
            <a href="#">Check out my codepen &rsaquo;</a>
          </div>
        </section>
        <section id="music" ref={this.music} className={this.state.musicActive}>
           <div className="text">
            <h2>Music</h2>
            <p>
              I also like to play music, and I am currently working on a home recorded EP.
            </p>
            <a href="https://soundcloud.com/thetreehouseproject">Check out my SoundCloud &rsaquo;</a>
          </div>
          <div className="graphic">
             <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="50"/>
            </svg>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1055214/IMG_0168.PNG" />
          </div>
        </section>
    	</main>
    )
  }

};

ReactDOM.render(
  <Page />,
  document.getElementById('app')
);