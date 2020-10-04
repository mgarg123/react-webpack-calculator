import React from 'react'
import Calculator from './components/Calculator.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'

function App() {
    return (
        <Provider store={store}>
            <Calculator />
        </Provider>

    )
}

export default App