import React from 'react';
import Hero from './sections/header/Hero';
import Navbar from './sections/header/Navbar';
import About from './sections/main-content/about/About';
import ProjectList from './sections/main-content/projects/ProjectList';
import Contact from './sections/main-content/contact/Contact';
import Footer from './sections/main-content/footer/Footer';
import Skills from './sections/main-content/about/Skills';

function App() {
	return (
		<div>
			<Hero />
			<Navbar />
			<About />
			<ProjectList />
			<Skills />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
