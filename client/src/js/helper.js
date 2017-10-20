import Cookies from 'universal-cookie';

export const addToFav = (productCode) => {
    const cookies = new Cookies();
    cookies.set("favorites", productCode, { path: '/'});
    // console.log(cookies.get('favorites'));
    console.log("---------------");
    console.log(cookies.getAll());
};