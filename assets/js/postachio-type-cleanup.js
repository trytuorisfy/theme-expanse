$(document).ready(function(){

  // DON'T COMMENT THIS OUT UNTIL OUR PARSER IS FIXED

  // get elements with data-type-cleanup attribute
  var content = $('[data-type-cleanup="true"]');

  // regex
  var checks = [
    /&nbsp;/gi,                                 // non-breaking spaces
    /<div><br><\/div>/gi,                       // divs with just br's inside
    /<p><br><\/p>/gi,                           // ps with just br's inside
    /<div><\/div>/gi,                           // empty divs
    /<div><span><br><\/span><\/div>/gi,         // divs with span and br inside
    /<div><b><br><\/b><\/div>/gi,               // divs with bold and br inside
    /<div><br clear=\"none\"><\/div>/gi,        // divs with br and clear inside
    /<em><\/em>/gi,                             // empty em's
    /<div><strong><br><\/strong><\/div>/gi,     // divs with strongs and br
    /<p><br clear=\"none\"><\/p>/gi             // ps with br and clear inside    
  ];

  // do checks on each content item
  content.each(function(index, el){

    // get html
    var el = $(el);
    var str = el.html();

    // perform each check in checks array
    for(i=0;i<checks.length;++i) {
      str = str.replace(checks[i], '');
    }

    // add clean html
    el.html(str);

    // make tables only 100% wide in their containers
    el.find('table').css({ width: '100%' });
  });

});
