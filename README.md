# react-vue-adform
Small component to implement Adform into your react/vue application

# Installation
```bash
npm install react-vue-adform --save
```

```bash
yarn add react-vue-adform
```

# Use / Example
```javascript
import { adform } from 'react-vue-adform';

const params = {
  pm: 666666,
  divider: encodeURIComponent('|'),
  pagename: encodeURIComponent('Example name'),
};

adform.initialize(params);
```
- params: it's an object that should contain:
  - pm: as the adform id
  - divider: as the url divider. Example: encodeURIComponent('|')
  - pagename: as the page name. Example: encodeURIComponent('Example name')
