import React,{useState} from 'react'
import Products from './Products.js'
const App = () => {
  const [search,setSearch]=useState("");
  const YOUR_APP_ID="f6ced9c1";
  const YOUR_APP_KEY="79e6862fa995478c9add8413cbbe1e88";
  const [data,setData]=useState([]);
  const submitHandler=e=>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=30&calories=591-722&health=alcohol-free`).then(response=>response.json()).then( data =>setData(data.hits))
  }
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Food Recipe App</h4><br/>
            <form onSubmit={submitHandler}>
              <input  size="25" width="15px" type="text"  value={search} onChange={ (e)=>setSearch(e.target.value)}/><br/> <br/>
              <input type="Submit" className="btn btn-primary" value="Search"/>
            </form><br/>
            {data.length>=1 ? <Products data={data}/>:null}
          </div>
        </div>
      </center>
    </div>
  )
}

export default App
