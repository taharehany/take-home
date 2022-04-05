angular
  .module('appModule')
  .component('teamFilter', {
    templateUrl: 'components/team-filter/team-filter.html',
    controller: TeamFilterComponent,
    controllerAs: 'TeamFilterComponentVm',
    bindings: {
      teamFilter: '<',
    },
  });

function TeamFilterComponent() {}
