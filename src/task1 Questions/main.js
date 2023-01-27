import React, { useState } from 'react'
import './App.scss'
import { Qs } from '../task1 Questions/Qs';
export default function MainF() {
    const [c1,C1]=useState(false)
    const [c2,C2]=useState(false)
    const [c3,C3]=useState(false)
    const c = ['HTML & CSS is for', 'React is framework for', 'In React we use *render* in', 'In React we use *Hooks* in',"FINISH"]
        const [n, N] = useState(0)
    const [x1, X1] = useState("")
    const [x2, X2] = useState("")
    const [x3, X3] = useState("")
    const Fc=[0,1,2,3]
    const tit=["Next","Next","Next","Next","END"]
    const n2=[0,1,2,0]//Correct array
    const as = {
        'HTML & CSS is for': ['Structer&Styling', 'Function', 'Console',false],
        'React is framework for': ['Backend in JS', 'Frontend in JS', 'DataBase in JS',false],
        'In React we use *render* in': ['F.C', 'F.C&C.C', 'C.C',false],
        'In React we use *Hooks* in': ['F.C', 'F.C&C.C', 'C.C',false],
        "FINISH":['','','',true]
    }
    const [fvst,FVST]=useState("")
    const [nt,NT]=useState(0)
    const [nf,NF]=useState(0)
    const boo=false
    const [fv,FV]=useState("")
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
    const Y=(y)=>{
        
            if (y=='true') {
               FV("True") 
               FVST("green")
               NT(nt+1)
            }
            else{
                FV("False")
                FVST("red")
                NF(nf+1)
            }
        
    }
    const v=[c1.toString(),c2.toString(),c3.toString()]
        const END=(n)=>{
            if (n==4) {
                return window.location.reload();
            } else {
               return X1(v[0])+X2(v[1])+X3(v[2])+N(n+1)+Y(v[Fc[n2[n]]])
            }
        }
    return (
          <div>
            <div className='main'>
                <div className='q'>
                    <Qs k={n} />
                </div>
                <div className='a'>

                    <div >
                        <p className='pa'>
                            <p hidden={as[c[n]][3]}    className='a1'><span>{as[c[n]][0]} </span><input type={"checkbox"} checked={c1} onChange={Change1} value={as[c[n]][0]} /></p>
                            <p hidden={as[c[n]][3]} className='a2'><span>{as[c[n]][1]} </span><input type={"checkbox"} checked={c2} onChange={Change2} value={as[c[n]][1]} /></p>
                            <p hidden={as[c[n]][3]}  className='a3'><span>{as[c[n]][2]} </span><input type={"checkbox"} checked={c3} onChange={Change3} value={as[c[n]][2]} /></p>
                        <div className='ANS' hidden={!as[c[n]][3]}>
                           <div className='nt'> True:{nt}</div>
                            <br/>
                            <br/>
                            <div className='nf'> False:{nf}</div>
                        </div>
                        </p>
                    </div>

                </div>
                
                <button onClick={()=>END(n)}>{tit[n]}</button>
            </div>
            <div hidden={as[c[n]][3]} className='tf' style={{color:fvst}}>{fv}</div>
            
        </div>  
    );


}
//welcome page--web/ai
//Q A file
// 10 Q