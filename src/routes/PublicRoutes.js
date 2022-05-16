import Home from '../pages/Home/Home';
import Contact from '../pages/Contact';
import Login from '../pages/Login';
const PublicRoutes = [
    {path: '/', name: 'Home', Component: Home },
    {path: '/contact', name: 'Contact', Component: Contact },
    {path: '/login', name: 'Login', Component: Login },
];

export {PublicRoutes};