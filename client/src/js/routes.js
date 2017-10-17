import AppRoot from './containers/app';
import Home from './components/home';
import Category from './components/category';
import Product from './components/product';
import singleCategory from './components/singleCategory';
import NotFound from './components/notfound';

export const routes = [
    {
        component: AppRoot,
        routes: [
            {
                path: '/',
                exact: true,
                component: Home
            },
            {
                path: '/home',
                exact: true,
                component: Home
            },
            {
                path: '/category',
                exact: true,
                component: Category
            },
            {
                path: '/product/:code',
                exact: true,
                component: Product
            },
            {
                path: '/category/:id',
                component: singleCategory
            },
            {
                path: "*",
                component: NotFound
            }
        ]
    }
]