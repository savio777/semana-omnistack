import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import Login from './pages/Login'
import Main from './pages/Main'

const Routes = createAppContainer(
    createSwitchNavigator({
        Login: {
            screen: Login
        },
        Main: {
            screen: Main
        }
    })
)

export default Routes
