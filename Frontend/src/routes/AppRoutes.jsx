import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx';
import Cadastro from '../pages/Cadastro.jsx';

function AppRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/cadastro' element={ <Cadastro/> }/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;