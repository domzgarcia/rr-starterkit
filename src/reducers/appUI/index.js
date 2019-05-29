const initialState = {
    isCollapsed: true,
}

const appUI = (state=initialState, {type, payload}) => {
    switch(type){
        case 'MANAGE_SIDENAV_COLLAPSE': 
        return {
            ...state,
            isCollapsed: !state.isCollapsed }
        
        default: 
            return state
    }
}

export default appUI

