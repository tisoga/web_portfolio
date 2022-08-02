export const GETDATALANG = 'GETDATALANG'
export const GETSKILLLIST = 'GETSKILLLIST'
export const GETPORTFOLIOSETTINGS = 'GETPORTFOLIOSETTINGS'
export const SETPORTFOLIODATA = 'SETPORTFOLIODATA'
export const SETTRANSLATIONDATA = 'SETTRANSLATIONDATA'
export const GETABOUTME = 'GETABOUTME'

export const getDataLang = (data) => {
    return {
        type: GETDATALANG,
        payload: data
    }
}

export const getSkillList = (data) => {
    return {
        type: GETSKILLLIST,
        payload: data
    }
}

export const getPortfolioSettings = (data) => {
    return {
        type: GETPORTFOLIOSETTINGS,
        payload: data
    }
}

export const setPortfolioData = (data) => {
    return {
        type: SETPORTFOLIODATA,
        payload: data
    }
}

export const setTranslationData = (id, data) => {
    const combine = {
        id, data
    }
    return {
        type: SETTRANSLATIONDATA,
        payload: combine
    }
}

export const getAboutme = (data) => {
    return {
        type: GETABOUTME,
        payload: data
    }
}