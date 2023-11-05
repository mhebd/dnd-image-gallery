import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/layout/Layout';
import Gallery from './pages/Gallery';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Layout><Home /></Layout>} />
				<Route path='/gallery' element={<Layout><Gallery /></Layout>} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;
