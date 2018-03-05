import AppRoot from './containers/app';
import Home from './containers/HomePage';
import Category from './containers/CategoryPage';
import Product from './containers/ProductPage';
import singleCategory from './containers/SingleCategoryPage';
import NotFound from './containers/NotFoundPage';
import MyFav from './containers/MyFavoritePage';
import BuildYourOwn from './containers/BuildYourOwnPage';

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
                path: '/my-favorite',
                component: MyFav
            },
            {
                path: '/buildyourown',
                component: BuildYourOwn
            },
            {
                path: "*",
                component: NotFound
            }
        ]
    }
]