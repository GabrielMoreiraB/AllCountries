import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import TextInput from '../components/TextInput';
import { allCountries } from '../data/countries';
import Countries from '../components/Countries';

const ReactCountries = () => {
    const [coutryFilter, setCountryFilter] = useState('Brazil');

    function handleCountryFilterChange(e){
      setCountryFilter(e)
    }

    const coutryFilterLowercase = coutryFilter.trim().toLocaleLowerCase();

    const filteredCountries = 
    coutryFilterLowercase.length >= 3 ?
    allCountries.filter(country=> country.nameLowerCase
      .includes(coutryFilterLowercase)) : allCountries;

    console.log(filteredCountries)

    return ( 
        <div>
        <Header>React-Countries</Header>
  
        <Main>
          <TextInput
          id='inputCountryChange'
          labelDescription='Informe o Nome do País (Pelo menos 3 caracteres):'
          inputValue={coutryFilter}
          autoFocus
          onInputChange={handleCountryFilterChange}
          />
          <Countries>{filteredCountries}</Countries>
        </Main>
        
      </div>
     );
}
 
export default ReactCountries;