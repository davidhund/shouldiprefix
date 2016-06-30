---
title: multicolumn
url: multicolumn
prefixed: true
---

<article id="multicolumn" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>multicolumn</h2>
	</header>
	<p class="feature__description">
		Method of flowing information in multiple columns
	</p>
<pre class="feature__code"><code>
.example {
  -webkit-column-count: 2; /* Ch, Saf, And, BB  */
     -moz-column-count: 2; /* Fx */
          column-count: 2; /* IE 10, Op 11.1+ */

  -webkit-column-gap: 10px;
     -moz-column-gap: 10px;
          column-gap: 10px;

  -webkit-column-rule: 1px solid #000;
     -moz-column-rule: 1px solid #000;
          column-rule: 1px solid #000;
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/multicolumn">Browser support</a> 
		<a href="http://html5please.com/#multicolumn">Usage advice</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
