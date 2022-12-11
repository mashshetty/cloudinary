import logo from './logo.svg';
import {useState} from "react"
import './App.css';




function App() {

  const sub=()=>{
    const data = new FormData()
    data.append("file",fl)
    data.append("upload_preset","demoapp")
    data.append("cloud_name","ddq3nzfq8")

    fetch("https://api.cloudinary.com/v1_1/ddq3nzfq8/image/upload",{
      method:"post",
      body:data
    }).then((res)=>res.json()).then((data)=>{setimg(data.url);console.log(data.url)}).catch((err)=>console.log(err))
  }
  
const [fl,setfl]=useState();
const [img,setimg]=useState("");
  return (
    <div className="App">
      <input onChange={e=>setfl(e.target.files[0])} type="file"/>
      <img src={img} alt="cloudinary"/>
      <input onClick={sub} value="submit" type="button"/>
    </div>
  );
}

export default App;
