'use strict';

var expect = require('chai').expect;
var botOrNot = require('../index');

describe('#botOrNot', function() {
    it('should return false for empty string', function() {
        var result = botOrNot('');
        expect(result).to.be.false;
    });
    
    it('should return false for no arguments', function() {
        var result = botOrNot();
        expect(result).to.be.false;
    });
    
    it('should return false for undefined', function() {
        var result = botOrNot(undefined);
        expect(result).to.be.false;
    });
    
    it('should return false for null', function() {
        var result = botOrNot(null);
        expect(result).to.be.false;
    });
    
    it('should return false for false', function() {
        var result = botOrNot(false);
        expect(result).to.be.false;
    });
    
    it('should return false for true', function() {
        var result = botOrNot(true);
        expect(result).to.be.false;
    });
    
    it('should return false for object', function() {
        var result = botOrNot({});
        expect(result).to.be.false;
    });
    
    it('should return false for 1', function() {
        var result = botOrNot(1);
        expect(result).to.be.false;
    });
    
    it('should return false for Date', function() {
        var result = botOrNot(new Date());
        expect(result).to.be.false;
    });
    
    it('should return true for Facebookexternalhit', function() {
        var result = botOrNot('facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)');
        expect(result).to.be.true;
    });
    
    it('should return true for Facebot', function() {
        var result = botOrNot('facebot');
        expect(result).to.be.true;
    });
    
    it('should return true for Twitterbot', function() {
        var result = botOrNot('Mozilla/5.0 (compatible; Twitterbot/1.0)');
        expect(result).to.be.true;
    });
    
    it('should return false for Twitter for iPhone', function() {
        var result = botOrNot('Mozilla/5.0 (iPhone; CPU iPhone OS 6_1_3 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Mobile/10B329 Twitter for iPhone');
        expect(result).to.be.false;
    });
    
    it('should return false for Chrome', function() {
        var result = botOrNot('Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.36');
        expect(result).to.be.false;
    });
    
    it('should return false for BlackBerry', function() {
        var result = botOrNot('Mozilla/5.0 (BlackBerry; U; BlackBerry 9850; en-US) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.254 Mobile Safari/534.11+');
        expect(result).to.be.false;
    });
    
    it('should return true for Speedy Spider', function() {
        var result = botOrNot('Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) Speedy Spider (http://www.entireweb.com/about/search_tech/speedy_spider/)');
        expect(result).to.be.true;
    });
    
    it('should return false for PlayStation', function() {
        var result = botOrNot('PSP (PlayStation Portable); 2.00');
        expect(result).to.be.false;
    });
    
    it('should return true for Thunderbird', function() {
        var result = botOrNot('Mozilla/5.0 (X11; Linux x86_64; rv:38.0) Gecko/20100101 Thunderbird/38.2.0 Lightning/4.0.2');
        expect(result).to.be.true;
    });
    
    it('should return true for Googlebot', function() {
        var result = botOrNot('Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)');
        expect(result).to.be.true;
    });
    
    it('should return true for Baiduspider', function() {
        var result = botOrNot('Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)');
        expect(result).to.be.true;
    });
    
    it('should return true for HTMLParser', function() {
        var result = botOrNot('HTMLParser/1.6');
        expect(result).to.be.true;
    });
    
    it('should return true for PycURL', function() {
        var result = botOrNot('PycURL/7.23.1');
        expect(result).to.be.true;
    });
    
    it('should return false for Maxthon', function() {
        var result = botOrNot('Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/533.1 (KHTML, like Gecko) Maxthon/3.0.8.2 Safari/533.1');
        expect(result).to.be.false;
    });
    
    it('should return false for WebCopier', function() {
        var result = botOrNot('WebCopier v4.6');
        expect(result).to.be.false;
    });
    
    it('should return false for Opera Mini', function() {
        var result = botOrNot('Opera/9.80 (J2ME/MIDP; Opera Mini/9.80 (S60; SymbOS; Opera Mobi/23.348; U; en) Presto/2.5.25 Version/10.54');
        expect(result).to.be.false;
    });
});