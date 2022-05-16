import Service from '../pages/Services';
import About from '../pages/About';

const PrivateRoutes = [
    {path:'/service', name: 'Service',Component: Service},
    {path:'/about', name: 'About',Component: About},
]

export {PrivateRoutes};