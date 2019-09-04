/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
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
                console.log('Work is finished!');
                done();
            });
        });
        it('calls and completes the loadFeed function', function() {
            var entryElement = document.querySelector('.entry');
            var result = feedContainer.contains(entryElement);
            expect(result).toBe(true);
        });
    }); 
    
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
