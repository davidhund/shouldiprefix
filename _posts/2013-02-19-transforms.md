---
title: transforms
url: transforms
prefixed: true
---

<article id="transforms" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>transforms</h2>
	</header>
	<p class="feature__description">
		Method of transforming an element including rotating, scaling, etc.
	</p>
<pre class="feature__code"><code>
.example {
  -webkit-transform: rotate(30deg); /* Ch <36, Saf 5.1+, iOS < 9.2, An =<4.4.4 */
      -ms-transform: rotate(30deg); /* IE 9 */
          transform: rotate(30deg); /* IE 10, Fx 16+, Op 12.1+ */
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/transforms">Browser support</a> 
		<a href="http://html5please.com/#transforms">Usage advice</a> 
		<a href="http://www.css3files.com/transform">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
