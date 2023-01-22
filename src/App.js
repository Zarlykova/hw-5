
import { useState } from 'react';
import './App.css';
import { PersonalForm } from './components/personalForm/PersonalForm';
import { PersonalList } from './components/personalList/PersonalList';

function App() {
  const [data, setData ] = useState([])

  const addNewPersonalData = (allInfo) => {
  setData((prevState) => [
    ...prevState,
    {
       name: allInfo,
    }
   
  ])
  console.log(data);
  }

  return (
    <div className="App">
      <PersonalForm addNewPersonalData={addNewPersonalData}/>
      <PersonalList data={data}/>
    </div>
  );
}

export default App;
