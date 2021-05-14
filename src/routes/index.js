import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes';

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

    let hash = getHash();
    let route = await resolveRoutes(hash);

    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
}; 

export default router;