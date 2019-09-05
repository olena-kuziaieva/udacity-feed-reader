$(function() {
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('URL are defined', function() {
            for(var feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length !== 0).toBe(true);
            }
        });

        it('names are defined', function() {
            for(var feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {
        it('elemnt is hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
        
        it('changes visibility', function() {
            var menuIconElement = document.getElementsByClassName('menu-icon-link')[0];
            menuIconElement.click(); 
            expect(document.body.classList.contains('menu-hidden')).not.toBe(true);
            menuIconElement.click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });
    
    describe('Initial Entries', function() {
        var feedContainer = document.querySelector('.feed');
        
        beforeEach(function(done) {
            loadFeed(0, function() {
                // Callback when the feed has been loaded
                done();
            });
        });
        it('calls and completes the loadFeed function', function() {
            var entryElement = document.querySelector('.entry');
            var result = feedContainer.contains(entryElement);
            expect(result).toBe(true);
        });
    }); 
    
    describe('New Feed Selection', function() {
        it('the content changes', function(done) {
            var contentLoaded = function() {
                 // save result of loading feeds
                var loadFeedZeroResult = document.querySelector('.feed').innerHTML; 
                
                loadFeed(1, function () {
                    var loadFeedFirstResult = document.querySelector('.feed').innerHTML;
                    
                    // compare saved result with new result
                    expect(loadFeedZeroResult !== loadFeedFirstResult).toBe(true);
                    done();
                });
            };
            loadFeed(0, contentLoaded);
        });
    });
}());