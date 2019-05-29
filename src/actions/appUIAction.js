export const manageSideNavCollapse = () => {
    return dispatch => {
        dispatch({
            type: 'MANAGE_SIDENAV_COLLAPSE'
        })
    }
}