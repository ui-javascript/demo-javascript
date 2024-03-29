// Based on prettyDate by John Resig (MIT license)
Date.prototype.__defineGetter__('ago', function() {
  var diff = (((new Date()).getTime() - this.getTime()) / 1000),
    day_diff = Math.floor(diff / 86400);

  return day_diff == 0 && (
      diff < 60 && "just now" ||
      diff < 120 && "1 minute ago" ||
      diff < 3600 && Math.floor(diff / 60) + " minutes ago" ||
      diff < 7200 && "1 hour ago" ||
      diff < 86400 && Math.floor(diff / 3600) + " hours ago") ||
    day_diff == 1 && "Yesterday" ||
    day_diff < 7 && day_diff + " days ago" ||
    Math.ceil(day_diff / 7) + " weeks ago";
});

var a = new Date('12/25/2017');
console.log(a.ago); // 1360 weeks ago
