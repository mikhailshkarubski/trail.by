import AboutBG from '../media/backgrounds/AboutBG.png'
import AboutBGBlack from '../media/backgrounds/AboutBGBlack.png'


const palettes = {
    light: {
        name: "light",
        backgroundImage:`url(${ AboutBG })`,
        backgroundColor: '#FFFFFF',
        textColor: '#202020',
        markedTextColor: '#00BC71',
        subtitleTextColor: '#686868',
        navLinkColor: '#000000',
        quickSearchColor: '#E2E2E2',
        cardColor: '#F2F2F2',
        buttonBackground: '#E2E2E2'
    },
    dark: {
        name: "dark",
        backgroundImage: `url(${ AboutBGBlack })`,
        backgroundColor: '#161616',
        textColor: '#FFFFFF',
        markedTextColor: '#00BC71',
        subtitleTextColor: '#8C8C8C',
        navLinkColor: '#FFFFFF',
        quickSearchColor: '#2C2C2C',
        cardColor: '#2D2D2D',
        buttonBackground: '#00BC71'
    }
}

export default palettes