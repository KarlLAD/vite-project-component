import { Provider } from 'react-redux';

import { store } from './redux';

import './App.css'



import FormInput from './common/FormInput' ;

import ListItem from './common/ListItem' ;

import AfficheCompteur from './common/AfficheCompteur';

import Button from './common/Button';



function App() {


  return (

    <Provider store={store}>
    <div className='App'>
      {/* <AfficheCompteur />
      <Button /> */}
      <FormInput /> 
      <ListItem />

     </div>
     </Provider>
  )
}

export default App
