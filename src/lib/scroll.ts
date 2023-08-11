export function disableScroll() {
  window.onscroll = function() {
    window.scrollTo(0, 0);
  };
  window.onwheel = function() {
    window.scrollTo(0, 0);
  };
  window.ontouchstart = function() {
    window.scrollTo(0, 0);
  };
  window.ontouchmove = function() {
    window.scrollTo(0, 0);
  };
  window.ontouchend = function() {
    window.scrollTo(0, 0);
  };
}

export function enableScroll() {
  window.onscroll = function() {};
  window.onwheel = function() {};
  window.ontouchstart = function() {};
  window.ontouchmove = function() {};
  window.ontouchend = function() {};
}