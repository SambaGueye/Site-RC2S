import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Accueil from './accueil';
import Realisation from './realisation';
import Agenda from './agenda';
import Chiffres from './chiffres';
import Contact from './contact';
import Partenaires from './partenaires';



const main = () =>(
                <Switch>
                    <Route exact path="/" component={Accueil} />
                    <Route  path="/realisation" component={Realisation} />
                    <Route  path="/agenda" component={Agenda} />
                    <Route  path="/partenaires" component={Partenaires} />
                    <Route  path="/contacts" component={Contact} />
                </Switch>
)

export default main;