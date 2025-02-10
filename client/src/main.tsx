import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router";
import {Provider} from "react-redux";
import {store} from "../../src/store/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <StrictMode>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </StrictMode>
    </Provider>
)
