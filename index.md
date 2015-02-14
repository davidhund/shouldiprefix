---
layout: default
title: What CSS to prefix?
pagetitle: What CSS prefixes should I use?
description: An overview of what CSS features to prefix
---

# {{page.title}}

Remembering what CSS to <i class="prefixme">prefix</i> is hard. Today browsers develop quickly (yay) and things often change (boo). Preprocessors and mixin libraries are not always up to date.

This page has one purpose: simply show **_what_ prefixes are needed for a newer CSS property**. Need more information? Check the awesome [Can I Use](http://caniuse.com) or [Autoprefixer](https://github.com/postcss/autoprefixer)!

Also: [read this 'Disclaimer'…](disclaimer.html) :)

<div id="feature-list">
	<div class="search-features">
		<input class="search"
			name="search"
			id="search"
			type="search"
			placeholder="Search CSS features: e.g. box-shadow" />
		<button type="button" class="filter" id="filter-prefixed">Show Prefixed</button>
		<button type="button" class="filter" id="filter-prefixless">Show Prefixless</button>
		<button type="button" class="filter is-active" id="filter-none">Show All</button>
	</div>
	<ul class="list">
		{% for item in site.posts order:ascending %}
			<li>{{ item.content }}</li>
		{% endfor %}
	</ul>
</div>