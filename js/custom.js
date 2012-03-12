jQuery(document).ready(function() {
	
	$('#gf').text('GitHub Followers');
    $('#gfr').text('GitHub Repos');		
	
	JSONP( 'https://api.github.com/users/cballou?callback=?', function( response ) {
		var data = response.data;
		$('#gf').text('<strong>' + data.followers + '</strong> GitHub Followers');
        $('#gfr').text('<strong>' + data.public_repos + '</strong> GitHub Repos');
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
});