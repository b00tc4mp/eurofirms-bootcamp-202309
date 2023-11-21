import React from 'react'
export function Logo() {
    console.log('Logo')
  
    const tweetAudioRef = React.useRef()
  
    function handleMouseOverLogo() {
      tweetAudioRef.current.play()
    }
      return <div> <svg width="50px" height="50px" version="1.1" viewBox="0 0 154.02901 149.04581" xmlns="http://www.w3.org/2000/svg" onMouseOver={handleMouseOverLogo}>
      <g transform="translate(78.126,67.39882)" id="g170">
          <g transform="translate(-39.001,-148.55)" id="g168">
       <g fill="#fff" id="g140">
        <rect x="-39.125" y="155.67999" width="72.558998" height="74.516998"/>
        <rect x="-39.125" y="81.157997" width="73.498001" height="74.516998"/>
        <rect x="37.381001" y="155.67" width="77.523003" height="74.516998"/>
        <rect x="42.345001" y="81.156998" width="72.558998" height="74.516998"/>
       </g>
       <g fill="#ffe680">
        <path d="m -39.125,155.68 72.559,74.517 3.9467,-7.5e-4 v -74.516 z"/>
        <path d="m 37.381,155.68 v 74.516 l 74.516,-74.516 z"/>
        <path d="m 37.381,81.155 v 74.52 h 74.516 L 42.345,81.157 Z"/>
        <path d="m 37.381,81.155 -74.52,74.52 h 74.52 z"/>
       </g>
       <path d="m 33.434,155.67 h 8.9108 v 23.991 l 36.915,7.7e-4 23.991,-23.991 h 11.653 l -74.518,74.518 h -6.9524 z m 8.9108,32.51 v 28.397 l 28.397,-28.397 z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.9393" style={{"whiteSpace":"pre"}} id="path152" />
        <path d="m 42.345,155.67 h -8.9108 v -23.991 l -36.915,-8.2e-4 -23.991,23.991 h -11.653 l 73.499,-74.518 h 7.9711 z M 33.4342,123.16 V 94.763 L 5.0372,123.16 Z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6.9393" style={{"whiteSpace":"pre"}} id="path154" />
        <g transform="matrix(6.9393,0,0,7.0411,-79.35,-54.301)" strokeLinecap="round" strokeLinejoin="round" id="g160">
          <path d="M 20.148,29.822 H 18.9909 V 19.239 h 1.1571 z" id="path156" />
  :&quot;pre&quot;/&gt;
  <path d="M 27.993,29.822 H 26.3138 L 22.7014,26.0684 V 29.822 H 21.5302 V 19.239 h 1.1712 v 5.2917 l 3.3161,-2.3848 1.7357,-0.01411 -4.2333,3.1609 z" id="path158" />
  :&quot;pre&quot;/&gt;
  </g>
        <g transform="matrix(-6.9393,0,0,-7.041,338.07,288.91)" strokeLinecap="round" strokeLinejoin="round" id="g166">
              <path d="M 46.652,18.923 H 45.4949 V 8.34 h 1.1571 z" id="path162" />
  :&quot;pre&quot;/&gt;
  <path d="m 48.896,8.3399 q 0.381,0 0.635,0.26811 0.26811,0.254 0.26811,0.635 0,0.36689 -0.26811,0.635 -0.254,0.254 -0.635,0.254 -0.36689,0 -0.635,-0.26811 -0.254,-0.26811 -0.254,-0.62089 0,-0.36689 0.254,-0.635 0.26811,-0.26811 0.635,-0.26811 z m 0.59267,10.583 h -1.1712 v -7.6906 h 1.1712 z" style={{"whiteSpace":"pre"}} id="path164" />
  </g>
      </g>
    </g>
  </svg>
  <audio id="tweet-audio" controls ref={tweetAudioRef}>
  <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.ogg" type="audio/ogg" />
              <source src="https://cdn.freesound.org/previews/360/360306_6437556-lq.mp3" type="audio/mpeg" />
  </audio>
  </div>    
  }

  export default Logo