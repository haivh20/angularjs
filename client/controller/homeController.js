window.homeController = function ($scope, $http) {
  // $scope.apiURLHome = "http://localhost:3000/home";
  $scope.title = "Rent an appartment for your vacation";

  $scope.newBooking = {
    fullName: "",
    passport: "",
    email: "",
    gender: "",
    phoneNumber: "",
    flight: "",
    birthday: "",
    luggage: "",
    payment: "",
  };

  console.log($scope.newBooking);

  $scope.addData = function () {
    // event.preventDefault();
    console.log($scope.newBooking);
    $http
      .post("http://localhost:3000/home", $scope.newBooking)
      .then(function (response) {
        if (response.status === 201) {
          $scope.newBooking = {
            fullName: "",
            passport: "",
            email: "",
            gender: "",
            phoneNumber: "",
            flight: "",
            birthday: "",
            luggage: "",
            payment: "",
          };

          $scope.form.$setUntouched();
          $scope.form.$setPristine();
          console.log("success");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // $scope.getData = function () {
  //   $http.get("http://localhost:3000/home").then(function (response) {
  //     $scope.data = response.data;
  //   });
  // };

  // $scope.getData();
};
