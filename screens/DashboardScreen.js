import Reack {Component} from 'react';
import{Text, View} from 'react-native';

export default class LoadingScreen extends Component {
    render(){
        return(
            <View
            style={{
                flex:1,
                justifyContent:"center";
                alignItems:"center"
            }}>
                <Text>Cargando</Text>
                </View>
        )
    }
}