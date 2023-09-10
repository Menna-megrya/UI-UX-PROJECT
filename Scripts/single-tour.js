  // Get all the link elements with the class "content-link"
  var links = document.getElementsByClassName('content-link');

  // Function to show the selected content
  function showContent(contentId) {
      // Hide all content divs
      var contentDivs = document.getElementById('content-container').getElementsByClassName('contents');
      for (var j = 0; j < contentDivs.length; j++) {
          contentDivs[j].style.display = 'none';
      }

      // Show the selected content div
      var selectedContent = document.getElementById(contentId);
      selectedContent.style.display = 'block';

      // Store the selected content in localStorage
      localStorage.setItem('selectedContent', contentId);
  }

  // Add click event listeners to each link
  for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function (event) {
          event.preventDefault(); // Prevent the default link behavior

          var contentId = this.getAttribute('data-content'); // Get the data-content attribute value
          showContent(contentId);
      });
  }

  // Show the default content when the page loads or is refreshed
  window.addEventListener('DOMContentLoaded', function () {
      var defaultContentId = localStorage.getItem('selectedContent') || links[0].getAttribute('data-content');
      showContent(defaultContentId);
  });