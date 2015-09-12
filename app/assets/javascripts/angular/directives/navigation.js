export default function Navigation() {
  return {
    restrict: 'E',
    replace: true,
    template: `
      <nav role="navigation" id="sidebar-nav">
        <a href="" class="nav-btn" toggle-navigation>
          <div class="btn">
            <div class="nav-lines">
              <div class="line"></div>
              <div class="line"></div>
              <div class="line"></div>
            </div>
            MENU
          </div>
        </a>

        <div class="nav-sidebar">
          <div class="brand">
            <a ui-sref="home">McDonald/Selznick Associates</a>
          </div>

          <ul class="main-links">
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Talent</a></li>
            <li><a href="">News</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Submissions</a></li>
          <ul>
        </div>
      </nav>
    `
  };
}
