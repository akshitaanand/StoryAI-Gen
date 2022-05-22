import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import Button from 'react-bootstrap/Button';
//document.body.style.backgroundColor = "#CEE7CF";

export default function Home() {
  const [promtInput, setPromtInput] = useState("");
  const [result, setResult] = useState([]);
  const [subject, setSub] = useState([]);

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promtInput }),
    });
    const data = await response.json();

    setSub(subject => [...subject, promtInput])
    setResult(result => [...result, data.result])
    console.log(result)
    setPromtInput("");
  }

  return (
    <div style = {{backgroundColor: "#CEE7CF"}}>
      <Head>
        <title>Story Generator</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={styles.main}>
        <img src="/Newlogo.gif" className={styles.icon} />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="prompt"
            placeholder="Enter an topic"
            value={promtInput}
            onChange={(e) => setPromtInput(e.target.value)}
          />
            <div>
              <Button variant="success" size="sm" className = {styles.btn} onClick={() => setPromtInput("A windy day")}>
                A windy day
              </Button>{' '}
              <Button variant="success" size="sm" className = {styles.btn} onClick={() => setPromtInput("My goldfish")}>
                My goldfish
              </Button>{' '}
              <Button variant="success" size="sm" className = {styles.btn} onClick={() => setPromtInput("Painting")}>
                Painting
              </Button>{' '}
              <Button variant="success" size="sm" className = {styles.btn} onClick={() => setPromtInput("Walking my dog")}>
                Walking my dog
              </Button>{' '}
          </div>
          <br></br>
          <input type="submit" value="Generate a story" />
        </form>
        <div className = {styles.bgrCont}>
          <div className = {styles.resultBox}>
          {result.map((element, index) => {
            return(<div className = {styles.innerText}>
              <p>{subject[subject.length -1 - index]}</p>
              <p>{result[result.length -1 - index]}</p> 
              <div className = {styles.hr}></div>
            </div> )
          })}
          </div>
        </div>
      </main>
    </div>
  );
}
