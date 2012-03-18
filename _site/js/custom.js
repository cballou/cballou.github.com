jQuery(document).ready(function() {
	
	$('#gf').text('GitHub Followers');
    $('#gfr').text('GitHub Repos');		
	
	JSONP( 'https://api.github.com/users/cballou?callback=?', function( response ) {
		var data = response.data;
		$('#gf').html('<strong>' + parseInt(data.followers) + '</strong> GitHub Followers');
        $('#gfr').html('<strong>' + parseInt(data.public_repos) + '</strong> GitHub Repos');
	});
	
	function JSONP( url, callback ) {
		var id = ( 'jsonp' + Math.random() * new Date() ).replace('.', '');
		var script = document.createElement('script');
		script.src = url.replace( 'callback=?', 'callback=' + id );
		document.body.appendChild( script );
		window[ id ] = function( data ) {
			if (callback) {
				callback( data );
			}
		};
	}	
	
	$('#ghw').githubWidget({
		'username': 'cballou',
		'displayActions': false,
		'firstCount': 10,
		'displayHeader': false,
		'displayLastCommit': false,
		'displayAccountInformations': false,
		'displayLanguage': false
	});
	
	displayTweets();
});

function displayTweets() {
	var twitter_api_url = 'http://search.twitter.com/search.json';
	var twitter_user    = 'cballou';
 
	// Enable caching
	$.ajaxSetup({ cache: true });
	$.getJSON(
		twitter_api_url + '?callback=?&rpp=3&q=from:' + twitter_user,
		function(data) {
			$.each(data.results, function(i, tweet) {
				if (tweet.text !== undefined) {
					var date_tweet = new Date(tweet.created_at);
					var date_now   = new Date();
					var date_diff  = date_now - date_tweet;
					var hours      = Math.round(date_diff/(1000*60*60));
					var tweet_html = '<li class="tweet_text">';
					tweet_html    += '<a href="http://www.twitter.com/';
					tweet_html    += twitter_user + '/status/' + tweet.id + '">';
					tweet_html    += tweet.text + '<\/a>';
					tweet_html    += '<div class="tweet_hours">' + hours;
					tweet_html    += ' hours ago<\/div><\/li>';
					$('#tweet_container').append(tweet_html);
				}
			});
		}
	);
}