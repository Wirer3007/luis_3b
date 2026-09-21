import { Accelerometer } from 'expo-sensors';
import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Estilos from '../styles/Estilos';

export default function FaseOne({ setMenu, setFaseOne }) {

    

    const [dados, setDados] = useState({
        x: 0,
        y: 0,
        z: 0
    });

    const [posicao, setPosicao] = useState({
        x: 100,
        y: 100
    });

    useEffect(() => {

        Accelerometer.setUpdateInterval(50);

        const subscription = Accelerometer.addListener((data) => {

            setDados(data);

            setPosicao((posicaoAtual) => {

                let novoX = posicaoAtual.x - data.x * 5;
                let novoY = posicaoAtual.y + data.y * 5;

                // Limites da área
                novoX = Math.max(0, Math.min(345, novoX));
                novoY = Math.max(0, Math.min(692, novoY));

                return {
                    x: novoX,
                    y: novoY
                };

            });

        });

        return () => {
            subscription.remove();
        };

    }, []);

    

    return (
        
            
                  

                     
            <View style={Estilos.area}>

                 <TouchableOpacity
                        onPress={() => {
                            setFaseOne(false);
                        setMenu(true);
                                }}
                    >
                        <Text>Voltar</Text>
                    </TouchableOpacity> 


                <View
                    style={[
                        Estilos.bolinha,
                        {
                            left: posicao.x,
                            top: posicao.y
                        }
                    ]}
                />

            </View>
    );
}