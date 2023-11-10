import { useState } from 'react';
import './App.css'
import { Counter } from './counter';
import { Table } from './table'
import { RandomNumbers } from './RandomNumbers';
import { MousePosition } from './mouse-position';
import { AutomaticCounter } from './automatic-counter';
import { Joke } from './joke';
import { ToggleThemeButton } from './toggle-theme-button';
import { Theme, ThemeContext } from './theme-context';

function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [columns, setColumns] = useState(3);

  const [theme, setTheme] = useState<Theme>('light');

  function toggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <ThemeContext.Provider value={{
      current: theme,
      toggleTheme
    }}>
      <ToggleThemeButton />
      <Joke />

      <AutomaticCounter />

      <MousePosition />
      <Counter />
      <RandomNumbers pregeneratedCount={5} />
      <button onClick={() => setColumns(columns === 3 ? 4 : 3)}>Toggle</button>
      <Table array={array} columns={columns} />
    </ThemeContext.Provider>
  )
}

export default App
