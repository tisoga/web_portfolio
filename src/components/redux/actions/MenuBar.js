export const TOGGLEMENU = 'TOGGLEMENU';
export const TOGGLELANG = 'TOGGLELANG';
export const SETLANG = 'SETLANG';

export const toggleMenu = () => {
    return {
        type: TOGGLEMENU,
    }
}

export const toggleLang = () => {
    return {
        type: TOGGLELANG,
    }
}

export const setLang = (val) => {
    return {
        type: SETLANG,
        payload: val
    }
}