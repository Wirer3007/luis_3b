
import { Accelerometer } from 'expo-sensors';
import { View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import Estilos from '../styles/Estilos';

export default function FaseOne({
    menu,
    setMenu,
    setFaseOne
}) {

    console.log("Teste Fase 1");

    const [dados, setDados] = useState({
        x: 0,
        y: 0,
        z: 0
    });

    const [posicao, setPosicao] = useState({
        x: 100,
        y: 100
    });

    const obstaculos = [
    {
        x: 150,
        y: 200,
        largura: 100,
        altura: 30
    },
    {
        x: 50,
        y: 350,
        largura: 150,
        altura: 30
    },
    {
        x: 250,
        y: 500,
        largura: 30,
        altura: 120}];

    const porta = {
    x: 300,
    y: 100,
    largura: 50,
    altura: 70
};

    useEffect(() => {

        Accelerometer.setUpdateInterval(50);

        const subscription = Accelerometer.addListener((data) => {

            setDados(data);

            setPosicao((posicaoAtual) => {

                let novoX = posicaoAtual.x - data.x * 5;
                let novoY = posicaoAtual.y + data.y * 5;

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
            style ={Estilos.botaoVoltar}
                onPress={() => {
                    setFaseOne(false);
                    setMenu(true);
                }}
            >
                <Text>
                    Sair 
                </Text>
            </TouchableOpacity>

            <View style={[
                 Estilos.obstaculoS,{
                        left: posicao.x,
                        top: posicao.y,    }
                        
                    ]}>
                {obstaculos}
            </View>

            <View
                style={[
                    Estilos.bolinha,
                    {
                        left: posicao.x,
                        top: posicao.y,
                        
                    }
                ]}
            />

        </View>

    );
}