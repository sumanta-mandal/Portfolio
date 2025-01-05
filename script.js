document.addEventListener("mousemove", function (e) {
    const gradientLayer = document.getElementById("gradientLayer");
  
    // Get mouse position
    const x = e.clientX;
    const y = e.clientY;
  
    // Update the gradient position dynamically
    gradientLayer.style.background = `radial-gradient(
      600px circle at ${x}px ${y}px, 
      rgba(29, 78, 216, 0.15), 
      transparent 80%
    )`;
  });

  function downloadResume() {
    // Trigger a file download
    const resumePath = "SumantaMandalResume.pdf"; // Ensure the file is in the same folder
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "SumantaMandalResume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

