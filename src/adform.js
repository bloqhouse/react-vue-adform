module.exports = function (params) {
  (function (w, d) {
    w._adftrack = Array.isArray(w._adftrack) ? w._adftrack : (w._adftrack ? [w._adftrack] : []);
    w._adftrack.push({ ...params });
    var s = d.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://track.adform.net/serving/scripts/trackpoint/async/';
    var x = d.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  })(window, document);
};
