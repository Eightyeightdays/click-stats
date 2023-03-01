export default function generateEmoji(num){
  console.log(`Total is ${num}`)

    var emoji = "";
    switch(num){
    case num === 0: 
      emoji = 128557; //
    break;
    case num === 1:
      emoji = 128542; 
    break;
    case num === 2:
      emoji = 128533;
    break;
    case num === 3:
      emoji = 128528;
    break;
    case num === 4:
      emoji = 128512;
    break;
    case num === 5:
      emoji = 128513;
    break;
    case num === 6:
      emoji = 128170;
    break;
    case num === 7:
      emoji = 127870;
    break;
    case num >= 8:
      emoji = 128293;
    break;
    default:
      emoji = 128169;
    }

    return emoji;
  }