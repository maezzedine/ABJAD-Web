export class Scroll {
  anchorHashCheck(component) {
    if (window.location.hash === component.$route.hash) {
      const el = document.getElementById(component.$route.hash.slice(1))

      if (el) {
        window.scrollTo({
            left: 0, 
            top: el.offsetTop,
            behavior: 'smooth'
        })
      }
    }
  }

  onScroll(component) {
    var sections = document.getElementsByTagName('section');
    for (var section of sections) {
      var diff = section.offsetTop - window.pageYOffset;
      if (diff > 0 && diff < screen.height) {

        if (component.$route.hash != `#${section.id}`) {
          component.$router.push({ hash: section.id });
        }
        break;
      }
    }
  }
}

export default new Scroll;