import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Accueil from './screens/Accueil';
import Regles from './screens/Regles';
import CreateParty from './screens/CreateParty';

const MainNavigator = createStackNavigator({
  Accueil: {screen: Accueil},
  Regles: {screen: Regles},
  CreateParty: {screen: CreateParty},
});

const App = createAppContainer(MainNavigator);

export default App;
