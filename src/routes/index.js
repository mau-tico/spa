import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

// Se crean las RUTAS // Objeto
const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
};

// Manegador, encardado de mostrar los elementos // Funcion
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    // Ahora empujamos la info
    header.innerHTML = await Header();
}; 

export default router;