---
title: appearance
url: appearance
prefixed: true
---

<article id="appearance" class="feature prefix-{{page.prefixed}}">
    <header class="feature__header">
        <h2>appearance</h2>
    </header>
    <p class="feature__description">
        The appearance property defines how elements (particularly form controls) appear by default. By setting the value to none the default appearance can be entirely redefined using other CSS properties.
    </p>
    <pre class="feature__code">
        <code>
        /**
         * Microsoft Edge and IE mobile support this property width the -webkit-
         * prefix rather than -ms- for interop reasons.
         */
            .input-element {
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
            }
        </code>
    </pre>
    <footer class="feature__footer">
        <a href="http://caniuse.com/#feat=css-appearance">Browser support</a>
        <a href="https://css-tricks.com/almanac/properties/a/appearance/">Sample use</a>
        <a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a>
        <span class="feature__prefix">{{page.prefixed}}</span>
    </footer>
</article>