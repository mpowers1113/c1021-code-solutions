var $tabContainer = document.querySelector('.tab-container');

var $tabs = document.querySelectorAll('.tab');

var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabViewHandler);

function tabViewHandler(event) {
  var dataViewVal = event.target.getAttribute('data-view');

  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabs.length; i++) {
    var individualTab = $tabs[i];
    if (event.target === individualTab) {
      individualTab.className = 'tab active';
    } else {
      individualTab.className = 'tab';
    }
  }
  for (var j = 0; j < $view.length; j++) {
    var viewTab = $view[j];
    if (viewTab.getAttribute('data-view') === dataViewVal) {
      viewTab.className = 'view';
    } else {
      viewTab.className = 'view hidden';
    }
  }
}
