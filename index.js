"use strict";

var qrcode = function (req, res, next) {
    
    /**
     * Return a qrcode for put qrcode image on ejs template
     * @returns mixed
     */
    req.qrcode = function () {
        
        /**
         * Endpoint google to generate a qrcode image
         * @type String
         */
        var endpoint = "http://chart.googleapis.com/chart?";
        
        /**
         * Properties of qrcode image
         * @type Array
         */
        var properties = [];
        
        properties.push({name: 'cht', value: 'qr'});
        
        /**
         * Set dimension of image
         * @param int w width
         * @param int h height    
         */
        var setDimension = function (w, h) {
            properties.push({name: 'chs', value: w + "x" + w});
        }
        
        /**
         * Set the charset of data
         * @param String charset Charset of data
         */
        var setCharset = function (charset) {
            properties.push({name: 'choe', value: charset});
        }
        
        /**
         * Set level of loss of content and margin of image
         * @param String level Level of loss
         * @param int margin Margin of image
         */
        var setCorrectionLevel = function (level, margin) {
            properties.push({name: 'chld', value: level + "|" + margin});
        }

    }
    
    next();
}

module.exports = exports = qrcode;