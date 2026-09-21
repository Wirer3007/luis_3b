import { useState } from 'react';
import Menu from './telas/menu';

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
        />
    );
}