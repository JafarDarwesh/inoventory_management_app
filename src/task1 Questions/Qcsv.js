import "./App.scss"
import { useState } from "react";
import Papa from "papaparse";
import { Qs } from "./Qs";

export default function Csv() {

    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);
    const [s, S] = useState('')
    const [ans1, Ans1] = useState('')
    const [ans2, Ans2] = useState('')   
    const [ans3, Ans3] = useState('')
    const [c1,C1]=useState(false)
    const [c2,C2]=useState(false)
    const [c3,C3]=useState(false)
    const Change1=()=>{
        C1(!c1)
        C2(false)
        C3(false)
    }
    const Change2=()=>{
        C2(!c2)
        C1(false)
        C3(false)
    }
    const Change3=()=>{
        C3(!c3)
        C1(false)
        C2(false)
    }
    const [co,CO]=useState("")
    const Y=(y)=>{
        
        if (y=='true') {N(n+1);
          CO("T");
          nT(nt+1)
          console.log("T");
        }
        else{N(n+1);
            nF(nf+1)
          CO('F');
          console.log("F");
        }}
    

    //State to store the values
    const [nt,nT]=useState(0)
    const [nf,nF]=useState(0)
    const [v1,V1]=useState('')
    const [v2,V2]=useState('')
    const [v3,V3]=useState('')
    const [values, setValues] = useState([]);
    const q = []
    
    const SHOW=['visable','hidden']
    const SH=['hidden','visable']
    const arr=[c1.toString(),c3.toString(),c1.toString(),c2.toString(),c3.toString(),c1.toString(),c2.toString()]
    const myres=[c1.toString(),c2.toString(),c3.toString()]
    const obg = {}
    const [n, N] = useState(0)
    const [j, J] = useState(0)
    const [hid,Hid]=useState(true)
    const [ov, Ov] = useState({})
    const changeHandler = (event) => {
        // Passing file data (event.target.files[0]) to parse using Papa.parse
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                const rowsArray = [];
                const valuesArray = [];

                // Iterating data to get column name and their values
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                // Parsed Data Response in array format
                setParsedData(results.data);

                // Filtered Column Names
                setTableRows(rowsArray[0]);

                // Filtered Values
                setValues(valuesArray);
                for (let index = 0; index < valuesArray.length; index++) {
                    obg[index] = valuesArray[index]
                    
                }
                Ov(obg)
                // console.log(obg);
     
            },
        });
    };

    return (
      <div>  
        <div style={{visibility:SHOW[j]}}>
            {/* File Uploader */}
            <input
                type="file"
                name="file"
                onChange={changeHandler}
                accept=".csv"
                style={{ display: "block", margin: "10px auto" }}

            />
            <br />
            <br />

            {tableRows.map((rows, index) => {
                q.push(rows);

            })}
            {values.map((value, index) => {

                obg[index] = value

            })}
            <button  onClick={() => {
                console.log('====================================');
                console.log(q);
                console.log('====================================');
                // console.log(obg["0"][0]);
                Hid(!hid);
                S(obg["0"][0]);
                Ans1(obg["0"][1]);
                Ans2(obg["0"][2]);
                Ans3(obg["0"][3]);
                V1(obg[`${n}`][1])
                V2(obg[`${n}`][2])
                V3(obg[`${n}`][3])
                console.log(obg[`${n}`][0]);
                N(0)
                    
            }}>AA</button>
            <div >
                <div className='q'>
                    <h1>{s}</h1>    
                </div>
                <div className="a">
                    <div>
                        <p className="pa">
                            <p>{ans1} <input type={"checkbox"} hidden={hid} checked={c1} onChange={Change1} value={v1}/></p>
                            <p>{ans2} <input type={"checkbox"} hidden={hid} checked={c2} onChange={Change2} value={v2}/></p>
                            <p>{ans3} <input type={"checkbox"} hidden={hid} checked={c3} onChange={Change3} value={v3}/></p >
                        </p>
                    </div>
                </div>
            </div>
            <button onClick={() => {if (n>=arr.length     ) {
               alert(`T:${nt}   F:${nf}`) ;window.location.reload();
               J(1);
            //    console.log('====================================');
            //    console.log(nt);
            //    console.log('====================================');
            //    console.log(nf);
             }else{
                        Y( arr[n]);S(obg[`${n+1}`][0]);Ans1(obg[`${n+1}`][1]);Ans2(obg[`${n+1}`][2]);Ans3(obg[`${n+1}`][3]   );    
          }}        }>++</button><br/><br/><br/>
    
            {/* <div className="tf">{co}</div> */}
        </div>
   
</div>
    );

}
    