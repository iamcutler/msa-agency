export default class DirectorsController {
    // @ngInject
    constructor(ClientService) {
        this.clientService = ClientService;

        this.stageClients = [];
        this.creativeClients = [];
        this.musicClients = [];
        this.videoClients = [];
    }

    /**
     * Get clients
     */
    get() {
        this.clientService.getByCategory([
            'stage_director', 'creative_director', 'music_director', 'video_director'
        ])
            .then(response => {
                this.stageClients = this.clientService.filterByCategory(response, 'stage_director');
                this.creativeClients = this.clientService.filterByCategory(response, 'creative_director');
                this.musicClients = this.clientService.filterByCategory(response, 'music_director');
                this.videoClients = this.clientService.filterByCategory(response, 'video_director');
            })
            .catch(err => {
                console.log(err);
            });
    }
}
