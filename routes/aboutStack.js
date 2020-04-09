import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import React from 'react';

import { About } from '../screens/About';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                header: () => <Header navigation={navigation} title='About GameZone'/>
            }
        }
    }
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTint: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 70
        }
    }
});

export default AboutStack;