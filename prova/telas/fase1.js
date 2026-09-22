import { Accelerometer } from 'expo-sensors';
import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Estilos from '../styles/Estilos';
import { pegarCor } from '../telas/funcCores';

export default function FaseOne({
    menu,
    setMenu,
    setFaseOne
}) {

    const [dados, setDados] = useState({
        x: 0,
        y: 0,
        z: 0
    });

    const [posicao, setPosicao] = useState({
        x: 100,
        y: 100
    });

    const [cor, setCor] = useState(pegarCor());

    useEffect(() => {

        Accelerometer.setUpdateInterval(50);

        const subscription = Accelerometer.addListener((data) => {

            setDados(data);

            setPosicao((posicaoAtual) => {

                let novoX = posicaoAtual.x - data.x * 5;
                let novoY = posicaoAtual.y + data.y * 5;

                novoX = Math.max(0, Math.min(345, novoX));
                novoY = Math.max(0, Math.min(692, novoY));

                
                if (
                    novoX >= 150 &&
                    novoX <= 250 &&
                    novoY >= 320 &&
                    novoY <= 360
                ) {
                    novoX = 175;
                    novoY = 10;
                }

                
                if (
                    novoX >= 50 &&
                    novoX <= 150 &&
                    novoY >= 450 &&
                    novoY <= 490
                ) {
                    novoX = 175;
                    novoY = 10;
                }

               
                if (
                    novoX >= 250 &&
                    novoX <= 330 &&
                    novoY >= 550 &&
                    novoY <= 590
                ) {
                    novoX = 175;
                    novoY = 10;
                }
                if (
                        novoX >= 170 &&
                        novoX <= 230 &&
                        novoY >= 650 &&
                        novoY <= 750
                    ) {
                        alert("Você ganhou!");
                    }

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

           
            <View style={Estilos.obstaculo1} />

            <View style={Estilos.obstaculo2} />

            <View style={Estilos.obstaculo3} />

             <View style={Estilos.porta} />

            <TouchableOpacity
                style={Estilos.botaoVoltar}
                onPress={() => {
                    setFaseOne(false);
                    setMenu(true);
                }}
            >
                <Text>
                    Sair
                </Text>
            </TouchableOpacity>

            <View
                style={[
                    Estilos.bolinha,
                    {
                        left: posicao.x,
                        top: posicao.y,
                        backgroundColor: cor
                    }
                ]}
            />

        </View>

    );
}