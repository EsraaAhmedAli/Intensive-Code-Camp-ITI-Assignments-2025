const images = [
    "./images/1.jpg",
    "./images/2.jpg",
    "./images/3.jpg",
    "./images/4.jpg",
    "./images/5.jpg",
    "./images/6.jpg",
  ];
  // ده المؤشر اللي بنعرف منه إحنا عند أنهي صورة دلوقتي
  let currentIndex = 0;   
  let intervalId = null;
  
  const imgElement = document.getElementById("slideshow");
  
  // تحديث الصورة المعروضة
  function showImage() {
    // بتغير src بتاع عنصر الصورة بحيث يعرض الصورة اللي موجودة في images[currentIndex].
    imgElement.src = images[currentIndex];
  }
  
  // زر Next
  function nextImage() {
    //  // لو لسه ما وصلناش لآخر صورة
    if (currentIndex < images.length - 1) {
      currentIndex++; // نزود واحد عشان نروح للصورة اللي بعدها
      showImage();  // نعرض الصورة الجديدة
    }
  }
  
  // زر Previous
  function previousImage() {
    if (currentIndex > 0) {    // لو إحنا مش عند أول صورة
      currentIndex--;         // ننقص واحد عشان نرجع للصورة اللي قبلها
      showImage();
    }
  }
  
  // زر SlideShow
  function startSlideshow() {
    // لو فيه بالفعل slideshow شغال، متعملش حاجة
    if (intervalId !== null) return;
  
    intervalId = setInterval(() => {
      currentIndex++;   // زود الصورة واحدة
      if (currentIndex >= images.length) {    // لو وصلنا لنهاية الصور
        currentIndex = 0; // نرجع لأول صورة
      }
      showImage();
    }, 2000); // 2 ثانية
  }
  
  // زر Stop
  function stopSlideshow() {
    clearInterval(intervalId);
    intervalId = null;
  }
  