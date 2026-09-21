
import { Text, View, TouchableOpacity } from 'react-native';
import Estilos from '../styles/Estilos';

export default function Fases({
    setMenu,
    setFaseOne,
}) {

    console.log("Teste Fases");

    return (
        <View style={Estilos.telaI}>

            <View style={Estilos.tituloF}>
                <Text style={Estilos.TituloF}>
                    Levels
                </Text>
            </View>

            <View style={Estilos.listaFases}>

                <TouchableOpacity
                    style={Estilos.level}
                    onPress={() => {
                        setMenu(false);
                        setFaseOne(true);
                    }}
                >
                    <Text style={Estilos.textoFase}>
                        Level 1 ▶
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Estilos.level}
                >
                    <Text style={Estilos.textoFase}>
                        Level 2 ▶
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Estilos.level}
                >
                    <Text style={Estilos.textoFase}>
                        Level 3 ▶
                    </Text>
                </TouchableOpacity>

                <View style={Estilos.levelBloqueado}>
                    <Text style={Estilos.textoBloqueado}>
                        Level 4
                    </Text>
                </View>

                <View style={Estilos.levelBloqueado}>
                    <Text style={Estilos.textoBloqueado}>
                        Level 5
                    </Text>
                </View>

                <View style={Estilos.levelBloqueado}>
                    <Text style={Estilos.textoBloqueado}>
                        Level 6
                    </Text>
                </View>

                <View style={Estilos.levelBloqueado}>
                    <Text style={Estilos.textoBloqueado}>
                        Level 7
                    </Text>
                </View>

                <View style={Estilos.levelBloqueado}>
                    <Text style={Estilos.textoBloqueado}>
                        Level 8
                    </Text>
                </View>

                <View style={Estilos.levelBloqueado}>
                    <Text style={Estilos.textoBloqueado}>
                        Level 9
                    </Text>
                </View>

            </View>

        </View>
    );
}


