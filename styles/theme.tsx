import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance, ColorSchemeName } from "react-native/types";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

interface theme {
    name: string,
    font: Color,
    background: Color,
    button: Color
}



export default class Theme {
    ThemeList: Array<theme>

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
        this.ThemeList = []
    }

    async getTheme(): Promise<theme> {
        const colorPalette = await AsyncStorage.getItem('@theme');

        switch (colorPalette) {
            case 'light':
                return (this.ThemeList[0])
        
            default:
                return (this.ThemeList[1])
        }
    }

    setTheme(theme:string) {
        return (AsyncStorage.setItem('@theme', theme));
    }
}