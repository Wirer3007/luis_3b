
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Fases from '../telas/fases';
import Home from '../telas/home';
import Cor from '../telas/cor';
import FaseOne from '../telas/fase1';

const Tab = createBottomTabNavigator();

export default function Menu({
    menu,
    setMenu,
    faseOne,
    setFaseOne
}) {

    console.log("Teste Menu");

    // Se a fase 1 estiver ativa, mostra a fase
    if (faseOne) {
        return (
            <FaseOne
                menu={menu}
                setMenu={setMenu}
                setFaseOne={setFaseOne}
            />
        );
    }

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >

                <Tab.Screen
                    name="Menu"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="home-outline"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />

                <Tab.Screen
                    name="Fases"
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="game-controller-outline"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                >
                    {() => (
                        <Fases
                            setMenu={setMenu}
                            setFaseOne={setFaseOne}
                        />
                    )}
                </Tab.Screen>

                <Tab.Screen
                    name="Color"
                    component={Cor}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons
                                name="color-palette-outline"
                                size={size}
                                color={color}
                            />
                        )
                    }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}
