import {Image} from 'react-native';

function LogoTitle() {
    return (
      <Image 
        style={{ width: 110, height: 55, marginRight: 5}}
        source={require("./assets/ROI-icon.png")}
      />
    );
}

const NavigationStyles = {
    cardStyle: {
      backgroundColor: 'red',
    },
    headerStyle: {
        backgroundColor: '#595959',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontFamily: 'Trebuchet MS',
        fontSize: '30px'
    },
    headerRight: (props) => <LogoTitle {...props} />,
}

export default NavigationStyles;