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
        $(this).parent().toggleClass(toggleCls);
    });

    // List Magix
    var options = {
        valueNames: [ 'feature__header', 'feature__description', 'feature__prefix' ]
    };
    var featuresList = new List('feature-list', options);

    // Sort alphabetically
    featuresList.sort('feature__header', { asc: true });

    // FILTER
    var filterCallbacks = {};
    filterCallbacks['filter-prefixed'] = function(item) {
        return item.values().feature__prefix === "true";
    };
    filterCallbacks['filter-prefixless'] = function(item) {
        return item.values().feature__prefix === "false";
    };

    $('.filter').on('click', function() {
        $(this)
            .addClass(activeCls)
            .siblings()
            .removeClass(activeCls);
        featuresList.filter(filterCallbacks[this.id]);
    });

}());

