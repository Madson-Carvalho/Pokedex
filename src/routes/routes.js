import { Route, Routes } from 'react-router-dom';

import Home from './../pages/home/Home';
import PokemonPage from '../pages/PokemonPage/PokemonPage';
import NotFound404 from '../pages/404/NotFound404';
import About from '../pages/about/About';
import ContactUs from '../pages/contact/ContactUs';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/pokemon' element={<PokemonPage />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path='*' element={<NotFound404 />} />
        </Routes>
    )
}

export default CustomRoutes;