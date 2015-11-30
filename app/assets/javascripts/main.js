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
import AffiliatesController from './angular/controllers/Affiliates';
import AppController from './angular/controllers/App';
import ArchivesController from './angular/controllers/Archives';
import ClientCategoryController from './angular/controllers/ClientCategory';
import ClientController from './angular/controllers/Client';
import ContactController from './angular/controllers/Contact';
import FAQController from './angular/controllers/FAQ';
import SplashController from './angular/controllers/Splash';
import HomeController from './angular/controllers/Home';
import LegacyController from './angular/controllers/Legacy';
import NavigationController from './angular/controllers/Navigation';
import NewsController from './angular/controllers/News';
import NewsletterController from './angular/controllers/Newsletter';
import { RepresentationFormController } from './angular/components/RepresentationForm';
import SearchController from './angular/controllers/Search';
import StaffController from './angular/controllers/Staff';

angular.module('MSAAgency.controllers', [])
    .controller('AboutController', AboutController)
    .controller('AffiliatesController', AffiliatesController)
    .controller('AppController', AppController)
    .controller('ArchivesController', ArchivesController)
    .controller('ClientCategoryController', ClientCategoryController)
    .controller('ClientController', ClientController)
    .controller('ContactController', ContactController)
    .controller('FAQController', FAQController)
    .controller('SplashController', SplashController)
    .controller('HomeController', HomeController)
    .controller('LegacyController', LegacyController)
    .controller('NavigationController', NavigationController)
    .controller('NewsController', NewsController)
    .controller('NewsletterController', NewsletterController)
    .controller('RepresentationFormController', RepresentationFormController)
    .controller('SearchController', SearchController)
    .controller('StaffController', StaffController);

// Services
import AffiliateService from './angular/services/Affiliate';
import ClientService from './angular/services/Client';
import CommonService from './angular/services/Common';
import ContactService from './angular/services/Contact';
import FAQService from './angular/services/FAQ';
import NewsService from './angular/services/News';
import PageSlideService from './angular/services/PageSlide';
import SearchService from './angular/services/Search';
import SocialService from './angular/services/Social';
import StaffService from './angular/services/Staff';

angular.module('MSAAgency.services', [])
    .service('AffiliateService', AffiliateService)
    .service('ClientService', ClientService)
    .service('CommonService', CommonService)
    .service('ContactService', ContactService)
    .service('FAQService', FAQService)
    .service('NewsService', NewsService)
    .service('PageSlideService', PageSlideService)
    .service('SearchService', SearchService)
    .service('SocialService', SocialService)
    .service('StaffService', StaffService);

// Directives
import ChooseCity from './angular/directives/ChooseCity';
import AnimatedInput from './angular/directives/AnimatedInput';
import LatestNews from './angular/directives/LatestNews';
import MediaSlider from './angular/directives/MediaSlider';
import NewsletterWidget from './angular/directives/NewsletterWidget';
import ResizeElement from './angular/directives/ResizeElement';
import ToggleNavigation from './angular/directives/ToggleNavigation';

// Components
import ClientImage from './angular/components/ClientImage';
import ClientRoster from './angular/components/ClientRoster';
import ClientSearchResult from './angular/components/ClientSearchResult';
import ClientVideo from './angular/components/ClientVideo';
import ContactForm from './angular/components/ContactForm';
import FeaturedNewsArticle from './angular/components/FeaturedNewsArticle';
import InstagramFeed from './angular/components/InstagramFeed';
import Navigation from './angular/components/Navigation';
import NewsSearchResult from './angular/components/NewsSearchResult';
import OfficeLocations from './angular/components/OfficeLocations';
import { RepresentationForm } from './angular/components/RepresentationForm';
import SocialSection from './angular/components/SocialSection';
import SubSectionHeader from './angular/components/SubSectionHeader';
import TalentHeader from './angular/components/TalentHeader';
import TalentResume from './angular/components/TalentResume';
import TwitterFeed from './angular/components/TwitterFeed';

angular.module('MSAAgency.directives', [])
    .directive('animatedInput', AnimatedInput)
    .directive('chooseCity', ChooseCity)
    .directive('clientImage', ClientImage)
    .directive('clientRoster', ClientRoster)
    .directive('clientSearchResult', ClientSearchResult)
    .directive('clientVideo', ClientVideo)
    .directive('contactForm', ContactForm)
    .directive('instagramFeed', InstagramFeed)
    .directive('latestNews', LatestNews)
    .directive('mediaSlider', MediaSlider)
    .directive('featuredNewsArticle', FeaturedNewsArticle)
    .directive('newsletterWidget', NewsletterWidget)
    .directive('newsSearchResult', NewsSearchResult)
    .directive('navigation', Navigation)
    .directive('officeLocations', OfficeLocations)
    .directive('resizeElement', ResizeElement)
    .directive('representationForm', RepresentationForm)
    .directive('socialSection', SocialSection)
    .directive('subSectionHeader', SubSectionHeader)
    .directive('talentHeader', TalentHeader)
    .directive('talentResume', TalentResume)
    .directive('toggleNavigation', ToggleNavigation)
    .directive('twitterFeed', TwitterFeed);

require('./angular/components/MainHeader');
require('./angular/components/MainFooter');
require('./angular/components/SocialIcons');

// Filters
import GetTwitterLinks from './angular/filters/GetTwitterLinks';

angular.module('MSAAgency.filters', [])
    .filter('getTwitterLinks', GetTwitterLinks);
