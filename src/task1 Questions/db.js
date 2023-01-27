import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function DB() {
  const [x, X] = useState("");
  const obg = {}
  const [o2, O2] = useState({})
  const [c1, C1] = useState(false)
  const [c2, C2] = useState(false)
  const [c3, C3] = useState(false)
  const Change1 = () => {
    C1(!c1)
    C2(false)
    C3(false)
  }
  const Change2 = () => {
    C2(!c2)
    C1(false)
    C3(false)
  }
  const Change3 = () => {
    C3(!c3)
    C1(false)
    C2(false)
  }
  const [v1, V1] = useState('')
  const [v2, V2] = useState('')
  const [v3, V3] = useState('')
  const hid = [true, false]
  const [s, S] = useState('')
  const [ans1, Ans1] = useState('')
  const [ans2, Ans2] = useState('')
  const [ans3, Ans3] = useState('')
  const [ca, CA] = useState('')
  const q = []
  // console.log(obg["0"][0]);

  const [n, N] = useState(0)
  const [h, H] = useState(0)

 
  const xAPI = (xx) => {
    axios.get("http://localhost/qapi.php").then((resp) => {

      for (let index = 0; index < resp.data.length; index++) {
        obg[index] = resp.data[index]

      }
      O2(obg)
      console.log(obg);
      console.log(obg[n]['Q']);

      S(obg[xx]['Q'])
      Ans1(obg[xx]['A1'])
      Ans2(obg[xx]['A2'])
      Ans3(obg[xx]['A3'])
      CA(obg[xx]['CA'])
      console.log('====================================');
      console.log(obg[xx]['CA']);
      console.log('====================================');
      // console.log(typeof(obg[n]['Q']));

    }).catch((error) => console.log(error))
  }
  const myres = [c1.toString(), c2.toString(), c3.toString()]

  const [nt, nT] = useState(0)
  const [nf, nF] = useState(0)
  const [co, CO] = useState("")
  const Y = (y) => {

    if (y == 'true') {
      N(n + 1);
      CO("T");
      nT(nt+1)
      console.log("T");
    }
    else {
      N(n + 1);
        nF(nf+1)
      CO('F');
      console.log("F");
    }
  }

  return (

    <div>
      <div className='q'  hidden={n<7?hid[h]:!hid[h]}>
        <h1>{s}</h1>
      </div>
      <div className="a">
        <div>
          <p className="pa" hidden={n<7?hid[h]:!hid[h]} >
            <p>{ans1} <input type={"checkbox"} checked={c1} onChange={Change1} value={v1} /></p>
            <p>{ans2} <input type={"checkbox"} checked={c2} onChange={Change2} value={v2} /></p>
            <p>{ans3} <input type={"checkbox"} checked={c3} onChange={Change3} value={v3} /></p>
          </p>
        </div>
      </div>
<button hidden={!hid[h]} onClick={()=>xAPI(0)+ H(1)}>Start</button>
      <button hidden={hid[h]} onClick={() => {
        if (n >= 7) {alert(`T:${nt}   F:${nf}`); window.location.reload();} 
        else{Y(myres[ca-1]) ; xAPI(n+1) ;}
      }}>
        {n<7?<h3>NEXT</h3>:<h3>END</h3>}
      </button>
    </div>
  )
}

// public rebo on Github 
//create dashboard to add \delete\edit Q and save to csv or mysql