import {CommonActions} from '@react-navigation/native';

// models
import {NavigationProps} from '@models/Splash';

export function useSplashViewModel({navigation}: NavigationProps) {
  const redirectionPage = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Transactions'}],
      }),
    );
  };

  return {redirectionPage};
}
