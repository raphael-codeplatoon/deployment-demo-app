import './App.css';
import { useState, useEffect } from 'react';
import AppNav from './components/AppNav.js';
import navItems from './data/navItems.json';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage';
import Preferences from './pages/Preferences';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { whoAmI, getPreferences, PreferencesContext } from './utils/utils.js';


function App(props) {
	
	const [appState, setAppState] = useState({})
	const [preference, setPreference] = useState('')
	useEffect(()=>{
		whoAmI(setAppState)
		getPreferences().then((val)=>{
			setPreference(val)
		})
	  }, [])

	return (
		<div className="App">
			<PreferencesContext.Provider value={preference}>

				<AppNav navItems={navItems} appState={appState} setAppState={setAppState} handleNavClick={(clickedItem) => console.log(clickedItem)} />
				<Router>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/articles/:articleID" element={<ArticlePage />} />
						<Route path="/sections/:sectionID" element={<SectionPage />} />
						<Route path="/signup" element={<Signup appState={appState} setAppState={setAppState}/>}></Route>
						<Route path="/login" element={<Login appState={appState} setAppState={setAppState}/>}></Route>
						<Route path="/preferences" element={<Preferences appState={appState} setAppState={setAppState}/>}></Route>
					</Routes>      
				</Router>
			</PreferencesContext.Provider >
		</div>
	);
}

export default App;
