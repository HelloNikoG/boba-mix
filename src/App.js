import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavComponent from './components/NavComponent';
import Main from './components/Main';
import AboutCard from './components/AboutCard';
import ContactCard from './components/ContactCard';
import { Row } from 'reactstrap';

function App() {
	return (
		<BrowserRouter>
			<NavComponent />
			<Routes>
				<Route path="/" exact element={<Main />} />
				<Route path="/order" element={<Main />} />
				<Route path="/whatisboba" element={<AboutCard />} />
				<Route path="/contactus" element={<ContactCard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
