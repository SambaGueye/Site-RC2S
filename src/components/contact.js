import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Lo from './img/image.jpeg';


class contact extends Component{
    render(){
        return(
            <div>
                <Grid className="body-contact" >
                    <Cell  col={6}>
                        <img src={Lo} className="img-contact"/>
                        <h3>Réseau des Clubs Scientifiques du Sénégal</h3>
                    </Cell>
                    <Cell className="parag" col={6}>
                        <h4>Gmail: rc2s2020@gmail.com</h4>
                        <h4>Téléphone: +221 77 777 77 77  /  +221 78 309 38 21</h4>
                        <h4>Vous pouves nous suivre sur les réseaux sociaux:</h4>
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

export default contact;