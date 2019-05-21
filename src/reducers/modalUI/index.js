const initialState = {
    isPopupOpen: false,
}

const modalUI = (state=initialState, {type, payload}) => {
    switch(type){
        case 'MANAGE_POPUP_VISIBILITY': 
        return {
            ...state,
            isPopupOpen: !state.isPopupOpen }
        
        default: 
            return state
    }
}

export default modalUI

