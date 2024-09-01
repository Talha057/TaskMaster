import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useDispatch} from 'react-redux';
// import {store} from './src/store';
import RootStack from './src/stack';

const App: React.FC = () => {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
    // </Provider>
  );
};

export default App;
