import React from "react";
import {splitInToWords} from "./01-hello-tests/01"
import {console_02, console_02_2} from "./02-tests/02";

const App =() => {

  return(
<>
  {splitInToWords("Hello my frsnds")[0]}
  {console_02()}
  {console_02_2()}
</>
  )

}
export default App;