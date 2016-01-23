export function Paginate() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            currentPage: '=',
            pageCount: '=',
            parent: '=' // reference to parent controller to fire external callback
        },
        controller: 'PaginateController as PaginateCtrl',
        bindToController: true,
        template: `
            <div class="pagination">
                <ul>
                    <li ng-if="PaginateCtrl.currentPage > 3"
                        ng-click="PaginateCtrl.prev(1)">1</li>

                    <li ng-if="PaginateCtrl.currentPage > 2"
                        ng-click="PaginateCtrl.prev(PaginateCtrl.currentPage - 2)">{{ PaginateCtrl.currentPage - 2 }}</li>

                    <li ng-if="PaginateCtrl.currentPage > 1"
                        ng-click="PaginateCtrl.prev(PaginateCtrl.currentPage - 1)">{{ PaginateCtrl.currentPage - 1 }}</li>

                    <li class="active">{{ PaginateCtrl.currentPage }}</li>

                    <li ng-if="(PaginateCtrl.currentPage + 1) < PaginateCtrl.pageCount"
                        ng-click="PaginateCtrl.next(PaginateCtrl.currentPage + 1)">{{ PaginateCtrl.currentPage + 1 }}</li>

                    <li ng-if="(PaginateCtrl.currentPage + 2) < PaginateCtrl.pageCount"
                        ng-click="PaginateCtrl.next(PaginateCtrl.currentPage + 2)">{{ PaginateCtrl.currentPage + 2 }}</li>

                    <li ng-if="PaginateCtrl.currentPage < PaginateCtrl.pageCount"
                        ng-click="PaginateCtrl.next(PaginateCtrl.pageCount)">{{ PaginateCtrl.pageCount }}</li>
                </ul>
            </div>
        `
    };
}

export class PaginateController {
    constructor() {}

    prev(page) {
        if(page > 0) {
            this.currentPage = page;

            this.clickHandler(this.currentPage);
        }
    }

    next(page) {
        if(page <= this.pageCount) {
            this.currentPage = page;

            this.clickHandler(this.currentPage);
        }
    }

    clickHandler(page = 1) {
        this.parent.paginate(page);
    }
}
