import React, { useState } from "react";

function App(){



  const [sum , setSum] = useState('')

  return(
    <div className="h-[100vh] w-full flex justify-center items-center bg-[#014179]">
      <div className="w-[350px] h-[320px] bg-white p-5 rounded">



<input type="text" className="w-full h-[70px] rounded pl-3 outline-none text-[18px] bg-[#ddd7d7] text-right pr-5" onInput={ e => setSum( e.target.value)  }  value={sum}   />
<br /><br />


<div className="flex justify-center items-center flex-wrap gap-2">

<button value={1} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )} >1</button>
<button value={2} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )} >2</button>
<button value={3} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>3</button>
<button value={"/"} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>/</button>
<button value={4} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>4</button>
<button value={5} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>5</button>
<button value={6} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>6</button>
<button value={"+"} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>+</button>
<button value={7} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>7</button>
<button value={8} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>8</button>
<button value={9} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>9</button>
<button value={'-'} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>-</button>
<button value={0} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>0</button>


<button value={'%'} className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum( sum +  e.target.value )}>%</button>
<button  className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum("")}>C</button>

<button className="h-[40px] w-[70px] bg-white rounded hover:bg-blue-400 hover:text-white" onClick={ e => setSum(eval(sum))}>=</button>
      </div>
</div>

    </div>
  );
}
export default App;