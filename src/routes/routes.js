import { Route, Routes } from 'react-router-dom';
import Home from './../pages/home/Home';
import PokemonPage from '../pages/PokemonPage/PokemonPage';

const CustomRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/pokemon' element={<PokemonPage />} />
        </Routes>
    )
}

export default CustomRoutes;