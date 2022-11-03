import axios from 'axios'
import React, { useEffect, useState } from 'react'

function CountriesList() {
    // const [listaPaises, setListaPaises] = useState([])

    // useEffect(() => {
    //     axios.get("https://ih-countries-api.herokuapp.com/countries")
    //     .then((response) => {
    //         setListaPaises(response.data.alpha3Code)
    //     }).catch((err) => {

    //     })
    // }, [])
  return (
    <div className="col-5" style="max-height: 90vh; overflow: scroll">
            <div className="list-group">
              <a className="list-group-item list-group-item-action" href="/ABW">🇦🇼 Aruba</a>
              <a className="list-group-item list-group-item-action" href="/AFG">🇦🇫 Afghanistan</a>
              <a className="list-group-item list-group-item-action" href="/AGO">🇦🇴 Angola</a>
              <a className="list-group-item list-group-item-action" href="/AIA">🇦🇮 Anguilla</a>
              <a className="list-group-item list-group-item-action" href="/ALA">🇦🇽 Åland Islands</a>
              <a className="list-group-item list-group-item-action" href="/ALB">🇦🇱 Albania</a>
              <a className="list-group-item list-group-item-action" href="/AND">🇦🇩 Andorra</a>
              <a className="list-group-item list-group-item-action" href="/ARE">🇦🇪 United Arab Emirates</a>
              <a className="list-group-item list-group-item-action" href="/ARG">🇦🇷 Argentina</a>
              <a className="list-group-item list-group-item-action" href="/ARM">🇦🇲 Armenia</a>
              <a className="list-group-item list-group-item-action" href="/ASM">🇦🇸 American Samoa</a>
              <a className="list-group-item list-group-item-action" href="/ATA">🇦🇶 Antarctica</a>
              <a className="list-group-item list-group-item-action" href="/FLK">🇫🇰 Falkland Islands</a>
              <a className="list-group-item list-group-item-action active" href="/FRA">🇫🇷 France</a>
              <a className="list-group-item list-group-item-action" href="/ZWE">🇿🇼 Zimbabwe</a>
            

           {/* {listaPaises.map((eachPaises) => {
           return (
            <p key={eachPaises.name}>
                <Link to={"/"}></Link>
            </p>
           )})} */}


            </div>
          </div>
  )
}

export default CountriesList