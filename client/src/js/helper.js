import Cookies from 'universal-cookie';

export const addToFav = (productCode) => {
    const cookies = new Cookies();
    var fav = [];
    if(cookies.get("favorites")){
        fav = cookies.get("favorites");
    }
    fav.push(productCode);
    cookies.set("favorites", fav, { path: '/'});
    console.log(cookies.get("favorites"));
};

export const removeFromFav = (productCode) => {
    const cookies = new Cookies();
    var fav = cookies.get("favorites");
    fav = fav.filter( item => item !== productCode );
    cookies.set("favorites", fav, { path: '/'});
    console.log(cookies.get("favorites"));
}

export const checkFavExits = (productCode) => {
    const cookies = new Cookies();
    let fav = cookies.get("favorites");
    let ex = false;
    fav = fav.filter( (item) => {
        if(item == productCode){
            ex = true;
        }  
    });
    return ex;
}