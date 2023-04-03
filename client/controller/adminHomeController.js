window.adminHomeController = function ($scope, $http) {
  $scope.updateBooking = {
    id: "",
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

  $scope.getData = function () {
    $http.get("http://localhost:3000/home").then(function (response) {
      // console.log(response.data);
      $scope.adminData = response.data;
    });
  };

  $scope.getData();

  $scope.deleteData = function (record) {
    // console.log(record);
    $http
      .delete("http://localhost:3000/home/" + record.id)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          $scope.getData();
        }
        //
        // Refresh the data after deleting the record
      });
  };

  $scope.getDataById = function (data) {
    // event.preventDefault();
    console.log(data);
    console.log($scope.updateBooking);
    $http
      .get(`http://localhost:3000/home/${data}`)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          $scope.updateBooking = {
            id: response.data.id,
            fullName: response.data.fullName,
            passport: response.data.passport,
            email: response.data.email,
            gender: response.data.gender,
            phoneNumber: response.data.phoneNumber,
            flight: response.data.flight,
            birthday: new Date(response.data.birthday),
            luggage: response.data.luggage,
            payment: response.data.payment,
          };

          //   //  $scope.form.$setUntouched();
          //   //  $scope.form.$setPristine();
          //   console.log("success");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.updateData = function (id) {
    // console.log(convertTime("2023-04-20T17:00:00.000Z"));
    // console.log("111", id);
    var date = new Date();

    // Sử dụng filter của AngularJS để chuyển đổi định dạng datetime sang định dạng date
    // $scope.selectedDate = $filter("date")(date, "yyyy-MM-dd");

    let updateData = {
      fullName: $scope.updateBooking.fullName,
      passport: $scope.updateBooking.passport,
      email: $scope.updateBooking.email,
      gender: $scope.updateBooking.gender,
      phoneNumber: $scope.updateBooking.phoneNumber,
      flight: $scope.updateBooking.flight,
      birthday: $scope.updateBooking.birthday,
      luggage: $scope.updateBooking.luggage,
      payment: $scope.updateBooking.payment,
    };
    $http
      .put(`http://localhost:3000/home/${id}`, updateData)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          $scope.updateBooking = {
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
          $scope.getData();

          //   console.log("success");
        }
      });
  };

  $scope.convertTime = function (utcTime) {
    const dateObj = new Date(utcTime); // create a Date object
    const options = { year: "numeric", month: "numeric", day: "numeric" }; // options for formatting the date string
    const dateStr = dateObj.toLocaleDateString("en-US", options);
    return dateStr;
  };
  // $scope.localTime = convertTime($scope.adminData.birthday);
};
