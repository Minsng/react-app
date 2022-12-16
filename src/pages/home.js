import React, { useEffect, useState } from 'react';
import  customers from '../customers.json'; 

function Home() {
    const [users, setUsers] = useState([]);
    const [country, setCountry] = useState('');
    useEffect(() => {
        setUsers(customers);
    }, []);

    const customerData = users.map((row,index) => {
        return(
            <tr key={index}>
                <td>{row.Name}</td>
                <td>{row.City}</td>
                <td>{row.Country}</td>
                <td><img src={'./img/'+row.src} alt="" width="50px" /></td>
            </tr>
        );
    });
 
    const search = (e) => {
        e.preventDefault();  //새로고침이 안되게 한다
        //console.log(users.length);
        let searchlist = customers.filter(function(element){
            return element.Country.includes(country);  
          });
        setUsers(searchlist); 
    };

    return (
        <>
           <h2>Home</h2>
           
          <form  onSubmit={search} style={{'marginBottom':'30px'}}>
            <label htmlFor="title">국가</label>
            <input id="title" type="text" placeholder="Mexico" value={country} onChange={ (e) => setCountry(e.target.value)}  />
            <button type="submit">검색</button>
          </form>

           <table className="table table-bordered">
                <thead>
                    <tr><th>Name</th><th>City</th><th>Country</th><th>gonfalon</th></tr>
                </thead>
                <tbody>
                    {customerData}
                </tbody>
            </table>  
        </> 
    );
  }

  export default Home;