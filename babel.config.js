module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@viewModels': './src/viewModels',
          '@models': './src/models',
          '@theme': './src/theme',
          '@stores': './src/stores',
          '@slices': './src/slices',
          '@services': './src/services',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
