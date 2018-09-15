# Pushover notifications for Porla

The Pushover plugin for Porla enables easy notifications for any event. It
supports Mustache templating for your messages.


## Usage

```js
const { Porla } = require('@porla/porla');
const pushover = require('@porla-contrib/pushover')('AppToken', 'UserToken');

const app = new Porla();

app.subscribe('torrent.added', [
    pushover('Torrent {{ name }} added')
]);
```