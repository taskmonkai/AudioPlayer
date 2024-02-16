import React, { useState } from 'react'
import { AudioPlayer } from './component'

function App() {
  const [src, setSrc] = useState("https://dl.espressif.com/dl/audio/ff-16b-2c-44100hz.mp3")
  return (<div>
    <AudioPlayer src={src} width={400} />
    {src}<br />
    <button onClick={() => setSrc("https://file-examples.com/storage/fe34a88a9a65cf545955ccb/2017/11/file_example_MP3_1MG.mp3")} >Next</button>
  </div>)
}

export default App
