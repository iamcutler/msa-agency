export default class TalentCategoryController {
    // @ngInject
    constructor($stateParams) {
        this.talentCategory = $stateParams.category;
        this.talent = {
            choreography: [
                { name: 'Julie McDonald', title: 'Founder/Sr. Agent', img: 'http://www.msaagency.com/images/staff/74858411100511.jpg' },
                { name: 'Tony Selznick', title: 'Founder/Sr. Agent', img: 'http://dancemogul.com/news/wp-content/uploads/2013/02/tony.jpg' },
                { name: 'JC Gutierrez', title: 'Los Angeles and New York Director/Sr. Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Jenn Procter', title: 'Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Shelli Marghertis', title: 'Agent, Education Department/Choreography', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Daniel Shirk', title: 'Talent Payment Processor', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Brandon Louis', title: 'Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Chelsea Blake', title: 'Agent, Kids and Teens', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Megan Hunt', title: 'Jr. Agent, Education Department', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Mara Boyce', title: 'Executive Assistant', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' }
            ],
            creative_directors: [
                { name: 'Julie McDonald', title: 'Founder/Sr. Agent', img: 'http://www.msaagency.com/images/staff/74858411100511.jpg' },
                { name: 'Tony Selznick', title: 'Founder/Sr. Agent', img: 'http://dancemogul.com/news/wp-content/uploads/2013/02/tony.jpg' },
                { name: 'JC Gutierrez', title: 'Los Angeles and New York Director/Sr. Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Jenn Procter', title: 'Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Shelli Marghertis', title: 'Agent, Education Department/Choreography', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Daniel Shirk', title: 'Talent Payment Processor', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Brandon Louis', title: 'Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Chelsea Blake', title: 'Agent, Kids and Teens', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Megan Hunt', title: 'Jr. Agent, Education Department', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Mara Boyce', title: 'Executive Assistant', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' }
            ],
            stage_directors: [
                { name: 'Julie McDonald', title: 'Founder/Sr. Agent', img: 'http://www.msaagency.com/images/staff/74858411100511.jpg' },
                { name: 'Tony Selznick', title: 'Founder/Sr. Agent', img: 'http://dancemogul.com/news/wp-content/uploads/2013/02/tony.jpg' },
                { name: 'JC Gutierrez', title: 'Los Angeles and New York Director/Sr. Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Jenn Procter', title: 'Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Shelli Marghertis', title: 'Agent, Education Department/Choreography', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Daniel Shirk', title: 'Talent Payment Processor', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Brandon Louis', title: 'Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Chelsea Blake', title: 'Agent, Kids and Teens', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Megan Hunt', title: 'Jr. Agent, Education Department', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Mara Boyce', title: 'Executive Assistant', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' }
            ],
            live_production: [
                { name: 'Julie McDonald', title: 'Founder/Sr. Agent', img: 'http://www.msaagency.com/images/staff/74858411100511.jpg' },
                { name: 'Tony Selznick', title: 'Founder/Sr. Agent', img: 'http://dancemogul.com/news/wp-content/uploads/2013/02/tony.jpg' },
                { name: 'JC Gutierrez', title: 'Los Angeles and New York Director/Sr. Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' },
                { name: 'Jenn Procter', title: 'Agent', img: 'https://upload.wikimedia.org/wikipedia/commons/3/38/Two_dancers.jpg' }
            ]
        };
    }
}