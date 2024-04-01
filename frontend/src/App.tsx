import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import SupportRequests from './pages/SupportRequests'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SupportRequests />} />
            </Routes>
        </Router>
    )
}

export default App
