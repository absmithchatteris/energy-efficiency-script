// Function to set the energy efficiency image
function setEnergyEfficiencyImage(className) {
  const imageMap = {
    "A": "https://cdn11.bigcommerce.com/s-fzf0tahin3/images/stencil/320w/image-manager/a-right-colour.png",
    "B": "https://cdn11.bigcommerce.com/s-fzf0tahin3/images/stencil/320w/image-manager/b-right-colour.png",
    "C": "https://cdn11.bigcommerce.com/s-fzf0tahin3/images/stencil/320w/image-manager/c-right-colour.png",
    "D": "https://cdn11.bigcommerce.com/s-fzf0tahin3/images/stencil/320w/image-manager/d-right-colour.png",
    "E": "https://cdn11.bigcommerce.com/s-fzf0tahin3/images/stencil/320w/image-manager/e-right-colour.png",
    "F": "https://cdn11.bigcommerce.com/s-fzf0tahin3/images/stencil/320w/image-manager/f-right-colour.png",
    "G": "https://cdn11.bigcommerce.com/s-fzf0tahin3/images/stencil/320w/image-manager/g-right-colour.png"
  };

  const imgPath = imageMap[className];
  if (imgPath) {
    document.getElementById("energy-efficiency").innerHTML = `<img src="${imgPath}" alt="Energy Efficiency Class ${className}" style="width:100px;height:auto;">`;
  } else {
    document.getElementById("energy-efficiency").innerText = "Energy Efficiency Class not available";
  }
}

// Function to extract and set the energy efficiency class
function extractAndSetEnergyClass() {
  const energyClassElement = document.getElementById('energy-efficiency-class');
  if (energyClassElement) {
    // Extract the class from the text content
    const energyClassText = energyClassElement.textContent.trim();
    const energyClass = energyClassText.split(": ")[1].trim().toUpperCase(); // Get the class letter after "Energy Efficiency Class: "
    console.log("Detected Energy Class:", energyClass); // Debugging step
    setEnergyEfficiencyImage(energyClass);
  } else {
    console.error('Energy efficiency class element not found');
  }
}

// Call the function to extract and set the energy efficiency class
document.addEventListener("DOMContentLoaded", extractAndSetEnergyClass);
