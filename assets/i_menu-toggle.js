document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const parentMenu = document.querySelector('.parent-menu');
   
    function toggleMenu() {
      parentMenu.classList.toggle('active');
      if (parentMenu.classList.contains('active')) {
        parentMenu.style.display = 'flex';
      } else {
        parentMenu.style.display = 'none';
      }
    }
   
    function closeMenu() {
      parentMenu.classList.remove('active');
      parentMenu.style.display = 'none';
    }
   
    function handleResize() {
      if (window.innerWidth <= 768) {
        menuToggle.style.display = 'block';
        parentMenu.style.display = 'none';
      } else {
        menuToggle.style.display = 'none';
        parentMenu.style.display = 'flex';
      }
    }
   
    menuToggle.addEventListener('click', toggleMenu);
    menuClose.addEventListener('click', closeMenu);
    window.addEventListener('resize', handleResize);
   
    // Initial check
    handleResize();
   
    // Image handling for parent and submenu links
    const submenuLinks = document.querySelectorAll('.sub-menu a[data-image]');
    submenuLinks.forEach((link) => {
      link.addEventListener('mouseover', function () {
        const imageUrl = this.getAttribute('data-image');
        const parentImageUrl = this.getAttribute('data-parent-image');
        const submenuImage = this.closest('.sub-menu').querySelector('.submenu-image');
        if (imageUrl || parentImageUrl) {
          submenuImage.src = imageUrl || parentImageUrl;
          submenuImage.style.display = 'block';
        } else {
          submenuImage.style.display = 'none';
        }
      });
    });
  });