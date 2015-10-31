'use strict';

require('angular/angular.min');
require('angular-ui-router/build/angular-ui-router.min');
require('angular-sanitize/angular-sanitize.min');

// AngularJS
angular.module('MSAAgency', [
  'MSAAgency.controllers',
  'MSAAgency.services',
  'MSAAgency.directives',
  'MSAAgency.filters',
  'ui.router',
  'ngSanitize',
]);

// Configuration
require('./angular/config');
require('./angular/routes');

// Controllers
import AboutController from './angular/controllers/About';
import AppController from './angular/controllers/App';
import ClientController from './angular/controllers/Client';
import ContactController from './angular/controllers/Contact';
import SplashController from './angular/controllers/Splash';
import HomeController from './angular/controllers/Home';
import NavigationController from './angular/controllers/Navigation';
import NewsletterController from './angular/controllers/Newsletter';
import SearchController from './angular/controllers/Search';
import TalentCategoryController from './angular/controllers/TalentCategory';

angular.module('MSAAgency.controllers', [])
    .controller('AboutController', AboutController)
    .controller('AppController', AppController)
    .controller('ClientController', ClientController)
    .controller('ContactController', ContactController)
    .controller('SplashController', SplashController)
    .controller('HomeController', HomeController)
    .controller('NavigationController', NavigationController)
    .controller('NewsletterController', NewsletterController)
    .controller('SearchController', SearchController)
    .controller('TalentCategoryController', TalentCategoryController);

// Services
import ClientService from './angular/services/Client';
import CommonService from './angular/services/Common';
import ContactService from './angular/services/Contact';
import NewsService from './angular/services/News';
import SocialService from './angular/services/Social';
import StaffService from './angular/services/Staff';

angular.module('MSAAgency.services', [])
    .service('ClientService', ClientService)
    .service('CommonService', CommonService)
    .service('ContactService', ContactService)
    .service('NewsService', NewsService)
    .service('SocialService', SocialService)
    .service('StaffService', StaffService);

// Directives
import ChooseCity from './angular/directives/ChooseCity';
import AnimatedInput from './angular/directives/AnimatedInput';
import LatestNews from './angular/directives/LatestNews';
import MediaSlider from './angular/directives/MediaSlider';
import NewsArticle from './angular/directives/NewsArticle';
import NewsletterWidget from './angular/directives/NewsletterWidget';
import ResizeElement from './angular/directives/ResizeElement';
import ToggleNavigation from './angular/directives/ToggleNavigation';

// Components
import ContactForm from './angular/components/ContactForm';
import InstagramFeed from './angular/components/InstagramFeed';
import Navigation from './angular/components/Navigation';
import OfficeLocations from './angular/components/OfficeLocations';
import RosterSlider from './angular/components/RosterSlider';
import SocialSection from './angular/components/SocialSection';
import TalentHeader from './angular/components/TalentHeader';
import TalentPhotos from './angular/components/TalentPhotos';
import TalentNavigation from './angular/components/TalentNavigation';
import TalentResume from './angular/components/TalentResume';
import TalentVideos from './angular/components/TalentVideos';
import TalentSectionHeader from './angular/components/TalentSectionHeader';
import TwitterFeed from './angular/components/TwitterFeed';

angular.module('MSAAgency.directives', [])
    .directive('chooseCity', ChooseCity)
    .directive('contactForm', ContactForm)
    .directive('animatedInput', AnimatedInput)
    .directive('instagramFeed', InstagramFeed)
    .directive('latestNews', LatestNews)
    .directive('mediaSlider', MediaSlider)
    .directive('newsArticle', NewsArticle)
    .directive('newsletterWidget', NewsletterWidget)
    .directive('navigation', Navigation)
    .directive('officeLocations', OfficeLocations)
    .directive('resizeElement', ResizeElement)
    .directive('rosterSlider', RosterSlider)
    .directive('socialSection', SocialSection)
    .directive('talentHeader', TalentHeader)
    .directive('talentNavigation', TalentNavigation)
    .directive('talentPhotos', TalentPhotos)
    .directive('talentResume', TalentResume)
    .directive('talentSectionHeader', TalentSectionHeader)
    .directive('talentVideos', TalentVideos)
    .directive('toggleNavigation', ToggleNavigation)
    .directive('twitterFeed', TwitterFeed);

require('./angular/components/MainHeader');
require('./angular/components/MainFooter');
require('./angular/components/SocialIcons');

// Filters
import GetTwitterLinks from './angular/filters/GetTwitterLinks';

angular.module('MSAAgency.filters', [])
    .filter('getTwitterLinks', GetTwitterLinks);
