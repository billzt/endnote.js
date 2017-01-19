# endnote.js
Insert literature citation in HTML and then rendered as Endnote-style citation.
The original idea was from [Javascript Endnotes](http://library.uwinnipeg.ca/people/dobson/portfolio/endnotes/index.html)

## Demo
https://billzt.github.io/endnote.js/ (Text from https://en.wikipedia.org/wiki/Computer)

## Require
[jQuery](https://github.com/jquery/jquery)

## Optional
[Bootstrap](https://github.com/twbs/bootstrap) (CSS and JS)

## Usage
- Load jQuery.
```html
<script src="//cdn.bootcss.com/jquery/1.12.4/jquery.min.js"></script>
```
- (Optional) Load Boostrap CSS and JS
```html
<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
<script src="//cdn.bootcss.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```
- Load endnote.js
```html
<script src="endnote.js"></script>
```
- Cite your literature inline, quoted by `<span class="endnote"></span>`
```html
  This is the 1st sentence<span class="endnote">Author A, Title A, Journal A, Page 10-20</span>. This is<span 
  class="endnote">Author B, Title B, Journal B, Page 20-30</span> the 2nd sentence. This is the 3nd
  <span class="endnote">Author A, Title A, Journal A, Page 10-20</span><span class="endnote">Author C, 
  Title C, Journal C, Page 40-50</span> sentence.
```

- Add an `<ol id="endnote-reference-list"></ol>` element to where you want to place the reference list.
```html
<h3>Reference List</h3>
<ol id="endnote-reference-list"></ol>
```

- (Optional) If you want to the beautiful bootstrap tooltip, add this in the end:
```javascript
$().ready(function(){$('[data-toggle="tooltip"]').tooltip();});
```

