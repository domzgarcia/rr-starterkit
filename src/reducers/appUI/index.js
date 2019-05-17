const initialState = {
    isPopupOpen: false,
}

const appUI = (state=initialState, {type, payload}) => {
    switch(type){
        case 'POPUP_TRIGGERED': 
        return {
            ...state,
            isPopupOpen: payload.bool}
        
        default: 
            return state
    }
}

export default appUI

