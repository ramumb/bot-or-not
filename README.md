bot-or-not
======================

[![Build Status](https://travis-ci.org/ramumb/bot-or-not.svg?branch=master)](https://travis-ci.org/ramumb/bot-or-not)
[![Coverage Status](https://coveralls.io/repos/github/ramumb/bot-or-not/badge.svg?branch=master)](https://coveralls.io/github/ramumb/bot-or-not?branch=master)

This module checks whether a particular user agent string is from a known robot,
crawler, spider, link checker, validator, feed reader, etc.  A match for such a
user agent would result in `bot-or-not` returning a value of true.  Conversely,
a value of false would be returned if a match wasn't found for the user agent.

## Installation

  `npm install bot-or-not`

## Usage

    var botOrNot = require('bot-or-not');

    botOrNot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
    // -> true
    
    botOrNot('PSP (PlayStation Portable); 2.00');
    // -> false
    
    botOrNot('Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)');
    // -> true
    
    botOrNot('Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1');
    // -> false
    
    botOrNot('Mozilla/5.0 (X11; Linux x86_64; rv:38.0) Gecko/20100101 Thunderbird/38.2.0 Lightning/4.0.2');
    // -> true
    
    botOrNot('Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329 Twitter for iPhone');
    // -> false

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding
style. Add unit tests for any new or changed functionality. Lint and test your
code.  See the [CONTRIBUTING](CONTRIBUTING.md) file for more detailed information.
