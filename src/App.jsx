import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Main} from "./components/Main.jsx";
import {Shop} from "./components/Shop.jsx";
import {Payment} from "./components/Payment.jsx";
import {Paid} from "./components/PaymentSections/Paid.jsx";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/shop" element={<Shop/>}/>
                    <Route path="/payment" element={<Payment/>}/>
                    <Route path="/payment/final" element={<Paid/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
