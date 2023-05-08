import Header from '../components/Header';
import Main from '../components/Main';
import { allCountries } from '../data/countries';

const ReactCountries = () => {
    console.log(allCountries)
    return ( 
        <div>
        <Header>React-Countries</Header>
  
        <Main>Teste2</Main>
        
      </div>
     );
}
 
export default ReactCountries;