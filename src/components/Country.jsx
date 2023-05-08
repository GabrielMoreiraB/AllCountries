


const Country = ({children:country = null}) => {
    if(!country) <div>Impossível renderizar país</div>
    return (
        <div>
            {country.name}
        </div>
    )
}

export default Country;