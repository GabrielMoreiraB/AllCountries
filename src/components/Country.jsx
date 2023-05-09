import Item from "../components/Item";



const Country = ({children:country = null}) => {
    if(!country) <div>Impossível renderizar país</div>
    return (
        <div className="border p-2 m-2 flex flex-row items-center space-x-2">
            <img src={country.flag} alt={country.name} />
            <ul>
                <li><Item value ={country.name} label="Nome"/></li>
                <li><Item value ={country.capital} label="Capital"/></li>
                <li><Item value ={country.region} label="Região"/></li>
                <li><Item value ={country.area}label="Denc. Demo"/> km²</li>
            </ul>
        </div>
    )
}

export default Country;