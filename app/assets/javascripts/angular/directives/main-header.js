angular.module('MSAAgency.directives')
.directive('mainHeader', [function() {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <header class="main">
        <a href="" class="nav">
          <div class="nav-btn">
            <div class="nav-lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
          </div>
          MENU
        </div>
      </a>

      <h1 class="logo">
        <a ui-sref="home">McDonald / Selznick Agency</a>
      </h1>

      <h2>A Talent Agency</h2>
    
      <div class="right-col">
        <ul class="contact-numbers">
          <li>
            <span>Los Angeles:</span>
            <a href="tel:3239576680">323-957-6680</a>
          </li>
          <li>
            <span>New York:</span>
            <a href="tel:6462376928">646-237-6928</a>
          </li>
        </ul>
    
        <social-icons></social-icons>
      </div>
    </header>
    `
  };
}]);