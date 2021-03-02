// ==UserScript==
// @name         Pr0 - Fav and Upload Button
// @version      1.0
// @description  Fügt ein Favoriten & ein Upload-Button oben in der Leiste hinzu, siehe Screenshot.
// @author       R-Johnsen
// @match        http://pr0gramm.com/*
// @match        https://pr0gramm.com/*
// @icon         https://pr0gramm.com/media/pr0gramm-favicon.png
// @grant        none
// @run-at       document-end
// ==/UserScript==

jQuery(function() {
  var data = jQuery.parseJSON(decodeURI($.cookie('me')));
  var link = jQuery("<a id='tab-fav' class='head-tab' href='/user/" + data.n + "/favoriten'>Favoriten</a>");
  jQuery("#bookmarks-link").before(link);

  if(/favoriten/.test(window.location.href)) {
    $('#tab-fav').addClass('active');
  }
});


jQuery(function() {
  var data = jQuery.parseJSON(decodeURI($.cookie('me')));
  var link = jQuery("<a id='tab-upload' class='head-tab' href='/user/" + data.n + "/uploads'>Uploads</a>");
  jQuery("#bookmarks-link").before(link);

  if(/uploads/.test(window.location.href)) {
    $('#tab-upload').addClass('active');
  }
});