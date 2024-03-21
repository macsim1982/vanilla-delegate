<h1 align="center">Welcome to vanilla-delegate 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/vanilla-delegate" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/vanilla-delegate.svg">
  </a>
  <a href="https://github.com/macsim1982/vanilla-delegate#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/macsim1982/vanilla-delegate/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/macsim1982/vanilla-delegate/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/macsim1982/vanilla-delegate" />
  </a>
</p>

> Simple vanilla js event delegation that can be destroy trigger once and use native event

### 🏠 [Homepage](https://github.com/macsim1982/vanilla-delegate#readme)

## Install

```sh
yarn install
```

## Usage
Simple and light lib to delegate events.

Instead of binding lot of events of repeated items on a page, you can deleagte those events by using this simple function.
It only apply on a wanted element and parcour all it children finding the matching selectors and propaging events for thoses targets.
The callback function return an DelegateEvent similar to nativeEvent except the delegateTarget which must be used instead of target or currentTarget. It always match the selector.


Simple use case:

```javascript
/**
 * Bind given callback onto existing and upcoming elements matching the given
 * selector, for events of type eType.
 * Use e.delegateTarget instead of e.target in the callback function to get the HTMLElement representative of selector
 *
 * @param {HTMLElement} $container HTMLElement into which to apply Selector
 * @param {String} selector Selector matching HTMLElements onto which the callback will be bind
 * @param {String} eType String event or list of events seperated by , (ex: 'touchstart,touchmove,touchend')
 * @param {Function} callback Function to execute when catching the event
 * @param {boolean} useCapture Boolean that dertemine if the event must use capture or not (default: false)
 * @param {boolean} once Boolean that dertemine if the event must trigger only once
 * @returns {{delegate: Function, undelegate: Function}|void}
 */
delegate(
    $container,
    '.selector',
    'click',
    ({delegateTarget, ...e}) => {
        console.log('target', delegateTarget, e.type); 
    },
);
```

Undelegate Event:

```javascript
const instance = delegate(
    $container, // HTMLElement
    '.selector', // Selector
    'click', // Event
    ({delegateTarget, ...e}) => {
        console.log('target', delegateTarget, e.type); 
    }, // callback function
);

// When you need to remove the event..
instance.undelegate();


// You can alose delegate the event if need to rebind after that (be careful, you need to check if event is already binded to avoid multiple binding of the same function !)
instance.delegate();
```

## Author

👤 **Maxime Lerouge**

* Website:  
* Github: [@macsim1982](https://github.com/macsim1982)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/macsim1982/vanilla-delegate/issues). You can also take a look at the [contributing guide]( ).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [Maxime Lerouge](https://github.com/macsim1982).<br />
This project is [MIT](https://github.com/macsim1982/vanilla-delegate/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
