export default class ClientCategoryController {
    // @ngInject
    constructor($stateParams, ClientService) {
        // Dependencies
        this.$stateParams = $stateParams;
        this.clientService = ClientService;

        this.clientCategory = $stateParams.category;
        this.categories = [];
        
        // Client data
        this.onCameraClients = [];
        this.dancersClients = [];
        this.kidsAndTeensClients = [];
        this.specialityClients = [];
        this.stageDirectorsClients = [];
        this.creativeDirectorsClients = [];
        this.choreographyClients = [];
        this.productionClients = [];
        this.speakerClients = [];
        this.masterInstructorClients = [];
        this.instructorClients = [];
        this.sytycdClients = [];
    }

    initialize() {
        this.categories = this.clientService.getCategoriesFromParam(this.$stateParams.category);

        this.clientService.getByCategory(this.categories)
            .then(response => {
                // Filter data based on category
                this.onCameraClients = this.clientService.filterByCategory(response, 'on_camera');
                this.dancersClients = this.clientService.filterByCategory(response, 'dancer');
                this.kidsAndTeensClients = this.clientService.filterByCategory(response, 'kids_teen');
                this.specialityClients = this.clientService.filterByCategory(response, 'speciality_act');
                this.stageDirectorsClients = this.clientService.filterByCategory(response, 'stage_director');
                this.creativeDirectorsClients = this.clientService.filterByCategory(response, 'creative_director');
                this.choreographyClients = this.clientService.filterByCategory(response, 'choreographer');
                this.productionClients = this.clientService.filterByCategory(response, 'production');
                this.speakerClients = this.clientService.filterByCategory(response, 'speaker');
                this.masterInstructorClients = this.clientService.filterByCategory(response, 'master_instructor');
                this.instructorClients = this.clientService.filterByCategory(response, 'instructor');
                this.sytycdClients = this.clientService.filterByCategory(response, 'sytycd');
            });
    }
}
