import { useState } from 'react';
import './App.css'
import { Counter } from './counter';
import { Table } from './table'
import { RandomNumbers } from './RandomNumbers';
import { MousePosition } from './mouse-position';

function App() {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12];
  const [columns, setColumns] = useState(3);

  return (
    <>
      <MousePosition />
      <Counter />
      <RandomNumbers pregeneratedCount={5} />
      <button onClick={() => setColumns(columns === 3 ? 4 : 3 )}>Toggle</button>
      <Table array={array} columns={columns} />
    </>
  )
}

export default App
