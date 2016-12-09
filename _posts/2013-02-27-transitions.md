---
title: transitions
url: transitions
prefixed: true
---

<article id="transitions" class="feature prefix-{{page.prefixed}}">
  <header class="feature__header">
  	<h2>transitions</h2>
	</header>
	<p class="feature__description">
		Transitions on css properties. E.g. on hover transition opacity.
	</p>
<pre class="feature__code"><code>
.example {
          -o-transition: width 1s linear .2s; /* Op 11.6+ */
          -webkit-transition: width 1s linear .2s; /* Ch 1 */
          -moz-transition: width 1s linear .2s; /* Fx 4+ */
          transition: width 1s linear .2s; /* Ch 26, IE 10, Fx 16+, Op 12.1+ */
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/transitions">Browser support</a> 
		<a href="http://html5please.com/#transitions">Usage advice</a> 
		<a href="http://www.css3files.com/transition">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
