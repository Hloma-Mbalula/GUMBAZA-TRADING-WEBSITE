function showSidebar(event){
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display="flex"
    
}
function hideSidebar(event){
    event.preventDefault();
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display="none"
}
function showDropdown(){
    const dropdown = document.querySelector(".dropdown")
    dropdown.style.display="flex"
}

/* $(document).ready(function(){
  // Prevent default behavior of anchor links inside the dropdown menu
  $('#nav-menu').on('click', 'a', function(event){
    event.stopPropagation(); // Stop the event from bubbling up
  });

  // Toggle dropdown menu on menu icon click
  $('#menu-icon').click(function(){
    $('#nav-menu').slideToggle();
  });
});*/

