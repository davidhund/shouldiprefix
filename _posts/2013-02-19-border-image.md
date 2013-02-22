---
title: border-image
url: border-image
prefixed: true
---

<article id="border-image" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>border-image</h2>
	</header>
	<p class="feature__description">
		Method of using images for borders
	</p>
<pre class="feature__code"><code>
.example {
  -webkit-border-image: url(img.png) 10px / 20px round; /* Ch <16, Saf <6 */
     -moz-border-image: url(img.png) 10px / 20px round; /* Fx <15 */
       -o-border-image: url(img.png) 10px / 20px round; /* Op (not mini) */
          border-image: url(img.png) 10px / 20px round; /* Ch 16+, Saf 6+ */
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/border-image">Browser support</a> 
		<a href="http://html5please.com/#border-image">Usage advice</a> 
		<a href="http://www.css3files.com/border">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
