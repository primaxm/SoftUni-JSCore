function templateFormat(arr) {
    console.log("<?xml version=\"1.0\" encoding=\"UTF-8\"?>");
    console.log("<quiz>");
    for (let i = 0; i < arr.length; i+=2) {
  console.log(`<question>
    ${arr[i]}
  </question>
  <answer>
    ${arr[i+1]}
  </answer>`);
    }
    console.log("</quiz>");
}

templateFormat(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"])