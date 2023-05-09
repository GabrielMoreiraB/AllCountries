


const Country = ({children:country = null}) => {
    if(!country) <div>Impossível renderizar país</div>
    return (
        <div className="border p-2 m-2">
            
            <ul>
                <li>{country.name}</li>
                <li>{country.capital}</li>
                <li>{country.region}</li>
                <li>{country.area} km²</li>
            </ul>
        </div>
    )
}

export default Country;