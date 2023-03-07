import './App.css';
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

function App() {

  const [theme, setTheme] = useState('dark');

  return (

    <div className="App">

      <ThemeContext.Provider value={{
        theme,
        setTheme
      }}>
        <Form />
      </ThemeContext.Provider>


    </div>
  );
}

function Form() {
  return (
    <Panel title="Welcome">
      <Button>Sign up</Button>
      <Button>Log in</Button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const { theme, setTheme } = useContext(ThemeContext);
  const className = 'panel-' + theme;
  return (
    <section className={className}>
      <h1>{title}</h1>
      <Button id="colorBtn" onClick={() => {

        switch (theme) {

          case 'dark':

            setTheme('light');
            break;

          case 'light':
            setTheme('red');
            break;

          case 'red':
            setTheme('blue');
            break;

          case 'blue':
            setTheme('purple');
            break;

          case 'purple':
            setTheme('dark');
            break;

        }
        // console.log("setTheme");
      }

      }>Change Color</Button>

      {children}
    </section>
  )
}

function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (

    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}



export default App;
