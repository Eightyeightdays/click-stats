export default function generateEmoji(num){
    var emoji = "";

    switch(num){
    case 0: 
      emoji = 128557; //
    break;
    case 1:
      emoji = 128542; 
    break;
    case 2:
      emoji = 128533;
    break;
    case 3:
      emoji = 128528;
    break;
    case 4:
      emoji = 128512;
    break;
    case 5:
      emoji = 128513;
    break;
    case 6:
      emoji = 128170;
    break;
    case 7:
      emoji = 127870;
    break;
    default:          // 8 and above
      emoji = 128293;
    }

    return emoji;
  }