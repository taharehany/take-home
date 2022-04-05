angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];

  activate();
  testfunc();

  function activate() {
    Employees.getEmployees()
      .then(({
        data,
      }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }

  function testfunc() {
    console.log('teeeeest');
  }
}
