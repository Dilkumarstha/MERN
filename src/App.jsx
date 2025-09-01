
import { useState } from 'react';
import './App.css'


import Counter from './redux/counter';

import componentA from './Components/ComponentA';

import Todos from './Components/Todos';
import ComponentA from './Components/ComponentA';

function App() {


    return (<div className='card-wrapper'>
        <ComponentA />
        <Todos />


    </div>
    )
}
export default App;