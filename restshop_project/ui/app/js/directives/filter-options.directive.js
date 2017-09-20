angular
    .module('restShopApp')
    .directive('rsFilterOptions', filterOptions);

function filterOptions() {
    let directive = {
        restrict: 'E',
        templateUrl: '/static/partials/filter-options.html',
        scope: {
            tags: '=',
            inStock: '=',
            slider: '=',
            properties: '=',
            filterChange: '&'
        },
        controller: filterOptionsController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

/* @ngInject */
function filterOptionsController($timeout) {
    let vm = this;

    vm.filterChangeWrapper = filterChangeWrapper;

    ////////////

    function filterChangeWrapper() {
        // Wrap filterChange function to wait for $digest cycle to complete.
        $timeout(vm.filterChange, 0, false);
    }
}
