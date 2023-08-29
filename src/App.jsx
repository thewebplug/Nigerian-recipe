import logo from "./logo.svg";
import "./App.css";
import Image from "./img/Groundnut-Soup.-Photo-The-Kitchen-Muse-e1599948546462.jpg";

function App() {

  const data = {
    name: "My Groundnut soup recipe",
    image: "https://guardian.ng/wp-content/uploads/2020/09/Groundnut-Soup.-Photo-The-Kitchen-Muse-e1599948546462.jpg",
    ingredients: [
        "1 cup, Groundnut (roasted or raw)",
        "Assorted meats",
        "Chopped onions",
        "1 medium-size dried stockfish",
        "Fresh pepper",
        "Palm oil",
        "Crayfish",
        "1/2 Bitter leaves",
        "1/4 cup, Uziza seeds",
        "1/4 Efinrin /Basil leaves (optional)"
    ],
    instructions: [
        "In a medium-sized pot, Season and boil assorted meat with chopped onions, salt and seasoning.",
        "Dry roast the groundnut and uziza seed for 3 minutes in a frying pan shaking the pan regularly. I find that roasting spices and nut in a pan release oils and intensifies the flavour.",
        "Blend the groundnut and the uziza seeds until you achieve finely textured powder and set aside. The longer you blend, you will notice the powder transforming into a paste. This is as a result of the oils in the nuts and seeds. Roughly blend the pepper and set aside.",
        "When the meat is tender, shred stockfish into bits and add.",
        "Add the pepper in the assorted meat stir and let it boil properly. This should take 3 minutes, taste and add salt and seasoning if necessary. It is now time to include a reasonable amount of palm oil. I prefer 2 spoons of palm oil.",
        "Add the groundnut powder and 1/2 soup hot water. Note that the Palm oil and pepper stock must be bubbly while adding the groundnut powder.",
        "Let it boil for 10 minutes and watch as the soup thickens. If you are left with a watery consistency, simply add extra powder.",
        "Add a handful of efinrin, stir let it this cook for 2 minutes under low heat stir again.",
        "Serve with pounded yam /garri/fufu/wheat."
    ],
    notes: [
      "Groundnuts are naturally cholesterol-free. They’re a great plant-based option, containing more protein than any nut and several essential vitamins and minerals as well.",
      "Groundnuts are the most sustainable nut. From the roots to the hulls, no part of the plant goes to waste. They also have the most efficient water use carbon footprint."
    ]
}

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
