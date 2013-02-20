---
title: font-feature-settings
url: font-feature-settings
prefixed: true
---

<article id="font-feature-settings" class="feature prefix-{{page.prefixed}}">
	<header class="feature__header">
		<h2>font-feature-settings</h2>
	</header>
	<p class="feature__description">
		Method of applying advanced typographic and language-specific font features to supported OpenType fonts. Ligatures e.t.m!
	</p>
<pre class="feature__code"><code>
.example {
  -webkit-font-feature-settings: "liga" off, "dlig";
     -moz-font-feature-settings: "liga=0, dlig=1";
          font-feature-settings: "liga", "dlig";
}
</code></pre>
	<footer class="feature__footer">
		<a href="http://caniuse.com/font-feature-settings">Browser support</a> 
		<a href="http://html5please.com/#font-feature-settings">Usage advice</a> 
		<a href="http://www.typotheque.com/articles/opentype_features_in_web_browsers">More info</a> 
		<a href="https://github.com/davidhund/shouldiprefix/blob/master/_posts/{{page.date | date: "%Y-%m-%d"}}-{{page.title}}.md">Edit this</a> 
		<span class="feature__prefix">{{page.prefixed}}</span>
	</footer>
</article>
