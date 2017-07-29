var foodieApp = angular.module('foodieApp',['ngRoute']);//framework of ng-app

//function for route configuration
function routeConfiguration($routeProvider)
{
	$routeProvider.when('/',{
		templateUrl:"pages/loginTemplate.html"
	});
	$routeProvider.when('/home',{
		templateUrl : "pages/mainTemplate.html"
	});
	$routeProvider.when('/restaurant/:id',{
		templateUrl : "pages/restaurant.html"
	});
}
//setting up route configuration
foodieApp.config(routeConfiguration);

 
//main controller 
foodieApp.controller("mainController",function($scope,$routeParams){
	$scope.restaurant=[{
		id:'1',
		name : 'Farzi Cafe',
		address : '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location : 'Connaught Place',
		category : 'Casual Dining, Bar',
		vote : '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},{
		id:'2',
		name: 'Open House Cafe',
	    address: 'Phase 1, Om Vihar, Nawada, Delhi, 110059',
	    location: 'Delhi',
	    category: 'Casual Dining Bar',
	    vote: '4.0',
	    cuisines: 'Modern Indian',
	    cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		id:'5',
		name: 'Imperfecto',
	  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	  	location: 'Connaught Place',
	  	category: 'Casual Dining Bar',
	    cuisines: 'Modern Indian',
	  	vote: '4.2',
	  	hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		id:'6',
		name : ' Cafe',
		address : '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location : 'Connaught Place',
		category : 'Casual Dining, Bar',
		vote : '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},{
		id:'3',
		name: 'The Hook',
	    address: '1A, Safdarjung Enclave, Block B7, Arjun Nagar, Safdarjung Enclave, Delhi 110016',
	    location: 'New Delhi',
	    category: 'Casual Dining Bar',
	    vote: '4.0',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		id:'4',
		name: 'Kingdom Of Momos',
	    address: 'Khasra No- 147/1-2-3, Village Bamnoli, Sector- 28, Delhi 110061',
	    location: 'Dwarka',
	    category: 'Casual Dining Bar',
	    vote: '4.5',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	}];
	
});

//login controller
foodieApp.controller("loginController",function($scope,$location){
	
	$scope.gotoMainPage = function(email,password)
	{
		
		if(email && password)
		{
			$location.url("/home");
			console.log("logged in");
		}
	}
});

//dishes controller
foodieApp.controller("restaurantController",function($scope,$routeParams,$http){
		$scope.restaurant=[{
		id:'1',
		name : 'Farzi Cafe',
		address : '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location : 'Connaught Place',
		category : 'Casual Dining, Bar',
		vote : '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},{
		id:'2',
		name: 'Open House Cafe',
	    address: 'Phase 1, Om Vihar, Nawada, Delhi, 110059',
	    location: 'Delhi',
	    category: 'Casual Dining Bar',
	    vote: '4.0',
	    cuisines: 'Modern Indian',
	    cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		id:'5',
		name: 'Imperfecto',
	  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	  	location: 'Connaught Place',
	  	category: 'Casual Dining Bar',
	    cuisines: 'Modern Indian',
	  	vote: '4.2',
	  	hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		id:'6',
		name : ' Cafe',
		address : '38/39, Level 1, Block E , Inner Circle, Connaught Place',
		location : 'Connaught Place',
		category : 'Casual Dining, Bar',
		vote : '4.2',
		cuisines: 'Modern Indian',
		cost: '2200',
		hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},{
		id:'3',
		name: 'The Hook',
	    address: '1A, Safdarjung Enclave, Block B 7, Arjun Nagar, Safdarjung Enclave, Delhi 110016',
	    location: 'New Delhi',
	    category: 'Casual Dining Bar',
	    vote: '4.0',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	},
	{
		id:'4',
		name: 'Kingdom Of Momos',
	    address: 'Khasra No- 147/1-2-3, Village Bamnoli, Sector- 28,Delhi, 110061',
	    location: 'Dwarka',
	    category: 'Casual Dining Bar',
	    vote: '4.5',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
		image : 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	}];
	
	$scope.foodItems = [{
		id : 1,
		name: 'Bean Salad',
		price : 400,
		url: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	},
	{
		id : 2,
		name: 'Bean Salad',
		price : 250,
		url: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	},
	{
		id : 3,
		name: 'Bean Salad',
		price : 350,
		url: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
	}];
	console.log('dishes controller'+$routeParams.id);
	$scope.restId = $routeParams.id;
	
/* $scope.showDishDetails = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}';
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key cb1314eeff544ef98ad491df3c844b31',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function(response) {
		console.log(response);
	}); */
	
});


