const page = document.body.dataset.page;

const videoMap = {
  // หน้าแรกไม่มีวิดีโอ ไม่ต้องใส่ home
  about: ["videos/about.mp4/cyrene.mp4" , "videos/about.mp4/Back At Penacony.mp4" , "videos/about.mp4/รุ่นเจ๋.mp4"], 
  portfolio: ["videos/work.mp4/Uncle!!!.mp4", "videos/work.mp4/python.mp4", "videos/work.mp4/money.mp4","videos/work.mp4/ความรักที่แท้จริง.mp4"],
  contact: ["videos/contact/เพลง365 วันกับเครื่องบินกระดาษ.mp4","videos/contact/หนูไม่รู้ x ผู้ชายในฝัน.mp4", "videos/contact/jumpingmachinecover.mp4","videos/contact/So calm down.mp4","videos/contact/บิ๊กซ่างกวน x วั่นสื้อทุยเยี่ยน.mp4"]
};

const videoList = videoMap[page] || [];
let currentIndex = 0;

const videoElement = document.getElementById("mainVideo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function loadVideo(index) {
  if (!videoList.length) return;
  videoElement.pause();
  videoElement.querySelector("source").src = videoList[index];
  videoElement.load();
  videoElement.play();
}

if (prevBtn && nextBtn) {
  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + videoList.length) % videoList.length;
    loadVideo(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % videoList.length;
    loadVideo(currentIndex);
  });
}

window.addEventListener("load", () => loadVideo(currentIndex));