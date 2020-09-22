import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList105409Navigator from '../features/ArticleList105409/navigator';
import ArticleList105408Navigator from '../features/ArticleList105408/navigator';
import ArticleList105407Navigator from '../features/ArticleList105407/navigator';
import BlankScreen0105406Navigator from '../features/BlankScreen0105406/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList105409: { screen: ArticleList105409Navigator },
ArticleList105408: { screen: ArticleList105408Navigator },
ArticleList105407: { screen: ArticleList105407Navigator },
BlankScreen0105406: { screen: BlankScreen0105406Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
