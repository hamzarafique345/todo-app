"use client";
import { useState } from "react";
import React from "react";

interface Todu {
  id: number;
  text: string;
  completed: boolean;
}

export default function ToduList() {
  const [todus, settodus] = useState<Todu[]>([]);
  const [inputval, setinputval] = useState("");

  //add item

  const addTodu = () => {
    if (inputval.trim() === "") return;

    settodus([...todus, { id: Date.now(), text: inputval, completed: false }]);

    setinputval("");
 }; 
    //add value id

    const toggleTodu = (id: number) => {
      settodus(
        todus.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  

  //delete todu section

  const deleteTodu = (id: number) => {
    settodus(todus.filter((todo) => todo.id !== id));
  };

  return (
    <main className=" flex flex-col min-h-screen">
      {/*Header Section*/}
      <header className=" bg-purple-800 text-white py-4">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="text-3xl font-bold ont-serif ">
            ToduList By Hamza Rafique
          </h1>
        </div>


</header>
        {/*Content Section */}

        <main className="flex-grow flex items-center  justify-center">
          <div className="max-w-md mx-auto px-20  bg-slate-50 p-10 shadow-lg border-none rounded-lg border-blue-500  shadow-black ">
            <div className="mb-4">
              <h1 className="text-4xl  font-extrabold  text-yellow-500 text-center underline  mb-8 -">Todu App </h1>
                <div className="flex">
              
                <input 
                type="text" 
                value={inputval}
                onChange={((e)=>{
                    setinputval(e.target.value)
                })}
                className="flex w-60  px-10 placeholder:font-serif placeholder:font-extrabold placeholder:text-black  py-3 shadow-sm  shadow-black  rounded-lg"
                placeholder="Add a new Task ..."
                />

                <button onClick={addTodu} 
                className="ml-6 px-4 py-1 bg-blue-700 text-white rounded-lg
                hover:bg-blue-800"> Add </button>

                </div>
            </div>
            <ul className="spacing-y-2">
      {todus.map((todo)=>(
        <li key={todo.id}
        className={`flex items-center  w-80 justify-between p-2 
            border border-slate-400 ${
                todo.completed ? "bg-lime-400 line-through" : "bg-amber-400"
            }`}>
                <span>{todo.text}</span>
                
                <div>
                    <button onClick={() => toggleTodu(todo.id)}
                        className="px-2 py-1 text-sm mr-1 font-serif font-bold   bg-purple-500 rounded-lg text-white hover:bg-purple-600">
                            {todo.completed ? "Undo" : "Completed"}
                        </button>
                        <button onClick={() => deleteTodu(todo.id)}
                        className="px-2 py-1 text-sm font-serif font-bold  bg-sky-500 text-white rounded-lg hover:bg-sky-600">
                            Delete
                        </button>
                     
                </div>
            </li>
      ))}
            </ul>
          </div>
        </main>

    </main>
  );
}
