import React from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';

// models
import { NavigationProps } from 'src/models/Splash';

// View Models
import {useSplashViewModel} from '@viewModels/Splash';

// assets
import LottiePlane from '@assets/lotties/lottie_plane.json';

// styles
import styles from './styles';

const SplashPage: React.FC<NavigationProps> = ({navigation}) => {
  const {redirectionPage} = useSplashViewModel({navigation});

  return (
    <View style={styles.container}>
      <LottieView
        testID="lottie-splash"
        style={styles.splash}
        source={LottiePlane}
        autoPlay
        loop={false}
        onAnimationFinish={redirectionPage}
      />
    </View>
  );
};

export default SplashPage;
