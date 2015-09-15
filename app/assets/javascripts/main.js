'use strict';

require('angular/angular.min');
require('angular-ui-router/build/angular-ui-router.min');

// AngularJS
angular.module('MSAAgency', [
  'MSAAgency.controllers',
  'MSAAgency.services',
  'MSAAgency.directives',
  'MSAAgency.filters',
  'ui.router'
]);

// Configuration
require('./angular/config');
require('./angular/routes');

// Controllers
import AppController from './angular/controllers/App';
import SplashController from './angular/controllers/Splash';
import HomeController from './angular/controllers/Home';
import NavigationController from './angular/controllers/Navigation';
import NewsletterController from './angular/controllers/Newsletter';
import SearchController from './angular/controllers/Search';

angular.module('MSAAgency.controllers', [])
    .controller('AppController', AppController)
    .controller('SplashController', SplashController)
    .controller('HomeController', HomeController)
    .controller('NavigationController', NavigationController)
    .controller('NewsletterController', NewsletterController)
    .controller('SearchController', SearchController);

// Services
angular.module('MSAAgency.services', []);

// Directives
import ChooseCity from './angular/directives/ChooseCity';
import InstagramFeed from './angular/directives/InstagramFeed';
import LatestNews from './angular/directives/LatestNews';
import MediaSlider from './angular/directives/MediaSlider';
import NewsArticle from './angular/directives/NewsArticle';
import NewsletterWidget from './angular/directives/NewsletterWidget';
import Navigation from './angular/directives/Navigation';
import ResizeElement from './angular/directives/ResizeElement';
import SocialSection from './angular/directives/SocialSection';
import ToggleNavigation from './angular/directives/ToggleNavigation';
import TwitterFeed from './angular/directives/TwitterFeed';

angular.module('MSAAgency.directives', [])
    .directive('chooseCity', ChooseCity)
    .directive('instagramFeed', InstagramFeed)
    .directive('latestNews', LatestNews)
    .directive('mediaSlider', MediaSlider)
    .directive('newsArticle', NewsArticle)
    .directive('newsletterWidget', NewsletterWidget)
    .directive('navigation', Navigation)
    .directive('resizeElement', ResizeElement)
    .directive('socialSection', SocialSection)
    .directive('toggleNavigation', ToggleNavigation)
    .directive('twitterFeed', TwitterFeed);

require('./angular/directives/MainHeader');
require('./angular/directives/MainFooter');
require('./angular/directives/SocialIcons');

// Filters
angular.module('MSAAgency.filters', []);
