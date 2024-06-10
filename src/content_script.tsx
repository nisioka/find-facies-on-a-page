chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  if (msg.color) {
    document.body.style.backgroundColor = msg.color;
    sendResponse("Change color to " + msg.color);
  } else {
    sendResponse("Color message is none.");
  }
});

window.addEventListener("load", main, false);

function main(e: Event) {
  const jsInitCheckTimer = setInterval(jsLoaded, 1000);

  function jsLoaded() {
    const img = document.getElementsByTagName('img');
    if (img != null) {
      clearInterval(jsInitCheckTimer);
      console.log('Face Detection Start');
      console.log(img.length)

      // Face Detectionの実行
      // @ts-ignore
      const faceDetector = new window.FaceDetector();
      if (faceDetector === undefined) {
        console.error('FaceDetector is not supported.');
        return;
      }
      for (const image of img) {
        console.log(image)
        faceDetector.detect(image)
        .then((faces: any) => {
          console.log(faces)
          console.log('Face detection succeeded:', faces.length);
          // 検出された顔の数だけ処理を行う
          // @ts-ignore
          faces.forEach(face => {
            // 顔の位置情報を取得
            const {x, y, width, height} = face.boundingBox;
            console.log('Face detected:', x, y, width, height);

            // 顔の周りにボーダーを描画
            const faceBox = document.createElement('div');
            faceBox.style.position = 'absolute';
            faceBox.style.left = `${x}px`;
            faceBox.style.top = `${y}px`;
            faceBox.style.width = `${width}px`;
            faceBox.style.height = `${height}px`;
            faceBox.style.border = '2px solid red';
            image.parentNode?.appendChild(faceBox);
          });
        })
        .catch((error: any) => {
          console.error('Face detection failed:', error);
        });

      }
    }
  }
}