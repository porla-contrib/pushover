# Pushover notifications for Porla

The Pushover plugin for Porla enables easy notifications for any event.

## Usage

```js
const porla    = require('@porla/porla');
const pushover = require('@porla-contrib/pushover')('AppToken', 'UserToken');

const app = porla();

app.on('torrent.added', [
    pushover('Torrent {{ torrent.name }} added')
]);
```

#### Options

The following options are supported as the last parameter of the `pushover`
function.

```js
{
    title: 'Robobot'
}
```
