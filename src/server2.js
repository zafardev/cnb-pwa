    /*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

// Modules
const express = require('express');
const rendertron = require('rendertron-middleware');
const path = require('path');


/*
 |--------------------------------------
 | App
 |--------------------------------------
 */

const app = express();

const bots = [
    // crawler bots
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    // link bots
    'twitterbot',
    'facebookexternalhit',
    'linkedinbot',
    'embedly',
    'baiduspider',
    'pinterest',
    'slackbot',
    'vkShare',
    'facebot',
    'outbrain',
    'W3C_Validator'
];

const staticFileExtensions = [
    'ai',  'avi',  'css', 'dat',  'dmg', 'doc',     'doc',  'exe', 'flv',
    'gif', 'ico',  'iso', 'jpeg', 'jpg', 'js',      'less', 'm4a', 'm4v',
    'mov', 'mp3',  'mp4', 'mpeg', 'mpg', 'pdf',     'png',  'ppt', 'psd',
    'rar', 'rss',  'svg', 'swf',  'tif', 'torrent', 'ttf',  'txt', 'wav',
    'wmv', 'woff', 'xls', 'xml',  'zip', 'json', 'html'
  ];

app.use(rendertron.makeMiddleware({
  proxyUrl: 'https://rendertron-app-cnb.appspot.com/render',
  userAgentPattern: new RegExp(bots.join('|'), 'i'),
  excludeUrlPattern: new RegExp(`\\.(${staticFileExtensions.join('|')})$`, 'i')
}));


// Set port
const port = process.env.PORT || '8083';
app.set('port', port);

// Set static path to Angular app in dist
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
  app.use('/', express.static(path.join(__dirname, '/')));
}

// Pass routing to Angular app
// Don't run in dev
if (process.env.NODE_ENV !== 'dev') {
    console.log('here=')   
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './index.html'));
  });
}

/*
 |--------------------------------------
 | Server
 |--------------------------------------
 */

app.listen(port, () => console.log(`Server running on localhost:${port}`));