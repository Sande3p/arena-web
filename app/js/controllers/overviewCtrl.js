/*
 * Copyright (C) 2014 TopCoder Inc., All Rights Reserved.
 */
/**
 * This file provides the overview controller.
 *
 * Changes in version 1.1 (Module Assembly - Web Arena UI Fix):
 * - Removed $http and $rootScope, added sessionHelper
 * - Changed userProfile.username to userProfile.handle to display correct information
 *
 * Changes in version 1.2 (Module Assembly - Web Arena UI - Rating Indicator):
 * - Removed the rating class function to use the global one in baseCtrl.js.
 *
 * @author dexy, amethystlei
 * @version 1.2
 */
'use strict';

var overviewCtrl = ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
    $scope.showSection = "overview";
    $scope.userProfile = $rootScope.userInfo();

    $scope.isInt = function (value) {
        return !isNaN(value) && (parseInt(value, 10) === value);
    };

    $scope.$watch('showSection', function () {
   // $timeout(function(){
        if ($scope.showSection === "users") {
            $scope.$broadcast('rebuild:activeUser');//},100);
        } else if ($scope.showSection === 'leaderboard') {
            $scope.$broadcast('rebuild:leader');
        }
    });
}];

module.exports = overviewCtrl;