if(!sessionStorage.savedTheme) {
	sessionStorage.savedTheme = 'monokai-sublime'	
}
var savedTheme = sessionStorage.savedTheme || 'monokai-sublime';
$('html').addClass(savedTheme);
$(document).ready(function() {
	window.open = false;
	$('body').each(function(i, block) {
		hljs.highlightBlock(block);
	}).prepend('<aside id="toggle"><div><article id="button" class="down"></article></div><div><select id="theme"><option>ascetic</option><option>atelier dune dark</option><option>atelier dune light</option><option>atelier forest dark</option><option>atelier forest light</option><option>atelier heath dark</option><option>atelier heath light</option><option>atelier lakeside dark</option><option>atelier lakeside light</option><option>atelier seaside dark</option><option>atelier seaside light</option><option>brown paper</option><option>codepen embed</option><option>color brewer</option><option>dark</option><option>darkula</option><option>default</option><option>docco</option><option>far</option><option>foundation</option><option>github</option><option>googlecode</option><option>hybrid</option><option>idea</option><option>ir black</option><option>kimbie dark</option><option>kimbie light</option><option>magula</option><option>mono blue</option><option>monokai</option><option>monokai sublime</option><option>obsidian</option><option>paraiso dark</option><option>paraiso light</option><option>pojoaque</option><option>railscasts</option><option>rainbow</option><option>school book</option><option>solarized dark</option><option>solarized light</option><option>sunburst</option><option>tomorrow night blue</option><option>tomorrow night bright</option><option>tomorrow night eighties</option><option>tomorrow night</option><option>tomorrow</option><option>vs</option><option>xcode</option><option>zenburn</option><option>disable</option></select></div></aside>').promise().done(function() {
		var theme = $('#theme')
		  , button = $('#button');
		theme.val(savedTheme.replace(/-/g, ' '));
		button.on('click', function(){
			if(!window.open) {
				theme.fadeIn().promise().done(function() {
					button.removeClass('down').addClass('up');
				});
			} else {
				theme.fadeOut().promise().done(function(){
					button.removeClass('up').addClass('down');
				});
			}
			window.open = !window.open;
		});
		theme.on('change', function() {
			if(this.value === 'disable') {
				$('html').removeClass();
				$('body').removeClass();
				$('#toggle').fadeOut();
			} else {
				savedTheme = this.value.replace(/ /g, '-');
				$('html').removeClass().addClass(savedTheme);
				sessionStorage.savedTheme = savedTheme;				
			}
		});
	});
});
