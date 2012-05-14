---
layout: post
title: Startup ROI and Agile Development
category: Development
---

<div class="row">
	<div class="span3 columns">
        <h3>About the Author</h3>
        <p>
          <img
            src="https://si0.twimg.com/profile_images/1826673279/corey_twitter_reasonably_small.jpg"
            alt="Corey Ballou" title="Follow me on Twitter @cballou"
            class="floatLeft profile-pic"
            width="64"
            height="64"
          />
          I'm <strong>Corey</strong> and I am a web developer, blogger, open
          source contributor, beer lover, homebrewer, aspiring entrepreneur, Queen City
          PHP co-organizer, and employee at <a href="http://mojolive.com" target="_blank">mojoLive</a>.
        </p>
        <p>
            For more information, you can visit my website at <a href="http://coreyballou.com" target="_blank">coreyballou.com</a>,
            web development blog <a href="http://blackbe.lt" target="_blank">blackbelt</a>, or follow me on twitter:
            <a href="https://twitter.com/cballou" class="twitter-follow-button btn btn-mini" data-show-count="false">Follow @cballou</a>
        </p>
        
        <h3>Socialize and Share</h3>
        <p>
        <a href="https://twitter.com/share" class="twitter-share-button" data-via="cballou">Tweet</a><br />
        <a href="http://news.ycombinator.com/submit" class="hn-share-button">Vote on HN</a><br />
        <g:plusone size="medium"></g:plusone><br />
        <script type="text/javascript" src="http://www.reddit.com/buttonlite.js?i=2&styled=off&url={{ page.url }}&newwindow=1"></script>
        </p>
        <h3>Read it Later</h3>
        <p>
        <script>
        document.write('<iframe class="readitlater_button" id="readitlater_button1" allowtransparency="true" frameborder="0" scrolling="no" width="85" height="16" style="z-index: 2000; overflow: hidden;position:relative;top:3px"'+
        'src="http://getpocket.com/button?url='+encodeURIComponent(document.location.href)+
        '&title='+encodeURIComponent(document.title.replace(/^\s\s*/, '').replace(/\s\s*$/, ''))+
        '&via='+encodeURIComponent(document.location.host)+
        '"></iframe>');
        </script> or<br />
        <a href="http://www.instapaper.com/hello2?url={{ page.url }}&title={{ page.title }}" title="Save {{ page.title }} to Instapaper" target="_blank">Save post</a> to Instapaper.
        </p>
	</div>
    
	<div class="span9 columns" id="blog-post">
    <img src="/img/einstein-roi.jpeg" width="600" height="450" style="display:block; margin: 0 auto 20px; border-radius: 10px; overflow: hidden;" />
<h2>A Preface</h2>
<p>
Having spent the last four and a half years using varying methods of agile development,
I can strongly attest to the fact that most of the time I've been doing it all wrong.
While my past work had primarily been client based, I amassed a portfolio including
building and launching several startup MVPs. Several things have struck me as odd while working with these startups:
</p>

<ol>
    <li>The initial specifications document (features list) is abnormally large.</li>
    <li>Clients generally haven't prioritized their features or ideas.</li>
    <li>There's generally nothing more than gut instinct or a "cool factor" driving the features list.</li>
    <li>Founders don't budge on their features. It's as if they are set in stone.</li>
</ol>

<p>
I believe there needs to be a much more well defined structure to this initial
phase as a startup moves from <em>ideation</em> to <em>development</em>. To be precise,
startups should really be usability testing features throughout the process of finding
market fit (your <em>niche market</em>). Completely off topic, but please consider
reading up on <a href="http://en.wikipedia.org/wiki/Market_segmentation" target="_blank" rel="nofollow">segmenting your market</a>
if you aren't familiar; you won't be disappointed.
Team members need to be asking themselves <em><strong>why</strong></em> they settled
on a decision and <em><strong>what benefits</strong></em> they hope to receive in
return for implementing their decisions. 
</p>

<h2>What is Startup ROI?</h2>
<p>
First, let me define <em>Startup ROI</em>. This isn't your standard definition of
return on investment because we aren't necessarily talking about monetary transactions. Our formula
consists of man hours (cost of investment) and traction (gain from investment). It's
worth noting that traction can come in many forms, so use these terms loosely
to define your own ROI variables. Traction could be taken literally to mean new user
signups or user engagement. Traction could also come in terms of angel investments or
venture capital. The key point being that traction represents a gain that has a net
positive effect on your startup.
</p>

