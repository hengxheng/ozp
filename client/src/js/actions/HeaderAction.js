export function changeState(MenuState) {
    return {
        type: "changeMenu",
        payload: !MenuState
    };
}

export function loadSearchCategory(categories){
    return {
        type: "loadSearchCategory",
        payload: categories
    }
}

export function updateSearchCategory(location, category){
    return {
        type: "updateSearchCategory",
        payload: {
            searchCategory : category,
            searchLocation : location
        }
    }
}

export function loadFavCount(n){
    return {
        type: 'showFavCount',
        payload: n
    }
}