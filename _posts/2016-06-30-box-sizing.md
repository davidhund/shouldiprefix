---
title: box-sizing
url: box-sizing
prefixed: false
---

<article id="box-sizing" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>box-sizing</h2>
	</header>
	<p class="feature__description">
		Method of specifying whether or not an element's borders and padding should be included in size units
	</p>
<pre class="feature__code"><code>
.example {
          box-sizing: border-box; /* Ch, Saf 5.1+, IE 8+, Op 9+  */
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/box-sizing">Browser support</a> 
		<a href="http://html5please.com/#box-sizing">Usage advice</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
