export function disableScroll() {
  window.onscroll = function() {
    window.scrollTo(0, 0);
  };
  window.onwheel = function() {
    window.scrollTo(0, 0);
  };
}

export function enableScroll() {
  window.onscroll = function() {};
  window.onwheel = function() {};
}