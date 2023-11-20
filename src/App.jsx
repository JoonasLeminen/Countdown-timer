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

const CountdownTimer = ({ time, setTime }) => {

  const startTimer = () => {
    let stopTime = time
    console.log("käynnistä ajastin!")
    const intervalID = setInterval(() => {
      setTime(time => time - 1)
      console.log(time)
      console.log(stopTime)
      if (--stopTime === 0) {
        clearInterval(intervalID)
        console.log("pysähtyy!")
      }
    }, 1000)
  }

  const resetTimer = () => {
    console.log("reset")
    if (window.confirm("Haluatko varmasti nollata ajastimen?")) {
      setTime(0)
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

  const removeMinute = () => {
    console.log("poista minuutti")
    if (time >= 60) {
      setTime(time - 60)
    } else {
      console.log("ei voi poistaa minuuttia")
    }
  }

  return (
    <div>
      <div className="timer">Ajastin, aseta alta ajastimeen aika
        <button className="startButton" onClick={startTimer}>
          Käynnistä
        </button>
        <button className="resetButton" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <div className="timerNumber">
        {time}
      </div>
      <div className="setTime">
        <button onClick={addMinute}>
          +1 Minuutti
        </button>
        <button onClick={removeMinute}>
          -1 Minuutti
        </button>
        <button onClick={addSecond}>
          +1 Sekunti
        </button>
        <button onClick={removeSecond}>
          -1 Sekunti
        </button>
      </div>
    </div>
  )
}

const App = () => {
  const [time, setTime] = useState(0)

  return (
    <div>
      <CountdownTimer time={time} setTime={setTime} />
      <Footer />
      <Description />
    </div>
  )
}

export default App