<h2>A Precursor to Measuring Startup ROI</h2>
<p>
Let us reminisce the good old days for a moment; back to our middle school science
experiments. We learned from an early age that there's merit to generating <em>testable</em>
hypothesis which will ultimately lead us to a conclusion that either proves or disproves
our hypothesis. We also learned that the best way to test our hypothesis is to isolate
our variables using a combination of an <em>independent</em> and <em>dependent</em>
variable. The isolation of variables is key as it ensures us that there's no
cross-contamination; no intermingling of multiple hypothesis which could ultimately
discredit our findings.
</p>

<p>
This concept is not new to the interwebs. We've got A/B and multivariate testing
taking place left and right. There's even been recent discussion on the usage of
<a href="http://untyped.com/untyping/2011/02/11/stop-ab-testing-and-make-out-like-a-bandit/" target="_blank" rel="nofollow">bandit testing</a>
in favor of A/B testing. My belief is that entrepreneurs need to incorporate
a bit more deductive reasoning into the early stages of their startup's lifecycle.
There should be an early focus on monitoring <em>cause and effect</em> with analytics
to back up their hunches. Building a startup is a learning experience; perhaps one
could even say a <em>science experiment</em> of sorts. It's a series of
successes and failures; each coupled with their own lessons to be learned. Without
some form of measurement, it's difficult to determine whether you're leaning towards
success or failure. So let's talk about measurements, shall we?
</p>

<h2>How to Measure Startup ROI</h2>
<p>
You can start by building a company and culture that idolizes it's metrics.
Let metrics be a tool that helps guide your decision making process; a tool
that can help you to re-evaluate your goals.
If you're overly invested in a new feature that's rolling out, let the metrics play devil's advocate. 
If you aren't measuring and analyzing, I would argue you aren't readily capable of
justifying decisions that have been made in the past. Don't fret, we're all guilty of
this. I just slapped myself on the wrist because I still do this on personal projects.
It's a horrible habit and something that needs to be broken. My best advice is to always be looking for ways to collect
more statistics. This could be site traffic, conversion rates, email campaign
analytics, measuring variances in user engagement from the addition or removal
of a new feature (i.e. time spent on page), etc. It could also be in terms of
increased customer support requests, consistent complaints on social networks,
or simply nothing. If you notice absolutely no customer engagement changes
when adding a new feature, could it really be that important?
</p>

<p>
Once you've formed a pattern of collecting statistics, you need to generate hypothesis
based on your available metrics that will help you determine the actual success
of a feature or change. Make sure to structure your hypothesis in a time dependent manner,
as it's not possible to calculate statistical significance without a large enough sampling.
The process of validating your hypothesis with real metrics can be invaluable when meeting with
your board of advisors or investors. With that being said, you can save yourself
previous time by analyzing features before you even consider adding them to your icebox or backlog.
</p>

<h2>Stop Bad Ideas in Their Tracks</h2>
<p>
You can begin by always being critical of yourself and your decisions. Flesh
out your ideas before jumping straight into implementation.
</p>

<blockquote>
    <p>
    Be your own worst critic. When things go wrong it's tempting to shift the blame. Don't. 
    Accept responsibility. People will appreciate it, and you will find out what you're capable of.
    </p>
    <small>Paul Arden</small>
</blockquote>

<p>
We'll go old school again with the <a href="http://en.wikipedia.org/wiki/Five_Ws" target="_blank" rel="nofollow">Five Ws</a>:
<em>who</em>, <em>what</em>, <em>when</em>, <em>where</em>, and <em>why</em>?
It may seem obvious that you should be asking yourself these questions, but I would
argue that they're often either overlooked or forgotten. There needs to be an
emphasis on hypothesizing potential outcomes and recognizing when something
isn't panning out sooner than later. We need to be nipping these unsuccessful
decisions in the butt; catching them as soon as there's statistical significance
indicating no noticeable increase in traction. Simply asking yourself these questions
before making a decision can help you gauge whether the idea should be scrapped altogether.
Let's discuss some possible questions you may ask yourself:
</p>

