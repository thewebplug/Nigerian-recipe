
import logo from "./logo.svg";
import "./App.css";
import Image from "./img/Groundnut-Soup.-Photo-The-Kitchen-Muse-e1599948546462.jpg";
import data from "./data";






function App() {


  return (
    <div className="">
      <div className="bg-[#97B9B3] min-h-screen px-10 py-20 sm:px-20 sm:py-20 text-[#ddd] flex flex-col justify-center">
        <div className="recipe_name text-[10.2vw] sm:text-[7.2vw] text-center mb-20 font-bold">
          {data?.name}
        </div>
        <img src={Image} className="recipe_image lg:w-2/5 md:w-full h-auto m-auto border p-10 border-[#ddd]" />
       
      </div>
      <div className="min-h-screen bg-[#97B9B3] lg:p-40 md:p-20 p-10 flex flex-col justify-center">
        <p className="text-center text-[#ddd] lg:text-[3vw] md:text-[5vw]">Groundnut soup, also known as peanut soup, has peanuts as its primary ingredient. Although it is a favourite of the Esans and Esakos, Ghanaians also consume this delicacy and have its name as Nkatenkwan in Akan language. There is a reason why this is a special delicacy with peoples of a place.</p>
      </div>
      <div className="bg-black text-white lg:px-20 md:px-10 px-5">
        <div className="recipe_ingredients min-h-screen">
          <div className="lg:text-[10vw] md:text-[15vw] text-[15vw] mb-10 font-bold">Ingredients</div>
          <ul className="list-disc pl-4 text-[20px]">
            {data?.ingredients?.map((ingredient) => <li className="mb-2">{ingredient}</li>)}
          </ul>
        </div>
        <div className="recipe_instructions min-h-screen">
          <div className="lg:text-[10vw] md:text-[15vw] text-[15vw] mb-10 font-bold">Instructions</div>
          <ul className="list-disc pl-4 text-[20px]">
            {data?.instructions?.map((instruction) => <li className="mb-2">{instruction}</li>)}
          </ul>
        </div>
        <div className="recipe_notes min-h-screen">
        <div className="lg:text-[10vw] md:text-[15vw] text-[15vw] mb-10 font-bold">Notes - Fun facts</div>
        
        <ul className="list-disc pl-4 text-[20px]">
            {data?.notes?.map((note) => <li className="mb-2">{note}</li>)}
          </ul>
      </div>
      </div>
      
    </div>
  );
}

export default App;
