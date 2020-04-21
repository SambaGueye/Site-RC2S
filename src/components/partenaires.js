import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Ucad from './img/partenaires/ucad.jpg';
import aims from './img/partenaires/aims.png';
import am from './img/partenaires/am.jpg';
import asf from './img/partenaires/afstech.png';
import anr from './img/partenaires/anrsa.png';
import uni from './img/partenaires/uni-grenoble.png';
import cese from './img/partenaires/cese.png';
import min from './img/partenaires/mini-ens-sup.png';
import acep from './img/partenaires/asepma.png';




class partenaires extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div className="bor">
                            <img src={Ucad} /> 
                            <h4>Université Cheikh Anta DIOP de Dakar</h4>
                        </div>
                   </Cell>
                   <Cell col={4}>
                       <div className="bor">
                            <img src={aims} style={{width:"300px", height:"200px"}} /> 
                            <h4>African Instutute for Mathematical Sciences</h4>
                        </div>
                   </Cell>
                   <Cell col={4}>
                       <div className="bor">
                            <img src={am} style={{width:"350px", height:"200px"}} /> 
                            <h4>Ambassade de France au Sénégal</h4>
                        </div>
                   </Cell>
                   
                </Grid> 
               <Grid>
                   <Cell col={4}>
                        <div className="bor">
                            <img src={asf} style={{width:"300px", height:"140px"}} /> 
                            <h4>Association des Femmes pour la Promotion des Sciences et de la Technologie au Sénégal</h4>
                        </div>
                   </Cell>
                   <Cell col={4}>
                        <div className="bor">
                            <img src={anr} style={{width:"300px", height:"170px"}} /> 
                            <h4>Agence Nationale de la Recherche Scientifique Appliquée</h4>
                        </div>
                   </Cell>
                   <Cell col={4}>
                         <div className="bor">
                            <img src={uni} style={{width:"300px", height:"200px"}} /> 
                            <h4>Universite de Grenoble Alpes</h4>
                        </div>
                   </Cell>
                </Grid> 
               <Grid>
                   <Cell col={4}>
                        <div className="bor">
                            <img src={cese} style={{width:"350px", height:"200px"}} /> 
                            <h4>Le Conseil Economique Social et Environnemental (CESE)</h4>
                        </div>
                   </Cell>
                   <Cell col={4}>
                         <div className="bor">
                            <img src={min} style={{width:"350px", height:"235px"}} /> 
                            <h4>Ministère de l'Eudcation Nationale</h4>
                        </div>
                   </Cell>
                   <Cell col={4}>
                        <div className="bor">
                            <img src={acep} style={{width:"350px", height:"170px"}} /> 
                            <h4>l’ASEPMA (Association Sénégalaise des Élevés pour la Promotion des Métiers de l’Aéronautique)</h4>
                        </div>
                   </Cell>
                </Grid> 
            </div>
        );
    }
}

export default partenaires;