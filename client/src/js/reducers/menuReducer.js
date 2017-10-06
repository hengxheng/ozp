const INIT_STATE = { 
    // searchCategory: "",
    // searchLocation: "",
    showMenu: false
}

const menuReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "changeMenu": 
            state = {
                ...state,
                showMenu: action.payload
            }     
            break;
    }

    return state;
}

export default menuReducer;