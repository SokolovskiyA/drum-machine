import './App.scss'
import sound1 from '../src/assets/boom.wav'
import sound2 from '../src/assets/clap.wav'
import sound3 from '../src/assets/hihat.wav'
import sound4 from '../src/assets/kick.wav'
import sound5 from '../src/assets/openhat.wav'
import sound6 from '../src/assets/ride.wav'
import sound7 from '../src/assets/snare.wav'
import sound8 from '../src/assets/tink.wav'
import sound9 from '../src/assets/tom.wav'

function App() {
  const sounds = [sound1, 
                  sound2, 
                  sound3, 
                  sound4, 
                  sound5,
                  sound6, 
                  sound7, 
                  sound8, 
                  sound9]
  const play = (sound) => {
    const audio = new Audio(sound)
    audio.play()
  }
  return (
    <div className="App">
      {sounds.map((sound)=> {
          return <div key={sound} className="drumButton" onClick={e => play(sound)}>
          </div>
        }
      )}
      
    </div>
  );
}

export default App;
