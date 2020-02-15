import React from 'react';
import Header from './components/Header/header.component';
import Main from './components/Main/main.component'
import About from './components/About/about.component'
import Work from './components/Work/work.component'
import Contact from './components/Contact/contact.component';
import Footer from './components/Footer/footer.component'


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
