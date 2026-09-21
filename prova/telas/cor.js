import { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Estilos from '../styles/Estilos';
import { escolherCor } from '../telas/funcCores';

export default function Cores() {

    const [cor, setCor] = useState('#23cdf8');

    const cores = [
        '#23cdf8',
        '#ff8585',
        '#ffdd00',
        '#7cff6b',
        '#a66cff',
        '#ff7b00',
        '#ffffff',
        '#000000',
    ];

    return (
        <View style={Estilos.telaI}>

            <View style={Estilos.tituloF}>
                <Text style={Estilos.TituloF}>Color</Text>
            </View>

            <View style={Estilos.previewCor}>
                <View
                    style={[
                        Estilos.bolinhaCor,
                        { backgroundColor: cor }
                    ]}
                />
            </View>

            <View style={Estilos.listaCores}>

                {cores.map((item) => (
                    <TouchableOpacity
                        key={item}
                        onPress={() => escolherCor(item, setCor)}
                        style={[
                            Estilos.botaoCor,
                            { backgroundColor: item }
                        ]}
                    />
                ))}

            </View>

        </View>
    );
}