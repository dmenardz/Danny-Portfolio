var tablinks = document.getElementsByClassName('tab-links');
  var tabcontents = document.getElementsByClassName('tab-contents');

  function opentab(tabname) {
    for (tablink of tablinks) {
      tablink.classList.remove('active-link');
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove('active-tab');
    }
    event.currentTarget.classList.add('active-link'); // Change Event.target to event.currentTarget
    document.getElementById(tabname).classList.add('active-tab'); // Change 'active-link' to 'active-tab'
  }

  var sideMenu = document.getElementById('sideMenu');
  function openMenu(){
    sideMenu.style.right ="0";
  }

  function closeMenu(){
    sideMenu.style.right ="-200px";
  }
  window.addEventListener('scroll', function() {
    const header = document.getElementById('sticky');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.classList.add('sticky');
      header.classList.add('scrolled'); // Add this line to add the background color class
    } else {
      header.classList.remove('sticky');
      header.classList.remove('scrolled'); // Add this line to remove the background color class
    }
  });

  //Google Sheet Script

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxdxCbOun98K08yTT6hecF6qC0kr0PKWdjo8zzkdTcOE2xndOhCURH8Mk3lgYVMkNCtuQ/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