<h3>WHO</h3>
<ul>
  <li>Who does this decision directly affect?</li>
  <li>Who does this decision positively affect?</li>
  <li>Who does this decision negatively affect?</li>
</ul>

<h3>WHAT</h3>
<ul>
  <li>What gains do you hope to receive as a direct result of carrying out this decision?</li>
  <li>What losses would you incur if this decision flops?</li>
  <li>What is the timeline you are going to set for this decision to blossom?</li>
</ul>

<h3>WHEN</h3>
<ul>
  <li>When will you act on this decision?</li>
  <li>When does this decision need to be completed?</li>
  <li>When will you begin seeing positive gains from this decision?</li>
  <li>When will you scrap this decision if it looks like it's failing?</li>
</ul>

<h3>WHERE</h3>
<ul>
  <li>Where does this decision fit among others in terms of priority?</li>
  <li>Where does this decision fit among others in terms of pre-requisites?</li>
</ul>

<h3>WHY</h3>
<ul>
  <li>Why are you making this decision in the first place?</li>
  <li>Why is this decision beneficial to the startup?</li>
  <li>Why is this decision crucial to the success of your startup?</li>
</ul>

<h3>HOW</h3>
<ul>
  <li>How are you going to ensure this decision is carried out?</li>
  <li>How are you going to ensure that you follow through with this decision?</li>
  <li>How could you improve this decision to be more specific?</li>
  <li>How could you simplify this decision into smaller, more attainable ones?</li>
  <li>How long will it take to complete this decision?</li>
  <li>How are you going to measure this decision so it can later be analyzed?</li>
</ul>

<p>
The questions above are samples as to the types of questions you
might ask yourself in regards to making important decisions. They are effectively
the precursor to measuring Startup ROI. Decisions may come
in many forms, but you are likely to focus on your product's feature set as it
has some of the highest ROI variability. These questions alone won't help you measure
Startup ROI, but they will give you a quick indication of whether or not something
is even worth jotting down. For generating actual hypothesis and drawing conclusions,
I personally recommend trying to fit them into the
<a href="http://en.wikipedia.org/wiki/Business_Model_Canvas" target="_blank" rel="nofollow">Business Model Canvas</a>. 
</p>

<h2>The Business Model Canvas</h2>
<p>
The Business Model Canvas is essentially a short form business model that evolves
over time. One of it's benefits is it's ability to assist you in aligning your
company's activities by illustrating potential trade-offs. It allows you to
provide testable hypothesis and pivot based on their
outcomes. You can view a quick 2 minute video overview of the Business Model
Canvas and download a usable PDF from the
<a href="http://www.businessmodelgeneration.com/canvas" target="_blank" rel="nofollow">Business Model Generation</a>
website. The wikipedia article linked above is also a great and abridged read.
<a href="http://steveblank.com" target="_blank" rel="nofollow">Steve Blank</a>,
an icon in the world of entrepreneurship, uses the Business Model Canvas in his
<a href="http://steveblank.com/2010/12/07/the-lean-launchpad-%E2%80%93-teaching-entrepreneurship-as-a-management-science/" target="_blank" rel="nofollow">Lean LaunchPad</a>
classes that he now teaches at U.C. Berkley, Stanford University, Columbia
University, and the Joint Berkley/Columbia Executive MBA program. Steve has
always released the student presentations at the end of the class. They prove
to be invaluable resource in helping to understand the Business Model Canvas
and I highly recommend reading each team's slides:
</p>

<ul>
  <li><a href="http://steveblank.com/2011/05/10/the-lean-launchpad-at-stanford-%e2%80%93-the-final-presentations/" target="_blank" rel="nofollow">The Lean LaunchPad at Stanford – The Final Presentations 2011</a></li>
  <li><a href="http://steveblank.com/2012/03/07/stanford-2012-lean-launchpad-presentations-part-1-of-2/" target="_blank" rel="nofollow">Stanford 2012 Lean LaunchPad Presentations – part 1 of 2</a></li>
  <li><a href="http://steveblank.com/2012/03/14/stanford-2012-lean-launchpad-presentations-part-2-of-2/" target="_blank" rel="nofollow">Stanford 2012 Lean LaunchPad Presentations – part 2 of 2</a></li>
</ul>

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