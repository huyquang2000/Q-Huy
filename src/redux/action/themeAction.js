export const SWITCH_THEME = "SWITCH_THEME";

export const switchTheme = (theme) => {
    return (dispatch) => {
        dispatch({
            type: SWITCH_THEME,
            payload: theme,
        });
    };
}