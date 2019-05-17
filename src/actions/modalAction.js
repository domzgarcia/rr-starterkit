export const manageModal = () => {
    return dispatch => {
        dispatch({
            type: 'MANAGE_POPUP_VISIBILITY'
        })
    }
}