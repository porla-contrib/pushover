const request = require('request');
const url     = 'https://api.pushover.net/1/messages.json';

module.exports = (token, user) => {
    return function pushover(message, options) {
        const parsedOptions = options || {};

        return function push(porla, item) {
            const renderedMessage = porla.utils.renderMessage(message, item);

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
