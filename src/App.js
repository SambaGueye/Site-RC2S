import React from 'react';
import './App.css';
import {Layout, Navigation, Drawer, Header, Content} from 'react-mdl';
import Main from './components/main';
import Foot from './components/footer';
import {Link} from 'react-router-dom';
import Logo from './components/img/image.jpeg';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <div style={{backgroundColor:"black"}} >
            <p className="hau"> Réseau des Clubs Scientifiques du Sénégal</p>
            <p className="hau"> Au service de la science !</p>
        </div>
        <Header className="header-color" title="Réseau des Clubs Scientifiques du Sénégal" scroll>
            <Navigation>
                <Link to="/">Accueil</Link>
                <Link to="realisation">Réalisations</Link>
                <Link to="agenda">Agenda</Link>
                <Link to="partenaires">Partenaires</Link>
                <Link to="contacts">Contacts</Link>
            </Navigation>
        </Header>
        <Drawer title="Menu" style={{backgroundColor:"white"}} >
            <Navigation>
                <Link to="/">Accueil</Link>
                <Link to="realisation">Réalisations</Link>
                <Link to="agenda">Agenda</Link>
                <Link to="partenaires">Partenaires</Link>
                <Link to="contacts">Contacts</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
            <Foot/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
