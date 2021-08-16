/* eslint-env jquery*/

// import 'core-js/stable';
// import 'webp-in-css/polyfill';
// import 'picturefill';

import '../blocks/countdown/countdown';
import '../blocks/options/options';
import '../blocks/reviews/reviews';
import '../blocks/advantage/advantage';

(function () {

  const forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      }, false);
    });
})();




