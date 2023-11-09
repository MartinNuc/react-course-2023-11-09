import './App.css'
import { Table } from './table'

function App() {
  const array = [1,<h1>Cau</h1>,3,4,5,6, 7];
  return (
    <>
      <Table array={array} columns={3} />
    </>
  )
}

export default App
