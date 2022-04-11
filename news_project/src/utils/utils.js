import axios from 'axios'
import { createContext } from 'react';

function formatTime(time){
    let dateObj = new Date(time * 1000)
    return dateObj.toLocaleDateString()
}

const getCSRFToken = ()=>{
    let csrfToken

    console.log(document.cookie)
    // the browser's cookies for this page are all in one string, separated by semi-colons
    const cookies = document.cookie.split(';')
    for ( let cookie of cookies ) {
        console.log(cookie)
        // individual cookies have their key and value separated by an equal sign
        const crumbs = cookie.split('=')
        if ( crumbs[0].trim() === 'csrftoken') {
            csrfToken = crumbs[1]
        }
    }
    return csrfToken
}
axios.defaults.headers.common['X-CSRFToken'] = getCSRFToken()

const logOut = async (setAppState)=>{
    const response = await axios.post('/logout')
    whoAmI(setAppState)
}

const whoAmI = async (setAppState)=>{
    const response = await axios.get('/whoami')
    const user = response.data && response.data[0] && response.data[0].fields
    setAppState((currentState)=>{
        return {
            ...currentState,
            user: user,
        }
    })
}

const getPreferences = async (setAppState)=>{
    const response = await axios.get('/preferences')
    const colorPref = response.data && response.data[0] && response.data[0].fields.value
    return colorPref
}


const PreferencesContext = createContext('light');


export {
    formatTime,
    getCSRFToken,
    logOut,
    whoAmI,
    getPreferences,
    PreferencesContext,
}