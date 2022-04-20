

import App from "./App";
import ReactDOM from 'react-dom/client';
import ReviewProvider from "./context/ReviewContext";
import MembersProvider from "./context/MembersContext";
import CoinListProvider from "./context/CoinListContext";
import RegistrationProvider from "./context/RegistrationContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MembersProvider>
        <RegistrationProvider>
            <CoinListProvider >
                <ReviewProvider>
                    <App />
                </ReviewProvider>
            </CoinListProvider >
        </RegistrationProvider>
    </MembersProvider>
);