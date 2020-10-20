import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Auth from './Auth';

function Navigation() {
    return (
        <NavigationContainer>
            <Auth />
        </NavigationContainer>
    );
}

export default Navigation;