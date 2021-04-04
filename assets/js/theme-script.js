$(document).ready(function () {
// Active sidebar dashboard
// 	var activeSidebar = function () {
// 		$('.template-administrator .sidebar .navbar .collapse').on('show.bs.collapse', function () {
// 			$(this).prev('.nav-link').addClass('active');
// 			$('.template-administrator .sidebar .navbar > .nav > .nav-item > .nav-link').removeClass('active');
// 		})
// 	};
// 	activeSidebar();

//  Toggle Sidebar - Toggle Class element Boby
// let windowWidth = $(window).width();
	var toggleSidebar = function () {
		$('.template-administrator .toggleSidebar').click(function () {
			$('.template-administrator').toggleClass('active-sidebar');
			// if (windowWidth > 992) {
			// $('.sidebar .navbar .collapse.show').removeClass('show');
			// }
		});
	}
	
	toggleSidebar();
	
	$('.template-administrator .sidebar-overlay').click(function (e) {
		$('.home-page').removeClass('active-sidebar');
	})
	
})