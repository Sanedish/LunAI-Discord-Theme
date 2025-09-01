/**
 * @name LunAI Easter Egg
 * @description Adds a hidden LunAI button that opens a popup with a YouTube video.
 * @version 1.0.0
 * @author LunAI
 */

module.exports = class LunAIEasterEgg {
  start() {
    // Trigger button
    const btn = document.createElement("div");
    btn.id = "lunai-trigger";
    btn.innerText = "LunAI";
    Object.assign(btn.style, {
      position: "fixed",
      top: "6px", left: "12px",
      fontFamily: "Orbitron, sans-serif",
      fontSize: "16px",
      fontWeight: "600",
      color: "#41C8FF",
      cursor: "pointer",
      zIndex: "9999",
      textShadow: "0 0 8px #7A4CFF"
    });
    document.body.appendChild(btn);

    // Modal
    const modal = document.createElement("div");
    modal.id = "lunai-easter-egg";
    Object.assign(modal.style, {
      display: "none",
      position: "fixed",
      top: "0", left: "0",
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.8)",
      backdropFilter: "blur(8px)",
      zIndex: "10000",
      alignItems: "center",
      justifyContent: "center"
    });
    modal.innerHTML = `
      <div style="
        background: rgba(20,20,30,0.9);
        padding: 30px;
        border-radius: 12px;
        box-shadow: 0 0 20px #41C8FF;
        text-align: center;
        color: #fff;
        animation: pop 0.5s ease;
      ">
        <h2>🎉 Hooray! You found it!</h2>
        <div id="lunai-video-box" style="filter: blur(12px); cursor: pointer;">
          <iframe id="lunai-video" width="560" height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?enablejsapi=1"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen>
          </iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const videoBox = modal.querySelector("#lunai-video-box");
    const iframe = modal.querySelector("#lunai-video");

    // Show modal
    btn.onclick = () => modal.style.display = "flex";

    // Reveal & autoplay YouTube video
    videoBox.onclick = () => {
      videoBox.style.filter = "none";
      iframe.src += "&autoplay=1";
    };

    // Close modal on background click
    modal.onclick = e => {
      if (e.target === modal) {
        modal.style.display = "none";
        iframe.src = iframe.src.replace("&autoplay=1", ""); // reset
        videoBox.style.filter = "blur(12px)";
      }
    };
  }

  stop() {
    document.getElementById("lunai-trigger")?.remove();
    document.getElementById("lunai-easter-egg")?.remove();
  }
};
