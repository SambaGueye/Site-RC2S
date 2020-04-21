import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class footer extends Component{
    render(){
        return(
            <div>
               <Grid className="foot"> 
                   <Cell col={4} >
                       <p>Réseau des Clubs Scientifiques du Sénégal</p>
                       <p>Au service de la science partout au Sénégal</p>
                       <p>CopyRight @avril_2020</p>
                   </Cell>
                   <Cell col={4} >
                   
                   </Cell>
                   <Cell col={4} >
                       <p>Vous pouvez nous contacter par mail: rc2s2020@gmail.com</p>
                       
                       <p>Téléphone: +221 77 777 33 44</p>

                       <p>Vous pouves nous suivre sur les réseaux sociaux:</p>
                       <a href="http://google.com" target="_blank" ><i class="fab fa-instagram"/></a>
                       <a href="http://google.com" target="_blank"><i class="fab fa-youtube"></i></a>
                       <a href="http://google.com" target="_blank"><i class="fab fa-facebook-square"></i></a>
                       <a href="http://google.com" target="_blank"><i class="fab fa-twitter-square"></i></a>
                   </Cell>
               </Grid>
            </div>
        );
    }
}

export default footer;