import React, { useRef, useState } from 'react'
import Csv from './Qcsv';
import W from './w';

const usersData = {
    "users": [

    ]

};
console.log(usersData.users);
console.log('====================================');
const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType })

    const a = document.createElement('a')
    a.download = fileName
    a.href = window.URL.createObjectURL(blob)
    const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    })
    a.dispatchEvent(clickEvt)
    a.remove()
}
const exportToCsv = e => {
    // e.preventDefault()

    // Headers for each column
    let headers = ['Id,Q,A1,A2,A3,CA']

    // Convert users data to a csv
    let usersCsv = usersData.users.reduce((acc, user) => {
        const { id, Q, A1, A2,A3,CA } = user
        acc.push([id, Q, A1, A2,A3,CA].join(','))
        return acc
    }, [])

    downloadFile({
        data: [...headers, ...usersCsv].join('\n'),
        fileName: 'users.csv',
        fileType: 'text/csv',
    })
}
function AddQ() {
 
const [w,W]=useState(0)
const [n,N]=useState(1)
    const rq=useRef()
    const ra1=useRef()
    const ra2=useRef()
    const ra3=useRef()
    const rca=useRef()
    const AddData = () => {
        
        const q=document.getElementById('q').value;
        const a1=document.getElementById('a1').value;
        const a2=document.getElementById('a2').value;
        const a3=document.getElementById('a3').value;
        const ca=document.getElementById('ca').value;
        // // console.log('====================================');
        // console.log(x1);
        // console.log('====================================');
        usersData.users.push({
            "id": n, "Q": q, "A1": a1, "A2": a2, "A3": a3, "CA": ca
        });
        console.log(usersData.users);
        console.log('====================================');
       
    rq.current.value="";
    ra1.current.value="";
    ra2.current.value="";
    ra3.current.value="";
    rca.current.value="";
    N(n+1)
    }
     return (
        w==0?
        <div className='App'>
            <div>
                <div className='addQ'>
                    <input type={'text'}  id={'q'} ref={rq} placeholder={'Q'}/><br /><br /><br />
                    <input type={'text'}  id={'a1'} ref={ra1} placeholder={'A1'}/><br /><br /><br />
                    <input type={'text'}  id={'a2'} ref={ra2} placeholder={'A2'}/><br /><br /><br />
                    <input type={'text'}  id={'a3'} ref={ra3} placeholder={'A3'}/><br /><br /><br />
                    <input type={'text'}  id={'ca'} ref={rca} placeholder={'CA'}/><br /><br /><br />
                    <button onClick={AddData}>ADD</button>

                </div>
            </div>
            <button onClick={() => {
                // console.log('****************************');
                // console.log(usersData.users);
                // console.log('****************************');
                W(1)
            }}>V</button>
            
        </div>:
        <div>
            <table className='usersTable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Q</th>
            <th>A1</th>
            <th>A2</th>
            <th>A3</th>
            <th>CA</th>
          </tr>
        </thead>
        <tbody>
          {usersData.users.map(user => {
            const {  id, Q, A1, A2,A3,CA } = user
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{Q}</td>
                <td>{A1}</td>
                <td>{A2}</td>
                <td>{A3}</td>
                <td>{CA }</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className='actionBtns'>
        <button onClick={()=>W(0)}>Add more</button><br/><br/>
                <button type='button' onClick={exportToCsv}>
                    Export to CSV
                </button>
            </div>
        </div>
    )
}

export default AddQ