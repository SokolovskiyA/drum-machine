import './App.scss'
import { useEffect, useState } from 'react'
import sound1 from '../src/assets/boom.wav'
import sound2 from '../src/assets/clap.wav'
import sound3 from '../src/assets/hihat.wav'
import sound4 from '../src/assets/kick.wav'
import sound5 from '../src/assets/openhat.wav'
import sound6 from '../src/assets/ride.wav'
import sound7 from '../src/assets/snare.wav'
import sound8 from '../src/assets/tink.wav'
import sound9 from '../src/assets/tom.wav'
import noteC from '../src/assets/C.mp3'
import noteC1 from '../src/assets/C1.mp3'
import noteD from '../src/assets/D.mp3'
import noteD1 from '../src/assets/D1.mp3'
import noteE from '../src/assets/E.mp3'
import noteF from '../src/assets/F.mp3'
import noteF1 from '../src/assets/F1.mp3'
import noteG from '../src/assets/G.mp3'
import noteG1 from '../src/assets/G1.mp3'
import noteA from '../src/assets/A.mp3'
import noteA1 from '../src/assets/A1.mp3'
import noteB from '../src/assets/B.mp3'

function App() {
  const sounds = [
    { src: sound1,
      name: "boom",
      key: "1"
    },
    { src: sound2,
      name: "clap",
      key: "2"
    },
    { src: sound3,
      name: "hihat",
      key: "3"
    },
    { src: sound4,
      name: "kick",
      key: "4"
    },
    { src: sound5,
      name: "openhat",
      key: "5"
    },
    { src: sound6,
      name: "ride",
      key: "6"
    },
    { src: sound7,
      name: "snare",
      key: "7"
    },
    { src: sound8,
      name: "tink",
      key: "8"
    },
    { src: sound9,
      name: "tom",
      key: "9"
    }
  ]
  const piano = [
    { src: noteC,
      name: "c",
      key: "q"
    },
    { src: noteC1,
      name: "c#",
      key: "2"
    },
    { src: noteD,
      name: "d",
      key: "w"
    },
    { src: noteD1,
      name: "d#",
      key: "3"
    },
    { src: noteE,
      name: "e",
      key: "e"
    },
    { src: noteF,
      name: "f",
      key: "r"
    },
    { src: noteF1,
      name: "f#",
      key: "5"
    },
    { src: noteG,
      name: "g",
      key: "t"
    },
    { src: noteG1,
      name: "g#",
      key: "6"
    },
    { src: noteA,
      name: "a",
      key: "y"
    },
    { src: noteA1,
      name: "a#",
      key: "7"
    },
    { src: noteB,
      name: "b",
      key: "u"
    }
  ]
  const [array, setArray] = useState(sounds)
  const play = (sound) => {
    const audio = new Audio(sound)
    audio.play()
  }

  useEffect(() => {
    const handleKeyPress = (event) => {
      const sound = array.find((s) => s.key === event.key);
      if (sound) {
        play(sound.src);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [array]);


  return (
    <div className="App">
      <h1 className='header'>Drum Machine</h1>
      <select onChange={e => {if(e.target.value === 'sounds'){setArray(sounds)} else if (e.target.value === 'piano'){setArray(piano)}}}>
        <option value='sounds'>Sounds</option>
        <option value='piano'>Piano</option>
      </select>
      <div className='drumMachine'>
        {array.map((sound)=> {
            return (
            <div key={sound.name} className="drumButton" onClick={e => play(sound.src)}>
              <p className='drumKey'>{sound.key}</p>
              <p className='drumName'>{sound.name}</p>
            </div>)
          }
        )}
      </div>
    </div>
  );
}

export default App;
