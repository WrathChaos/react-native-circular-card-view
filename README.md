<img alt="React Native Circular Card View" src="https://github.com/WrathChaos/react-native-circular-card-view/blob/master/assets/logo.png" width="1050"/>


[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-circular-card-view)


[![Fully customizable Circular Card View for React Native](https://img.shields.io/badge/-Fully%20customizable%20Circular%20Card%20View%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-circular-card-view)


[![npm version](https://img.shields.io/npm/v/react-native-circular-card-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-circular-card-view)
[![npm](https://img.shields.io/npm/dt/react-native-circular-card-view.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-circular-card-view)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Circular Card View"
        src="https://github.com/WrathChaos/react-native-circular-card-view/blob/master/assets/Screenshots/example.png" width="49%" />
  <img alt="React Native Circular Card View"
        src="https://github.com/WrathChaos/react-native-circular-card-view/blob/master/assets/Screenshots/react-native-circular-card-view.gif" width="49%" />
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-circular-card-view
```

## Peer Dependencies

###### IMPORTANT! You need install them.

```
"react": ">= 16.x.x",
"react-native": ">= 0.55.x",
"react-native-androw": ">= 0.0.33",
"react-native-vector-icons": ">= 6.6.0"
"react-native-material-ripple": ">= 0.8.0",
"react-native-dynamic-vector-icons": ">= 0.2.1",
"@freakycoder/react-native-helpers": ">= 0.0.21",
```

## Import

```js
import { CircularCard } from "react-native-circular-card-view";
```

# Simple Usage 

```jsx
<CircularCard />
```


# Advanced Custom Usage 

Please check the example for the custom usage

```jsx
<CircularCard
  title={title}
  price={price}
  color={color}
  source={image}
  priceText={price}
  description={description}
  rippleColor={rippleColor}
/>
```


### Configuration - Props

| Property         |     Type     |      Default      | Description                             |
| ---------------- | :----------: | :---------------: | --------------------------------------- |
| title            |    string    |  check the code   | set the title                           |
| description      |    string    |  check the code   | set the description                     |
| priceText        |    string    |  check the code   | set the right bottom text               |
| width            |    number    | ScreenWidth * 0.9 | change the card's width                 |
| height           |    number    |        125        | change the card's height                |
| source           | string (uri) |  Unsplash String  | set the image source as uri             |
| shadowColor      |    color     |       #000        | change the card's shadow color          |
| backgroundColor  |    color     |      #fcfcfc      | change the card's main background color |
| iconOnPress      |   function   |       null        | set the icon onPress function           |
| imageStyle       |    style     |       style       | set your own style for image            |
| titleStyle       |    style     |       style       | set your own style for title            |
| priceStyle       |    style     |       style       | set your own style for price            |
| shadowStyle      |    style     |       style       | set your own style for shadow           |
| descriptionStyle |    style     |       style       | set your own style for description      |


### ToDos

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

# Credits

I could not find the artist of this design, please find me :) 


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Circular Card View is available under the MIT license. See the LICENSE file for more info.
