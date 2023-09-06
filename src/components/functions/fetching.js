import db from "../config/firebase"
import { setLang } from "../redux/actions/MenuBar"
import { collection, doc, getDoc, getDocs, orderBy, query } from "firebase/firestore"
import { getAboutme, getDataLang, getPortfolioSettings, getSkillList, setPortfolioData } from "../redux/actions/Main"

export const fetchSelectedLang = async (dispatch) => {
    const selectedLangRef = doc(db, 'settings-data', 'lang-selected')
    const querySnapshot = await getDoc(selectedLangRef)
    const item = querySnapshot.data()
    dispatch(getDataLang(item))
}

export const fetchPortfolioSettings = async (dispatch, forceLang) => {
    const portfolioSettingRef = doc(db, 'settings-data', 'portfolio')
    const querySnapshot = await getDoc(portfolioSettingRef)
    const item = querySnapshot.data()
    let langSetting;
    const langVar = forceLang ? forceLang : item.defaultLang
    dispatch(getPortfolioSettings(item))
    switch (langVar) {
        case 'ID':
            langSetting = 'Indonesia'
            break;
        case 'IT':
            langSetting = 'Italy'
            break
        case 'ES':
            langSetting = 'Spain'
            break
        case 'EN':
        default:
            langSetting = 'English'
            break;
    }
    dispatch(setLang(langSetting))
}

export const fetchAboutMe = async (dispatch) => {
    const aboutMeRef = collection(db, 'settings-data', 'portfolio', 'about-me')
    const querySnapshot = await getDocs(aboutMeRef)
    // const items = querySnapshot.docs.map(doc => doc.data());
    const allText = {}
    querySnapshot.forEach(doc => {
        allText[doc.id] = doc.data().text
    })
    dispatch(getAboutme(allText))
}

export const fetchSkillList = async (dispatch) => {
    const skillListRef = query(collection(db, 'skill-list'), orderBy('order', 'asc'))
    const querySnapshot = await getDocs(skillListRef)
    const allSkill = []
    querySnapshot.forEach((doc) => {
        if (!doc.data().isDisabled) {
            allSkill.push({
                id: doc.id,
                ...doc.data()
            })
        }
    })
    dispatch(getSkillList(allSkill))
}

export const fetchPortfolioData = async (dispatch) => {
    const portfolioDataRef = collection(db, 'portfolio-data')
    const querySnapshot = await getDocs(portfolioDataRef)

    querySnapshot.forEach(async (doc) => {
        const translationsDoc = collection(db, 'portfolio-data', doc.id, 'translation')
        const translations = await getDocs(translationsDoc)
        const translationList = {}
        translations.forEach((item) => {
            translationList[item.id] = { ...item.data() }
        })
        const portfolioData = {
            id: doc.id,
            translation: translationList,
            ...doc.data()
        }
        // console.log('portfolioData')
        dispatch(setPortfolioData(portfolioData))
    })
}