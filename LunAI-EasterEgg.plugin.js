/**
 * @name LunAI Easter Egg
 * @description Adds a hidden LunAI button that opens a confetti popup with a video.
 * @author LunAI
 */

module.exports = class LunAIEasterEgg {
  start() {
    // Create trigger
    const btn = document.createElement("div");
    btn.id = "lunai-trigger";
    btn.innerText = "LunAI";
    document.body.appendChild(btn);

    // Modal container
    const modal = document.createElement("div");
    modal.id = "lunai-easter-egg";
    modal.innerHTML = `
      <div class="egg-box">
        <h2>🎉 Hooray! You found it!</h2>
        <div class="video-container" id="lunai-video-box">
          <video id="lunai-video" width="560" controls>
            <source src="https://raw.githubusercontent.com/Sanedish/LunAI-Discord-Theme/main/lunai_box_easter.mp4" type="video/mp4">
          </video>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const videoBox = modal.querySelector("#lunai-video-box");
    const video = modal.querySelector("#lunai-video");

    // Open modal
    btn.onclick = () => modal.style.display = "flex";

    // Play video when clicked
    videoBox.onclick = () => {
      videoBox.classList.add("active");
      video.play();
    };

    // Close modal when clicking background
    modal.onclick = e => {
      if (e.target === modal) {
        modal.style.display = "none";
        video.pause();
        video.currentTime = 0;
        videoBox.classList.remove("active");
      }
    };
  }

  stop() {
    document.getElementById("lunai-trigger")?.remove();
    document.getElementById("lunai-easter-egg")?.remove();
  }
};
