import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Menu from './telas/menu';
import { useEffect, useState } from 'react';

export default function App() {

const [menu, setMenu] = useState(true);
const [faseOne, setFaseOne] = useState(false);
const [faseTwo, setFaseTwo] = useState(false);
const [faseThree, setFaseThree] = useState(false);

  return (
    <Menu
            menu={menu}
            setMenu={setMenu}
            faseOne={faseOne}
            setFaseOne={setFaseOne}
            faseTwo={faseTwo}
            setFaseTwo={setFaseTwo}
            faseThree={faseThree}
            setFaseThree={setFaseThree}
        />
    
  );
}