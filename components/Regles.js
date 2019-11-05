import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

export default function Regles() {
  return (
    <View style={styles.container}>
        <Image style={styles.image}
            source={require('../assets/logo.png')} />

        <Text style={styles.title}>G S O A F</Text>
        <ScrollView style={styles.containerScroll}>
            <Text style={styles.text}>Bonjour, et Bienvenue Dans Cette Application pour Soiffard,
                                        Dans cette application vous retrouverez le jeu de la pyramide,
                                        Mais aussi d'autres Jeux pour se murger la gueule salement ! {'\n'}
                                        Mais pas tout de suite vu qu'on travaille dessus
            </Text>
            <Text style={styles.title2}>{'\n'}{'\n'}Les Règles Sont Simples !</Text>
            <Text style={styles.text}>"La Pyramide" , avant de commencer à jouer, il va falloir créer une pyramide avec des carte (trop fou, personne s’en doutais je pense).{'\n'}
                  Commence avec une base de 5 cartes, c’est pas mal pour commencer ce jeu ! {'\n'}
                  Si tu connais déjà et que tu viens sur l'appli juste pour te rappeler les règles, fait toi plaisir avec les cartes 😉.{'\n'}
                  On te conseille un jeu de 52 cartes (éviter le 34 cartes si vous êtes au moins 3 à jouer).{'\n'}
                  Au début de la partie il faut distibuer des cartes aux joueurs pour çail faut donc poser des questions !{'\n'}
                  Pour la première carte : rouge ou noir -> 1 gorgée{'\n'}
                  Deuxième carte : plus ou moins (par rapport à la première) -> 2 gorgées{'\n'}
                  Troisième carete : inter ou exter (par rapport aux 2 cartes précédentes) ->3 gorgées{'\n'}
                  (Si c’est la même il boit (après tout on est là pour ça!!)
                  Quatrième carte : coeur, carreau, pique ou trèfle -> 4 gorgées{'\n'}

                  Ensuite on construit une pyramide de carte retourné.Puis on les retourne une à une (Voir la premiere photo en bas),{'\n'}
                  Si vous avez le meme numéro vous pouvez donner des gorgées en fonction de la hauteur si c'est la premiere base ->1 gorgée, deuxième base -> 2 gorgées, etc ...{'\n'}
                  (Voir photo n°2 en bas )</Text>
                  <Image style={styles.imgPyra} source={require('../assets/pyramide_p1.jpg')} />
                  <Image style={styles.imgPyra2} source={require('../assets/img_Pyra2.jpg')} />
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex' ,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titre: {
      
        marginTop: 50,
    },
    title: {
        color: 'white',
    },
    title2: {
        fontSize: 21,
        color: '#FFB341',
        textAlign: 'center',
    },
    text:{
        marginTop: 50,
        color: 'white',
        fontSize: 17,
        textAlign: 'center',
    },
    image: {
        marginTop:75,
        width: 200,
        height: 75,
        resizeMode: 'stretch'
    },
    imgPyra:{
        marginTop: 20,
        width: 300,
        height: 150,
        justifyContent: "center",
    },
    imgPyra2:{
        marginTop: 20,
        width: 300,
        height: 150,
        justifyContent: "center",
    },
    containerScroll: {
        marginTop: 25,
        marginBottom: 50,
        // backgroundColor:'red',
        width: 305,
        textAlign: 'center',
    },

});