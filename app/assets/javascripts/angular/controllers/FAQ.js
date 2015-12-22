export default class FAQController {
    // @ngInject
    constructor($rootScope, FAQService) {
        this.$rootScope = $rootScope;
        this.faqService = FAQService;

        this.questions = [];
        this.openedQuestions = [];
    }

    initialize() {
        this.getQuestions();
    }

    /**
     * Get questions
     */
    getQuestions() {
        this.$rootScope.isLoadingPage = true;

        return this.faqService.get()
            .then(response => {
                this.questions = response;
            })
            .finally(() => this.$rootScope.isLoadingPage = false);
    }

    /**
     * Toggle opened faqs
     *
     * @param {Number} index
     */
    toggleQuestion(index) {
        // Remove from array if present
        if(this.openedQuestions.indexOf(index) !== -1) {
            this.openedQuestions.splice(this.openedQuestions.indexOf(index), 1);
            return;
        }

        // Add to array if not present
        this.openedQuestions.push(index);
    }
}
