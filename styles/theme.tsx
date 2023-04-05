import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, ColorSchemeName } from "react-native/types";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface theme {
    font: Color,
    background: Color,
    button: Color
}



export default class Theme {
    


    constructor() {
        try {
            AsyncStorage.getItem('@theme').then(resp => {
                if (resp === null) {
                    AsyncStorage.setItem('@theme', JSON.stringify(Appearance.getColorScheme()));
                }
            })
        } catch(e) {
            alert(e);
        }
    }

    async getTheme(): Promise<theme> {
        const colorPalette = await AsyncStorage.getItem('@theme');

        switch (colorPalette) {
            case 'light':
                return ({} as theme)
        
            default:
                return ({} as theme)
        }
    }
}