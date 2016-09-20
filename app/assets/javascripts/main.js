'use strict';

require('angular/angular.min');
require('angular-ui-router/build/angular-ui-router.min');
require('angular-sanitize/angular-sanitize.min');
require('./angular-smooth-scroll.min');
require('ng-file-upload/dist/ng-file-upload-all.min');
require('./angular-socialshare.min');

// AngularJS
angular.module('MSAAgency', [
  'MSAAgency.controllers',
  'MSAAgency.services',
  'MSAAgency.directives',
  'MSAAgency.filters',
  'ui.router',
  'ngSanitize',
  'smoothScroll',
  'ngFileUpload',
  '720kb.socialshare'
])
.constant('ALLOWED_UPLOAD_TYPES', {
    list: ['jpg', 'jpeg', 'png', 'gif', 'mov', 'mp4', 'wmv', 'pdf']
});

// Configuration
require('./angular/config');
require('./angular/routes');

// Controllers
import AboutController from './angular/controllers/About';
import AffiliatesController from './angular/controllers/Affiliates';
import AppController from './angular/controllers/App';
import ArchivesController from './angular/controllers/Archives';
import BookingController from './angular/controllers/Booking';
import ClientCategoryController from './angular/controllers/ClientCategory';
import ClientCategoriesController from './angular/controllers/ClientCategories';
import ClientController from './angular/controllers/Client';
import ClientResumeController from './angular/controllers/ClientResume';
import ContactController from './angular/controllers/Contact';
import DirectorsController from './angular/controllers/Directors';
import FAQController from './angular/controllers/FAQ';
import SplashController from './angular/controllers/Splash';
import HomeController from './angular/controllers/Home';
import LegacyController from './angular/controllers/Legacy';
import NewsController from './angular/controllers/News';
import NewsPageController from './angular/controllers/NewsPage';
import NewsletterController from './angular/controllers/Newsletter';
import { PaginateController } from './angular/directives/Paginate';
import { RepresentationFormController } from './angular/components/RepresentationForm';
import SearchController from './angular/controllers/Search';
import { SearchBarController } from './angular/components/SearchBar';
import StaffController from './angular/controllers/Staff';

angular.module('MSAAgency.controllers', [])
    .controller('AboutController', AboutController)
    .controller('AffiliatesController', AffiliatesController)
    .controller('AppController', AppController)
    .controller('ArchivesController', ArchivesController)
    .controller('BookingController', BookingController)
    .controller('ClientCategoryController', ClientCategoryController)
    .controller('ClientCategoriesController', ClientCategoriesController)
    .controller('ClientController', ClientController)
    .controller('ClientResumeController', ClientResumeController)
    .controller('ContactController', ContactController)
    .controller('DirectorsController', DirectorsController)
    .controller('FAQController', FAQController)
    .controller('SplashController', SplashController)
    .controller('HomeController', HomeController)
    .controller('LegacyController', LegacyController)
    .controller('NewsController', NewsController)
    .controller('NewsPageController', NewsPageController)
    .controller('NewsletterController', NewsletterController)
    .controller('PaginateController', PaginateController)
    .controller('RepresentationFormController', RepresentationFormController)
    .controller('SearchController', SearchController)
    .controller('SearchBarController', SearchBarController)
    .controller('StaffController', StaffController);

// Services
import AffiliateService from './angular/services/Affiliate';
import ClientService from './angular/services/Client';
import CommonService from './angular/services/Common';
import CompanyService from './angular/services/Company';
import ContactService from './angular/services/Contact';
import FAQService from './angular/services/FAQ';
import NewsService from './angular/services/News';
import PageSlideService from './angular/services/PageSlide';
import SearchService from './angular/services/Search';
import SocialService from './angular/services/Social';
import StaffService from './angular/services/Staff';
import UploadService from './angular/services/Upload';

angular.module('MSAAgency.services', [])
    .service('AffiliateService', AffiliateService)
    .service('ClientService', ClientService)
    .service('CommonService', CommonService)
    .service('CompanyService', CompanyService)
    .service('ContactService', ContactService)
    .service('FAQService', FAQService)
    .service('NewsService', NewsService)
    .service('PageSlideService', PageSlideService)
    .service('SearchService', SearchService)
    .service('SocialService', SocialService)
    .service('StaffService', StaffService)
    .service('UploadService', UploadService);

