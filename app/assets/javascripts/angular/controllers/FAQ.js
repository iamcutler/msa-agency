export default class FAQController {
    // @ngInject
    constructor($rootScope, FAQService) {
        this.$rootScope = $rootScope;
        this.faqService = FAQService;

        this.questions = [];
    }

    initialize() {
        this.getQuestions();
    }

    getQuestions() {
        this.$rootScope.isLoadingPage = true;

        return this.faqService.get()
            .then(response => {
                this.questions = response;
            })
            .finally(() => this.$rootScope.isLoadingPage = false);
    }
}
