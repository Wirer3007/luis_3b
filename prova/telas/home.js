import { View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Estilos from '../styles/Estilos';

export default function Home({navigation}) {

    return (
        <LinearGradient
            colors={['#b5fcfc', '#ffffff', '#f74141']}
            style={Estilos.telaI}
        >

            <View style={Estilos.tituloP}>
                <Text style={Estilos.Titulo}>
                    Welcome to Hells Paradise Game
                </Text>
            </View>

            <View style={Estilos.telaPlay}>

                <TouchableOpacity onPress={() => navigation.navigate('Fases')}>
                    <LinearGradient
                        colors={['#23cdf8', '#ff8585']}
                        style={Estilos.plaY}
                    >
                        <Text style={Estilos.playT}>Play ▶</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>

        </LinearGradient>
    );
}