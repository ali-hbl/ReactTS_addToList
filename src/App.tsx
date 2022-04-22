import React, { useState } from 'react';
import List from './List/List';
import AddToList from './AddToList/AddToList';
import './App.css';

export interface PeopleProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<PeopleProps['people']>([
    {
      name: 'LeBron James',
      url: 'https://www.basketsession.com/statics/uploads/2020/06/Lebron-James-Lakers-face.jpg',
      age: 36,
      note: 'Allegeric to staying on the same team',
    },
  ]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
