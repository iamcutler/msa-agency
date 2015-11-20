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
import ClientCategoryController from './angular/controllers/ClientCategory';
import ClientController from './angular/controllers/Client';
import ContactController from './angular/controllers/Contact';
import SplashController from './angular/controllers/Splash';
import HomeController from './angular/controllers/Home';
import LegacyController from './angular/Controllers/Legacy';
import NavigationController from './angular/controllers/Navigation';
import NewsController from './angular/controllers/News';
import NewsletterController from './angular/controllers/Newsletter';
import SearchController from './angular/controllers/Search';
import StaffController from './angular/controllers/Staff';

angular.module('MSAAgency.controllers', [])
    .controller('AboutController', AboutController)
    .controller('AppController', AppController)
    .controller('ClientCategoryController', ClientCategoryController)
    .controller('ClientController', ClientController)
    .controller('ContactController', ContactController)
    .controller('SplashController', SplashController)
    .controller('HomeController', HomeController)
    .controller('LegacyController', LegacyController)
    .controller('NavigationController', NavigationController)
    .controller('NewsController', NewsController)
    .controller('NewsletterController', NewsletterController)
    .controller('SearchController', SearchController)
    .controller('StaffController', StaffController);

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
import ClientImage from './angular/components/ClientImage';
import ContactForm from './angular/components/ContactForm';
import InstagramFeed from './angular/components/InstagramFeed';
import Navigation from './angular/components/Navigation';
import OfficeLocations from './angular/components/OfficeLocations';
import ClientRoster from './angular/components/ClientRoster';
import SocialSection from './angular/components/SocialSection';
import TalentHeader from './angular/components/TalentHeader';
import TalentNavigation from './angular/components/TalentNavigation';
import TalentResume from './angular/components/TalentResume';
import TalentVideo from './angular/components/TalentVideo';
import TalentSectionHeader from './angular/components/TalentSectionHeader';
import TwitterFeed from './angular/components/TwitterFeed';

angular.module('MSAAgency.directives', [])
    .directive('animatedInput', AnimatedInput)
    .directive('chooseCity', ChooseCity)
    .directive('clientImage', ClientImage)
    .directive('clientRoster', ClientRoster)
    .directive('contactForm', ContactForm)
    .directive('instagramFeed', InstagramFeed)
    .directive('latestNews', LatestNews)
    .directive('mediaSlider', MediaSlider)
    .directive('newsArticle', NewsArticle)
    .directive('newsletterWidget', NewsletterWidget)
    .directive('navigation', Navigation)
    .directive('officeLocations', OfficeLocations)
    .directive('resizeElement', ResizeElement)
    .directive('socialSection', SocialSection)
    .directive('talentHeader', TalentHeader)
    .directive('talentNavigation', TalentNavigation)
    .directive('talentResume', TalentResume)
    .directive('talentSectionHeader', TalentSectionHeader)
    .directive('talentVideo', TalentVideo)
    .directive('toggleNavigation', ToggleNavigation)
    .directive('twitterFeed', TwitterFeed);

require('./angular/components/MainHeader');
require('./angular/components/MainFooter');
require('./angular/components/SocialIcons');

// Filters
import GetTwitterLinks from './angular/filters/GetTwitterLinks';

angular.module('MSAAgency.filters', [])
    .filter('getTwitterLinks', GetTwitterLinks);
