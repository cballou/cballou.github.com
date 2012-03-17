---
layout: post
title: Why you should contribute to open source projects
category: Development
---

<div class="row">
	<div class="span3 columns">
        <h3>Socialize and Share</h3>
        <p>
        <a href="https://twitter.com/share" class="twitter-share-button" data-via="cballou">Tweet</a><br />
        <g:plusone size="medium"></g:plusone><br />
        <script type="text/javascript" src="http://www.reddit.com/buttonlite.js?i=2&styled=off&url={{ page.url }}&newwindow=1"></script>
        </p>
        <h3>Read it Later</h3>
        <p>
        <a href="#" onclick="javascript:(function(){ISRIL_H='3826';ISRIL_SCRIPT=document.createElement('SCRIPT');ISRIL_SCRIPT.type='text/javascript';ISRIL_SCRIPT.src='http://readitlaterlist.com/b/r.js';document.getElementsByTagName('head')[0].appendChild(ISRIL_SCRIPT)})(); return false;">Save post</a> to Read It Later<br />
        <a href="http://www.instapaper.com/hello2?url={{ page.url }}&title={{ page.title }}" title="Save {{ page.title }} to Instapaper" target="_blank">Save post</a> to Instapaper.
        </p>
	</div>
	<div class="span9 columns">
        <h2>Why Contribute?</h2>
        <p>
        Great question. The premise of making your source code available to prying
        eyes and overly critical people may sound a bit scary. While this is true
        to some extent, the counterpoint is that these same people will help make
        your code (and you) better. It is, in essense, a free form of peer review. You could
        consider it a poor man's version of pair programming.
        </p>
        
        <h3>Open sourcing your code will...</h3>
        
        <h4>1. Help you receive constructive criticism and feedback</h4>
        <p>
        People who use your code may provide key insight into problems they see with
        your formatting, design patterns, best practices, security issues, etc. It's much
        more productive to get these things as they are found rather than never knowing at
        all. It'll make you a stronger programmer. There's also the added benefit of
        receiving praise for your work from a happy dev.
        </p>
        
        <h4>2. Help you obtain quality assurance for free</h4>
        <p>
        Another benefit of open sourcing your code is that you receive a form of
        quality assurance for free. The more people that see your code, the more likely
        you are to receive bug reports, quirks, etc. This goes without saying that
        you can also ask for feature requests and ways that your code could be
        improved upon. People are always glad to suggest improvements.
        </p>
        
        <h4>3. Stop others from recreating the wheel</h4>
        <p>
        It's likely that if you have a use for your code, someone else would too.
        By making it publicly available, you're saving other developers precious
        time on projects. What goes around comes around.
        </p>
  
        <h4>4. Validate the usefulness of the code you provide</h4>
        <p>
        When you open source code, you never know how it'll be received by the community.
        You should be open sourcing code with the intent of it being used and improved
        upon by others. By simply open sourcing your code, you can track it's popularity
        on github. 
        </p>
        
        <h4>5. Help you make a name for yourself</h4>
        <p>
        The more popular your project becomes, the more likely it'll
        be featured across the web. By simply open sourcing your code, you are increasing
        the likelihood that your name will become familiar within specific development
        communities. You are expanding your network without a single contact, just
        by providing something of value to others at no cost.
        </p>        
        
        <h4>6. Stroke your ego</h4>
        <p>
        Let's face it; it feels good when others comment positively on your code.
        If you created something useful, why not open source it and feel a bit
        of self gratification when you start seeing it used across the web or
        see a bunch of forks and pull requests on github.
        </p>

        <h2>What goes around comes around...</h2>
        <p>
        Life is a game of give and take. If you are continuously taking without
        ever giving, you're not helping the growth of your community. I urge those
        of you who are infrequent or virgin open source contributors to make
        a conscious decision to create your first public github repository. It's
        an essential first step. The rest of us are here to help; that's the greatest
        part about the open source community.
        </p>

        <h2>Stay Tuned</h2>
        <p>
        In my next post, I'll be detailing the process of setting up and maintaining a github
        repository as well as how you can begin contributing to existing github
        projects.
        </p>

        <hr>
	</div>
</div> 

<div class="row">
	<div class="span3 columns">&nbsp;</div>
	<div class="span9 column">
		<p class="pull-right">
            {% if page.previous.url %}
            <a href="{{page.previous.url}}" title="Previous Post: {{page.previous.title}}"><i class="icon-chevron-left"></i></a>
            {% endif %}
            {% if page.next.url %}
            <a href="{{page.next.url}}" title="Next Post: {{page.next.title}}"><i class="icon-chevron-right"></i></a>
            {% endif %}
        </p>  
	</div>
</div>

<div class="row">
	<div class="span3 columns">&nbsp;</div>
    <div class="span9 columns">    
		<h2>Comments Section</h2>
	    <p>Feel free to comment on the post but keep it clean and on topic.</p>	
		<div id="disqus_thread"></div>
		<script type="text/javascript">
			/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
			var disqus_shortname = 'ericjones'; // required: replace example with your forum shortname

			/* * * DON'T EDIT BELOW THIS LINE * * */
			(function() {
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = 'http://' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			})();
		</script>
		<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
	</div>
</div>

<!-- Twitter -->
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>

<!-- Google + -->
<script type="text/javascript">
  (function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();
</script>