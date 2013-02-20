/* 
 * 
 * Your main.js code
 * 
 */

// Avoid `console` errors in browsers that lack a console.
// By the H5BP guys/girls...
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }

    // Init Toggling action
    var $headings = $('.feature__header'),
        toggleCls = "is-collapsed",
        clickCls  = "is-clickable",
        activeCls = "is-active",
        $search   = $('.search'),
        st;
    $headings.addClass(clickCls).parent().toggleClass(toggleCls);
    $headings.click(function(){
        var $this = $(this);
        $this.parent().toggleClass(toggleCls);
    });

    // List Magix
    var options = {
        valueNames: [ 'feature__header', 'feature__description', 'feature__prefix' ]
    };
    var featuresList = new List('feature-list', options);

    // Sort alphabetically
    featuresList.sort('feature__header', { asc: true });

    // TODO: For some reason the keyup in listjs does not work??
    $search.on('keyup', function(){
        window.clearTimeout(st);
        st = window.setTimeout(function(){ featuresList.search($search.val());
        },100);
    });

    // FILTER
    $('#filter-prefixed').click(function(ev) {
        ev.preventDefault();
        $('.filter').removeClass(activeCls);
        $(this).addClass(activeCls);
        featuresList.filter(function(item) {
            if (item.values().feature__prefix == "true") {
                return true;
            } else {
                return false;
            }
        });
        return false;
    });

    $('#filter-prefixless').click(function(ev) {
        ev.preventDefault();
        $('.filter').removeClass(activeCls);
        $(this).addClass(activeCls);
        featuresList.filter(function(item) {
            if (item.values().feature__prefix == "false") {
                return true;
            } else {
                return false;
            }
        });
        return false;
    });
    $('#filter-none').click(function(ev) {
        ev.preventDefault();
        $('.filter').removeClass(activeCls);
        $(this).addClass(activeCls);
        featuresList.filter();
        return false;
    });

}());

