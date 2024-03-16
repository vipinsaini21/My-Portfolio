import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Login from './components/login/login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/admin/adminPanel';
import Timeline from './components/admin/timeline';
import Project from './components/admin/project';

function App() {
	const dispatch = useDispatch();
	const { isAuthenticated } = useSelector((state) => state.login);
	const { loading, user } = useSelector((state) => state.user);

	useEffect(() => {
		dispatch(getUser());
		dispatch(loadUser());
	}, [dispatch]);

	return (
		<Router>
			{loading ? (
				<div>Loading</div>
			) : (
				<>
					<Header />
					<Routes>
						<Route
							path='/'
							element={<Home timelines={user.timeline} skills={user.skills} />}
						/>
						<Route path='/about' element={<About about={user.about} />} />
						<Route
							path='/projects'
							element={<Projects projects={user.projects} />}
						/>
						<Route path='/contact' element={<Contact />} />
						<Route
							path='/account'
							element={isAuthenticated ? <AdminPanel /> : <Login />}
						/>
						<Route
							path='/admin/timeline'
							element={isAuthenticated ? <Timeline /> : <Login />}
						/>
						<Route
							path='/admin/project'
							element={isAuthenticated ? <Project /> : <Login />}
						/>
					</Routes>
					<Footer />
				</>
			)}
		</Router>
	);
}

export default App;
