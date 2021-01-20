# ajax-lib
A small simple library (if you can call it that), for ajax requests.  <br>
I have not been coding in months, so there most likely will be some errors (hence the lack of design on the testing page / barebones server and lib).
<br>
<b>Installation / Tweaks</b>
<br>
<ul>
<li>Uses express lib - npm i express --save </li>
<li>When using FormData object set the ajax contentType and processData properties to false</li>
<li>To ensure the server prints post data correctly use the appropriate content type </li>
<li>Tested in Chrome - cross origin policy must be disabled for Ajax to function correctly (testing only) chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security</li>
</ul>
<b>Why make this?</b>
<br>
Back when I was developing daily, these are common ajax functions I never seemed to have absracted, so on a menial day in lockdown, I decided to at least start collating them into one place.
