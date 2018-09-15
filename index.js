const Mustache = require('mustache');
const request = require('request');

const url = 'https://api.pushover.net/1/messages.json';

module.exports = (token, user) => {
    return function pushover(message, options) {
        const parsedOptions = options || {};

        return function push(item) {
            const renderedMessage = Mustache.render(message, item);

            return new Promise((resolve, reject) => {
                const requestOptions = {
                    json: true,
                    body: {
                        token: token,
                        user: user,
                        title: parsedOptions.title || 'Porla',
                        message: renderedMessage
                    }
                };

                request.post(url, requestOptions, (err) => {
                    if (err) {
                        return reject(err);
                    }

                    return resolve();
                });
            });
        }
    }
};
