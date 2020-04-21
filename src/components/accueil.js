import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import exp from './img/exp.gif';
import gify from './img/gify.gif';
import Lo from './img/image.jpeg';
import cheikh from './img/cheikh.jpg';





class accueil extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={6}>
                        <h2>Présentation du réseau:</h2>
                        <p className="para1">
                        Le Réseau des Clubs Scientifiques du Sénégal (RC2S) est une organisation nationale, apolitique, indépendante et à but non lucratif entièrement gérée par des élèves et  étudiants et par des récents diplômés du supérieur (par récents, on entend datant de moins de deux ans) et des proviseurs et professeurs. Depuis 2016, ses membres la définissent comme une « plateforme permettant aux jeunes d'explorer et de développer leur potentiel, leur ingéniosité et leur esprit de créativité et critique  ». 
                        Le réseau des clubs scientifiques du Sénégal RC2S compte plus de 3500 membres dans 12 régions du Sénégal, répartis dans plus de 90 lycées et collèges, et réalise plus de 50 journées d’animations scientifiques chaque année. Il serait la plus grande organisation regroupant des jeunes élèves et étudiants au Sénégal.
                        </p>
                    </Cell>
                    <Cell style={{border:'2px solid red', padding:'5px'}} col={6}>
                        <img src={Lo} style={{width:'300px', height:'250px', paddingTop:'10px'}}/>/><img src={exp} style={{width:'400px', height:'270px', paddingTop:'10px'}}/>
                        <p className="geo">Nul n'entre ici s'il n'est géomètre !</p>
                    </Cell>
                </Grid>
                <hr/>
                <Grid className='context-color'>
                    <Cell col={12}>
                        <h2>Contexte de Justification:</h2>
                        <p>
                        Le Réseau des Clubs Scientifiques du Sénégal (RC2S) est une organisation nationale, apolitique, indépendante et à but non lucratif entièrement gérée par des élèves et  étudiants et par des récents diplômés du supérieur (par récents, on entend datant de moins de deux ans) et des proviseurs et professeurs. Depuis 2016, ses membres la définissent comme une « plateforme permettant aux jeunes d'explorer et de développer leur potentiel, leur ingéniosité et leur esprit de créativité et critique  ». 
                        Le réseau des clubs scientifiques du Sénégal RC2S compte plus de 3500 membres dans 12 régions du Sénégal, répartis dans plus de 90 lycées et collèges, et réalise plus de 50 journées d’animations scientifiques chaque année. Il serait la plus grande organisation regroupant des jeunes élèves et étudiants au Sénégal.
                        </p>
                    </Cell>
                </Grid>
                <hr/>
                <Grid>
                    <Cell col={8}>
                    <h2>Nos objectifs:</h2>
                        <p>
                        Grâce à ses participations aux différentes Journées D’Animations Scientifiques JDAS et en sus des problèmes que rencontrent généralement les clubs scientifiques, le RC2S s’est fixé deux principaux objectifs :
                        <li>La valorisation de l'ingéniosité et la créativité scientifique (motiver la recherche et l’innovation)</li>
                        <li>L’établissement et le maintien des relations professionnelles et amicales entre les clubs.</li>
                        <li>Développer le goût des mathématiques, et la recherche de problèmes nouveaux</li>
                        <li>Préparer les élèves aux concours mathématiques nationaux et internationaux.</li>
                        <li>Encourager l'engagement des lycéens dans les filières scientifiques</li>
                        <li>Promouvoir leurs savoirs faire, tout en proposant des activités qui suscitent leurs esprits imaginatifs, inventifs, créatifs voire même innovants </li>
                        <li>Permettre aux clubs scientifiques de se côtoyer tout en facilitant leur adaptation par le biais des activités qui les regroupent en axes selon les différentes zones à travers le Sénégal.  </li>
                        <li>Instaurer un club dans tous les établissements du Sénéga</li>
                        <li>Soutenir les clubs  au plan socio-pédagogiques, moral et financier</li>
                        <li>Valoriser l'ingéniosité et la créativité scientifique  (motiver la recherche et l’innovation)</li>
                        <li>Dégager des intérêts communs qui fédèrent les clubs membres du RC2S</li>
                        </p>
                    </Cell>
                    <Cell col={4} >
                        <img src={cheikh} style={{width:'470px', height:'400px', paddingTop:'45px'}} />
                    </Cell>
                </Grid>
                <h3>Nos valeurs:</h3>
                <Grid className="val"  >
                    
                    <Cell className="eng"  col={3}>
                        <h3>Engagement:</h3>
                        <p>Nous nous investissons pleinement chaque jour pour mener à bien notre mission sociétale et respecter nos engagements. Toutes nos parties prenantes - nos partenaires, l’Etat ; les collaborateurs des entreprises, les professeurs, les élèves sont impliqués pour mener à bien les projets.</p>
                    </Cell>
                    <Cell className="gen"  col={3}>
                        <h3>Générosité:</h3>
                        <p>Elle s’exprime par le temps consacré par les volontaires ou les bénévoles participants à nos actions. La générosité des contributions financières de nos partenaires nous sont également essentielles pour pouvoir accroitre notre impact.</p>
                    </Cell>
                    <Cell className="ent"   col={3}>
                        <h3>Enthousiasme:</h3>
                        <p>C’est le plaisir de transmettre la passion pour les sciences et pour leurs métiers. Notre enthousiasme s’élève en agissant auprès des jeunes, en leur ouvrant de nouveaux horizons.</p>
                    </Cell>
                    <Cell className="couv"  col={3}>
                        <h3>Ouverture:</h3>
                        <p>Ouvrir les portes des entreprises à des publics – enseignants, élèves – qui les connaissent peu. Echanger, créer des liens. C’est aussi un esprit au sein du RC2S.</p>
                    </Cell>
                    
                </Grid>

                <Grid>
                    <Cell>
                        <h3>Nos missions:</h3>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default accueil;