// Directives
import AnimatedInput from './angular/directives/AnimatedInput';
import BGTransparentScroll from './angular/directives/bgTransparentScroll';
import ChooseCity from './angular/directives/ChooseCity';
import ClientNavScroll from './angular/directives/ClientNavScroll';
import GoToTopButton from './angular/directives/GoToTopButton';
import LatestNews from './angular/directives/LatestNews';
import MediaSlider from './angular/directives/MediaSlider';
import NewsletterWidget from './angular/directives/NewsletterWidget';
import { Paginate } from './angular/directives/Paginate';
import ResizeElement from './angular/directives/ResizeElement';
import ToggleNavigation from './angular/directives/ToggleNavigation';

// Components
import BookingForm from './angular/components/BookingForm';
import ClientImage from './angular/components/ClientImage';
import ClientPress from './angular/components/ClientPress';
import ClientReel from './angular/components/ClientReel';
import ClientResumeHeader from './angular/components/ClientResumeHeader';
import ClientRoster from './angular/components/ClientRoster';
import ClientSearchResult from './angular/components/ClientSearchResult';
import ClientVideo from './angular/components/ClientVideo';
import ContactForm from './angular/components/ContactForm';
import FeaturedNewsArticle from './angular/components/FeaturedNewsArticle';
import InstagramFeed from './angular/components/InstagramFeed';
import Navigation from './angular/components/Navigation';
import NewsArticle from './angular/components/NewsArticle';
import NewsSearchResult from './angular/components/NewsSearchResult';
import OfficeLocations from './angular/components/OfficeLocations';
import { RepresentationForm } from './angular/components/RepresentationForm';
import { SearchBar } from './angular/components/SearchBar';
import SocialSection from './angular/components/SocialSection';
import SubSectionHeader from './angular/components/SubSectionHeader';
import TalentHeader from './angular/components/TalentHeader';
import TalentResume from './angular/components/TalentResume';
import TwitterFeed from './angular/components/TwitterFeed';

angular.module('MSAAgency.directives', [])
    .directive('animatedInput', AnimatedInput)
    .directive('bgTransparentScroll', BGTransparentScroll)
    .directive('bookingForm', BookingForm)
    .directive('chooseCity', ChooseCity)
    .directive('clientImage', ClientImage)
    .directive('clientNavScroll', ClientNavScroll)
    .directive('clientPress', ClientPress)
    .directive('clientReel', ClientReel)
    .directive('clientResumeHeader', ClientResumeHeader)
    .directive('clientRoster', ClientRoster)
    .directive('clientSearchResult', ClientSearchResult)
    .directive('clientVideo', ClientVideo)
    .directive('contactForm', ContactForm)
    .directive('goToTopButton', GoToTopButton)
    .directive('instagramFeed', InstagramFeed)
    .directive('latestNews', LatestNews)
    .directive('mediaSlider', MediaSlider)
    .directive('featuredNewsArticle', FeaturedNewsArticle)
    .directive('newsArticle', NewsArticle)
    .directive('newsletterWidget', NewsletterWidget)
    .directive('newsSearchResult', NewsSearchResult)
    .directive('navigation', Navigation)
    .directive('officeLocations', OfficeLocations)
    .directive('paginate', Paginate)
    .directive('resizeElement', ResizeElement)
    .directive('representationForm', RepresentationForm)
    .directive('searchBar', SearchBar)
    .directive('socialSection', SocialSection)
    .directive('subSectionHeader', SubSectionHeader)
    .directive('talentHeader', TalentHeader)
    .directive('talentResume', TalentResume)
    .directive('toggleNavigation', ToggleNavigation)
    .directive('twitterFeed', TwitterFeed);

// Filters
import GetTwitterLinks from './angular/filters/GetTwitterLinks';
import StripHTML from './angular/filters/StripHTML';

angular.module('MSAAgency.filters', [])
    .filter('getTwitterLinks', GetTwitterLinks)
    .filter('stripHTML', StripHTML);

require('./angular/components/MainHeader');
require('./angular/components/MainFooter');
require('./angular/components/SocialIcons');
