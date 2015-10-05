export default class HomeController {
    constructor($state, SocialService) {
        this.$state = $state;
        this.SocialService = SocialService;
        this.latestNews = [
            {title: 'Decendants', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {title: 'ABCD', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {title: 'Amy Tinkham', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {title: 'Amy Tinkham', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {title: 'Amy Tinkham', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {title: 'Amy Tinkham', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {title: 'Amy Tinkham', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
            {title: 'Amy Tinkham', date: '2015-10-07', image: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
        ];
        this.slides = [
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
            { type: 'image', src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' }
        ];
        this.socialFeeds = {
            twitter: [],
            instagram: []
        };

        this.initialize();
    }

    initialize() {
        this.SocialService.getTwitterFeed()
            .then(feed => {
                this.socialFeeds.twitter = feed;
            })
            .catch(err => {
                console.log('ERROR');
                console.log(err);
            });
    }
}
