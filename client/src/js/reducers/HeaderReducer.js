const INIT_STATE = { 
    searchCategory: "",
    searchLocation: "",
    categoryList : [],
    showMenu: false,
    favCount: 0
}

const HeaderReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "changeMenu":
            state = {
                ...state,
                showMenu: action.payload
            }  
            break;
        case "loadSearchCategory":
            state = {
                ...state,
                categoryList: action.payload
            }
            break;
        case "updateSearchCategory":
            state = {
                ...state,
                searchCategory: action.payload.searchCategory,
                searchLocation: action.payload.searchLocation
            }
            break;
        case "showFavCount":
            state = {
                ...state,
                favCount: action.payload
            }
    }

    return state;
}

export default HeaderReducer;