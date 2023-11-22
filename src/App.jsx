import { useState } from 'react'

const Footer = () => {
  return (
    <div className="footer">Countdown-timer, 2023</div>
  )
}

const Description = () => {
  return (
    <div className="description">
      <div className="description-title">
        Ajastin - Countdown Timer
      </div>
      <div className="description-body">
        Syötä sovellukseen aika ja käynnistä ajastin.
      </div>
    </div>
  )
}

const TimeConverter = ({ time }) => {
  if (time > 60) {
    let minute = Math.floor(time/60)
    return (
      <div>
        {minute} min {time%60} sek
      </div>
    )
  } else {
  return (
    <div>
      {time} sek
    </div>
  )
}
}

const CountdownTimer = ({ time, setTime }) => {

  //https://pixabay.com/sound-effects/short-success-sound-glockenspiel-treasure-video-game-6346/
  let timerFinish = new Audio("/alertsound/short-success-sound-glockenspiel-treasure-video-game-6346.mp3")

  const startTimer = () => {
    let stopTime = time
    console.log("käynnistä ajastin!")
    const intervalID = setInterval(() => {
      setTime(time => time - 1)
      //console.log(time)
      //console.log(stopTime)
      if (--stopTime === 0) {
        clearInterval(intervalID)
        console.log("pysähtyy!")
        timerFinish.play()
      }
    }, 1000)
  }

  const resetTimer = () => {
    console.log("reset")
    if (window.confirm("Haluatko varmasti nollata ajastimen?")) {
      window.location.reload()
    }
  }

  const addSecond = () => {
    console.log("lisää sekunti")
    setTime(time + 1)
  }

  const removeSecond = () => {
    console.log("poista sekunti")
    if (time >= 1) {
      setTime(time - 1)
    } else {
      console.log("ei voi poistaa sekuntia")
    }
  }

  const addMinute = () => {
    console.log("lisää minuutti")
    setTime(time + 60)
  }

  const add15Minutes = () => {
    console.log("lisää 15 minuuttia")
    setTime(time + 900)
  }

  const removeMinute = () => {
    console.log("poista minuutti")
    if (time >= 60) {
      setTime(time - 60)
    } else {
      console.log("ei voi poistaa minuuttia")
    }
  }

  return (
    <div className="countdownBox">
      <div className="timerTitle">Aseta alta ajastimeen aika
      </div>
      <div className="startResetButtonBox">
      <button className="startButton" onClick={startTimer}>
          Käynnistä
        </button>
        <button className="resetButton" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <div className="timerNumber">
        <TimeConverter time={time} />
      </div>
      <div className="timeButtonBox">
        <div>
          <button className="timeButton" onClick={add15Minutes}>
            + 15 Minuuttia
          </button>
          <button className="timeButton" onClick={addMinute}>
            +1 Minuutti
          </button>
          <button className="timeButton" onClick={removeMinute}>
            -1 Minuutti
          </button>
        </div>
        <div>
          <button className="timeButton" onClick={addSecond}>
            +1 Sekunti
          </button>
          <button className="timeButton" onClick={removeSecond}>
            -1 Sekunti
          </button>
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const [time, setTime] = useState(0)

  return (
    <div>
      <CountdownTimer time={time} setTime={setTime} />
      <Description />
      <Footer />
    </div>
  )
}

export default App
