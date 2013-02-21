---
layout: default
title: What CSS to prefix?
pagetitle: What CSS prefixes should I use?
description: An overview of what CSS features to prefix
---

# {{page.title}}

Remembering what CSS to <i class="prefixme">prefix</i> is hard. Today browsers develop quickly (yay) and things often change (boo). Preprocessors and mixin libraries are not always up to date.

This page has one purpose: simply show **_what_ prefixes are needed for a newer CSS property**. Need more information? Check the awesome [caniuse.com](http://caniuse.com), [CSS3 Please](http://css3please.com/) and [html5please](http://html5please.com). Also: [read this 'Disclaimer'…](disclaimer.html) :)

<div class="search-features">
	<input class="search" name="search" id="search" type="search" placeholder="Search CSS features: e.g. box-shadow" />
	<a href="#" class="filter" id="filter-prefixed">Show Prefixed</a>
	<a href="#" class="filter" id="filter-prefixless">Show Prefixless</a>
	<a href="#" class="filter" id="filter-none">Show All</a>
</div>

<div id="feature-list">
<ul class="list">
{% for item in site.posts order:ascending %}
<li>{{ item.content }}</li>
{% endfor %}
</ul>
</div>