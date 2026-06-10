import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';
import Cadastro from '../pages/Cadastro.jsx';
import Login from '../pages/Login.jsx';
import Dashboard from '../pages/Dashboard.jsx';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/cadastro' element={ <Cadastro/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/dashboard' element={ <Dashboard/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;