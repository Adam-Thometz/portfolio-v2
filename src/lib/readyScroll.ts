export default function readyScroll(element: HTMLElement): void {
  let callback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
        // Uncomment to keep components in place after loading
        // observer.unobserve(element);
      }
    });
  };
  let observer = new IntersectionObserver(callback);
  observer.observe(element);
}