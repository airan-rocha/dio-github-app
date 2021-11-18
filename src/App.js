import {useEffect, useContext, createContext, useState } from 'react';
import './styles/Style.css';
import GitHub from './components/GitHub';
import Search from './components/Search';
import { Contexto } from './Context';

function App() {
  const [context, setContext] = useState('');

  return (
    <div>
      <div className="top-box" />
      <div className="App">
        <Contexto.Provider value={[context, setContext]}>
          <Search />
          {!context && <p>As informações irão aparecer aqui...</p>}
          {context && <GitHub userName={context}/>}
        </Contexto.Provider>
      </div>
    </div>
  );
}

export default App;
