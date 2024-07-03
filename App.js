// ////Exemplo 2 

// ////Em forma de classes
import React, {Component} from "react";
import { View, Text, Image } from "react-native";

class App extends Component{
    render(){

        let curso = 'INFO';

        return(
            <View>
                <Text>Olá mundo!</Text>
                <Text>Exemplo!</Text>
                <Text style={{color: 'blue', fontSize:30, margin:15}}>Meu exemplo!</Text>

                <Image source={{uri: 'coloca a url aqui'}} style={{width:300, height:300}}/>
                {/* Image é obrigado a informar a largura e altura*/}
                <Text>{curso}</Text>

                {/*para chamar o componente*/}
                {/*<MinhaImagem  />  */}
                {/*Passando propriedades a Largura e a Altura*/}
                {/*<MinhaImagem largura={400} altura={400} nome="Imagem 1"/> */}
                
            </View>
        );
    }

} 

// //para a imagem tem que ter o https
export default App;

// //caso queira criar um componente para a img

class MinhaImagem extends Component{
    render() {

        let img = 'url da imagem';
        return(
            <View>
                <Image source={{uri: img}} style={{width: 300, height:300}}/>

               <Image source={{uri:img}} style={{width: this.props.largura, height:this.props.altura}}/>
               <Text> {this.props.nome}</Text>
            </View>
        );
    }
}
