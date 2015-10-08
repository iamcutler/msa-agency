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
import AboutController from './angular/controllers/About';
import AppController from './angular/controllers/App';
import SplashController from './angular/controllers/Splash';
import HomeController from './angular/controllers/Home';
import NavigationController from './angular/controllers/Navigation';
import NewsletterController from './angular/controllers/Newsletter';
import SearchController from './angular/controllers/Search';
import TalentCategoryController from './angular/controllers/TalentCategory';

angular.module('MSAAgency.controllers', [])
    .controller('AboutController', AboutController)
    .controller('AppController', AppController)
    .controller('SplashController', SplashController)
    .controller('HomeController', HomeController)
    .controller('NavigationController', NavigationController)
    .controller('NewsletterController', NewsletterController)
    .controller('SearchController', SearchController)
    .controller('TalentCategoryController', TalentCategoryController);

// Services
import CommonService from './angular/services/Common';
import SocialService from './angular/services/Social';

angular.module('MSAAgency.services', [])
    .service('CommonService', CommonService)
    .service('SocialService', SocialService);

// Directives
import ChooseCity from './angular/directives/ChooseCity';
import LatestNews from './angular/directives/LatestNews';
import MediaSlider from './angular/directives/MediaSlider';
import NewsArticle from './angular/directives/NewsArticle';
import NewsletterWidget from './angular/directives/NewsletterWidget';
import ResizeElement from './angular/directives/ResizeElement';
import ToggleNavigation from './angular/directives/ToggleNavigation';

// Components
import InstagramFeed from './angular/components/InstagramFeed';
import Navigation from './angular/components/Navigation';
import RosterSlider from './angular/components/RosterSlider';
import SocialSection from './angular/components/SocialSection';
import TwitterFeed from './angular/components/TwitterFeed';

angular.module('MSAAgency.directives', [])
    .directive('chooseCity', ChooseCity)
    .directive('instagramFeed', InstagramFeed)
    .directive('latestNews', LatestNews)
    .directive('mediaSlider', MediaSlider)
    .directive('newsArticle', NewsArticle)
    .directive('newsletterWidget', NewsletterWidget)
    .directive('navigation', Navigation)
    .directive('resizeElement', ResizeElement)
    .directive('rosterSlider', RosterSlider)
    .directive('socialSection', SocialSection)
    .directive('toggleNavigation', ToggleNavigation)
    .directive('twitterFeed', TwitterFeed);

require('./angular/components/MainHeader');
require('./angular/components/MainFooter');
require('./angular/components/SocialIcons');

// Filters
import GetTwitterLinks from './angular/filters/GetTwitterLinks';

angular.module('MSAAgency.filters', [])
    .filter('getTwitterLinks', GetTwitterLinks);
