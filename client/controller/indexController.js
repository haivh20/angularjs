var app = angular.module("myApp", ["ngRoute"]);
app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "views/users/home.html",
      controller: homeController,
    })
    .when("/blog", {
      templateUrl: "views/users/blog.html",
      controller: blogController,
    })
    .when("/about", {
      templateUrl: "views/users/about.html",
      controller: aboutController,
    })
    .when("/room", {
      templateUrl: "views/users/rooms.html",
      controller: roomController,
    })
    .when("/contact", {
      templateUrl: "views/users/contact.html",
      controller: contactController,
    })
    .when("/adminHome", {
      templateUrl: "views/admin/adminHome.html",
      controller: adminHomeController,
    });
});
