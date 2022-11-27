import React from "react";

function SleepInspoWidget() {
  const randomInspo = () => {
    const randomNum = Math.floor(Math.random() * 6);
   switch(randomNum) {
      case 0: 
        return <h5>Be Consistent. Try to go to bed around the same time each night to help your body fall into a rhythm.</h5>
      case 1: 
        return <h5>Don't drink beverages containing caffeine at least 6 hours before going to bed.</h5> 
      case 2: 
        return <h5>Lights emitted from electronic devices such as TV's and cell phones can make it harder to fall asleep. Try removing them from your bedside.</h5>
      case 3:
        return <h5>If you can't fall asleep, try reading a few pages from your favorite book.</h5>
      case 4: 
        return <h5>"Sleep is like a cat: it only comes to you if you ignore it." -Gillian Flynn, Gone Girl</h5>
      case 5:
        return <h5>"A well-spent day brings happy sleep." -Leonardo Da Vinci</h5>
      default:
        return <h5>"The amount of sleep required by the average person is five minutes more." -Wilson Mizener</h5>
    }
  } 
  return (
    // ADD STYLING TO THIS WIDGET
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Sleep Inspiration</h3>
           {randomInspo()}
        </div>
      </div>
    </div>
  )
}

export default SleepInspoWidget;