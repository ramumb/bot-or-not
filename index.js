'use strict';

// The following list of User Agent strings are mostly from
// http://www.useragentstring.com/pages/useragentstring.php

var BOTS = [
	// CRAWLERS
	'80legs',
	'abachobot',
	'accoona-ai-agent',
	'addsugarspiderbot',
	'adsbot',
	'anyapexbot',
	'aolbuild',
	'applebot',
	'arachmo',
	'b-l-i-t-z-b-o-t',
	'baiduspider',
	'becomebot',
	'beslistbot',
	'billybobbot',
	'bimbot',
	'bingbot',
	'bitlybot',
	'blitzbot',
	'boitho.com-dc',
	'boitho.com-robot',
	'btbot',
	'catchbot',
	'cerberian drtrs',
	'charlotte',
	'converacrawler',
	'cosmos',
	'covario ids',
	'dataparksearch',
	'developers.google.com/+/web/snippet',
	'diamondbot',
	'discobot',
	'dotbot',
	'earthcom.info',
	'emeraldshield.com webbot',
	'envolk[its]spider',
	'esperanzabot',
	'exabot',
	'facebookexternalhit',
	'facebot',
	'fast enterprise crawler',
	'fast-webcrawler',
	'fdse robot',
	'findlinks',
	'flipboard',
	'furlbot',
	'fyberspider',
	'g2crawler',
	'gaisbot',
	'galaxybot',
	'geniebot',
	'gigabot',
	'girafabot',
	'googlebot',
	'googlebot-image',
	'gurujibot',
	'happyfunbot',
	'hl_ftien_spider',
	'holmes',
	'htdig',
	'iaskspider',
	'ia_archiver',
	'iccrawler',
	'ichiro',
	'igdespyder',
	'irlbot',
	'issuecrawler',
	'jaxified bot',
	'jyxobot',
	'koepabot',
	'l.webis',
	'lapozzbot',
	'larbin',
	'ldspider',
	'lexxebot',
	'linguee bot',
	'linkedinbot',
	'linkwalker',
	'lmspider',
	'lwp-trivial',
	'mabontland',
	'magpie-crawler',
	'mediapartners-google',
	'mj12bot',
	'mlbot',
	'mnogosearch',
	'mogimogi',
	'mojeekbot',
	'moreoverbot',
	'morning paper',
	'msnbot',
	'msrbot',
	'mvaclient',
	'mxbot',
	'netresearchserver',
	'netseer crawler',
	'newsgator',
	'ng-search',
	'nicebot',
	'noxtrumbot',
	'nusearch spider',
	'nutchcvs',
	'nymesis',
	'obot',
	'oegp',
	'omgilibot',
	'omniexplorer_bot',
	'oozbot',
	'orbiter',
	'outbrain',
	'pagebiteshyperbot',
	'peew',
	'pinterest',
	'polybot',
	'pompos',
	'postpost',
	'psbot',
	'pycurl',
	'qseero',
	'radian6',
	'rampybot',
	'redditbot',
	'rufusbot',
	'sandcrawler',
	'sbider',
	'scoutjet',
	'scrubby',
	'searchsight',
	'seekbot',
	'semanticdiscovery',
	'sensis web crawler',
	'seochat::bot',
	'seznambot',
	'shim-crawler',
	'shopwiki',
	'shoula robot',
	'silk',
	'sitebot',
	'slackbot',
	'snappy',
	'sogou spider',
	'sosospider',
	'speedy spider',
	'sqworm',
	'stackrambler',
	'structured-data',
	'suggybot',
	'surveybot',
	'synoobot',
	'teoma',
	'terrawizbot',
	'thesubot',
	'thumbnail.cz robot',
	'tineye',
	'truwogps',
	'tumblr',
	'turnitinbot',
	'tweetedtimes bot',
	'twengabot',
	'twitterbot',
	'updated',
	'urlfilebot',
	'vagabondo',
	'voilabot',
	'vortex',
	'voyager',
	'vyu2',
	'whatsapp',
	'webcollage',
	'websquash.com',
	'wf84',
	'wofindeich robot',
	'womlpefactory',
	'xaldon_webspider',
	'yacy',
	'yahoo! slurp',
	'yahoo! slurp china',
	'yahooseeker',
	'yahooseeker-testing',
	'yandexbot',
	'yandeximages',
	'yandexmetrika',
	'yasaklibot',
	'yeti',
	'yodaobot',
	'yooglifetchagent',
	'youdaobot',
	'zao',
	'zealbot',
	'zspider',
	'zyborg',

	// EMAIL_CLIENTS
	'thunderbird',

	// LINK_CHECKERS
	'abilogicbot',
	'link valet',
	'link validity check',
	'linkexaminer',
	'linksmanager.com_bot',
	'mojoo robot',
	'notifixious',
	'online link validator',
	'ploetz + zeller',
	'reciprocal link system pro',
	'rel link checker lite',
	'sitebar',
	'vivante link checker',
	'w3c-checklink',
	'xenu link sleuth',

	// EMAIL_COLLECTORS
	'emailsiphon',

	// VALIDATORS
	'cse html validator',
	'csscheck',
	'cynthia',
	'htmlparser',
	'p3p validator',
	'w3c_css_validator_jfouffa',
	'w3c_validator',
	'wdg_validator',

	// FEED_READERS
	'awasu',
	'bloglines',
	'everyfeed-spider',
	'feedfetcher-google',
	'greatnews',
	'gregarius',
	'magpierss',
	'nfreader',
	'universalfeedparser',

	// LIBRARIES
	'binget',
	'curl',
	'java',
	'libwww-perl',
	'microsoft url control',
	'peach',
	'php',
	'pxyscand',
	'pycurl',
	'python-urllib',

	// CLOUD_PLATFORMS
	'appengine-google',

	// OTHERS
	'!susie',
	'amaya',
	'cocoal.icio.us',
	'domainsdb.net metacrawler',
	'gpodder',
	'gsitecrawler',
	'itunes',
	'lftp',
	'metauri',
	'mt-newswatcher	',
	'nitro pdf',
	'snoopy',
	'urd-magpie',
	'webcapture',
	'windows-media-player',
];

// Production steps of ECMA-262, Edition 5, 15.4.4.17
// Reference: http://es5.github.io/#x15.4.4.17
if (!Array.prototype.some) {
  Array.prototype.some = function(func/*, thisArg*/) {
    'use strict';

    if (this == null) {
      throw new TypeError('Array.prototype.some called on null or undefined');
    }

    if (typeof func !== 'function') {
      throw new TypeError();
    }

    var t = Object(this);
    var len = t.length >>> 0;

    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    for (var i = 0; i < len; i++) {
      if (i in t && func.call(thisArg, t[i], i, t)) {
        return true;
      }
    }

    return false;
  };
};


/**
 * This checks whether the user agent is a bot or not.
 * @param {string}  A user agent string to check against
 * @return {boolean} Returns true if match otherwise false
 */

function botOrNot(userAgent) {
	userAgent = String(userAgent || '').toLowerCase();
	return BOTS.some(function(bot) {
		return userAgent.indexOf(bot) !== -1;
	});
};

module.exports = botOrNot;
