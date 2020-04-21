import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class agenda extends Component{
    render(){
        return(
            <div>
                <Grid >
                    <Cell col={7}>
                            <h3>Feuilles de route 2020</h3>
                            <ol>1- Développer l’efficacité, l’attractivité et la visibilité des actions  Donner plus d’importance aux thèmes suggérés par les parties prenantes du RC2S : numérique et diversité. Rendre le RC2S plus visible par une utilisation des réseaux sociaux, des témoignages des élèves et/ou professeurs et par des communiqués des entreprises.</ol>
                            <ol>2- Développer les partenariats avec les entreprises Pour contribuer à la réalisation des objectifs et au financement nécessaire à la croissance du Réseau des Clubs Sciences.  Être à leur écoute par des échanges réguliers : mise en place d’une assemblée des partenaires.  Donner plus de place aux PME.</ol>
                            <ol>3- Couvrir le territoire national  S’appuyer sur un réseau de correspondants dans les académies.  Intégrer de nouveaux coordonnateurs Régionaux dans la structure (en s’appuyant sur des Bénévoles).</ol> 
                            <br/>                      
                            <br/>                      
                            <br/>                      
                            <br/>                      
                            <br/>                      
                            <br/>                      
                            <br/>                      
                            <br/>                      
                            <br/>                      
                            <br/>                      
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default agenda;