// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Generic chip-based filter: any .chip inside [data-filter-group],
  // filtering sibling cards that carry data-category
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var chips = group.querySelectorAll('.chip');
    var targetSelector = group.getAttribute('data-filter-target');
    var items = document.querySelectorAll(targetSelector);

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chips.forEach(function (c) { c.classList.remove('is-active'); });
        chip.classList.add('is-active');
        var value = chip.getAttribute('data-filter');
        items.forEach(function (item) {
          var cat = item.getAttribute('data-category') || '';
          var match = value === 'all' || cat.split(' ').indexOf(value) !== -1;
          item.style.display = match ? '' : 'none';
        });
      });
    });
  });

  // Contact / apply form: front-end only placeholder success state
  document.querySelectorAll('form[data-demo-form]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var note = form.querySelector('.form-status');
      if (note) {
        note.textContent = 'This is a design preview — hook this form up to Formspree, Google Forms, or your backend of choice to go live.';
        note.style.display = 'block';
      }
    });
  });
});
