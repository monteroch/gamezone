import { createStackNavigator } from 'react-navigation-stack';

import { Home } from '../screens/Home';
import { ReviewDetails } from '../screens/ReviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'GameZone'
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title: 'Review Details'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTint: '#444',
        headerStyle: {
            backgroundColor: '#eee',
            height: 70
        }
    }
});

export default HomeStack;