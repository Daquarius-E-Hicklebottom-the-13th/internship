document.addEventListener("DOMContentLoaded", function () {
  // TODO #1: Confirm this ID matches the button in your HTML.
  const magicButton = document.getElementById("magicButton");

  magicButton.addEventListener("click", function () {
    // TODO #2: Use any element selector you want here (e.g., .hero-section).
    const heroSection = document.querySelector(".hero-section");

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    heroSection.style.backgroundColor = randomColor;

    // TODO #3: Customize the alert message text
    alert(
      "Hicklebottom strikes again! I have changed the color to " +
      randomColor.toUpperCase()
    );
  });
});
