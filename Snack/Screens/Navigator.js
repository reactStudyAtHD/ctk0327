import {createSwitchNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Search from '~/Component/SearchResult';
import Settings from '~/Component/Settings';
import Main from '../Component/Main';

const SwipeNavigator = createSwitchNavigator({
    Main,
    Search,
    Settings,
}, {
    initialRouteName: 'Main',
});

export default createAppContainer(SwipeNavigator)
