import React,{useState} from "react";

const airports = [
	 {
		 start: 'ISB',
		 end: 'LHR',
		 cost: 1000
	 },
	 {
		 start: 'LHR',
		 end: 'NYC',
		 cost: 750
	 },
	 {
		 start: 'CBS',
		 end: 'NYC',
		 cost: 775
	 },
	 {
		 start: 'ISB',
		 end: 'CBS',
		 cost: 575
	 },
	 {
		 start: 'CBS',
		 end: 'GRC',
		 cost: 731
	 },
	 {
		 start: 'NYC',
		 end: 'GRC',
		 cost: 459
	 }
 ]

function App() {
  const [point, setPoint] = useState({
    startingPoint : "",
    endingPoint : ""
  });


  const handleChange = (e) => {
      setPoint({...point, [e.target.name] : e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    const shortDistance = airports.find(x => x.start === point.startingPoint && x.end === point.endingPoint);
    console.log(shortDistance)    
    
   if(!shortDistance){
    const longDistance =  airports.filter(x => (x !== shortDistance) && (x.end === point.endingPoint || x.start === point.startingPoint))
    const longDistanceReverse = longDistance.reverse()
    const newLongDistance = longDistanceReverse.find(x => (x !== shortDistance) && (x.end === point.endingPoint || x.start === point.startingPoint))
    console.log(newLongDistance)

    const FinalDistance =  airports.filter(x => (x !== newLongDistance) && (x.start === newLongDistance.end && x.end === point.endingPoint) );
    const newFinalDistance = FinalDistance.find(x => x)
    console.log(newFinalDistance)

   }

  }


  return (
    <div className=" 2xl:container 2xl:mx-auto py-12 xl:px-20 md:px-6 px-4 flex justify-center items-center">
      <div className="p-4 w-96 flex-col rounded-lg shadow-md border flex justify-start">
      <form>
      <div className="flex flex-col space-y-2 justify-start items-start">
          <label>
            Enter Starting Pointe
          </label>
          <input onChange={(e) => handleChange(e)} className="px-2 py-1 border rounded w-full focus:outline-none" type="text" name="startingPoint"/>
      </div>
      <div className="flex flex-col space-y-2 justify-start items-start">
          <label>
            Enter Ending Pointe
          </label>
          <input onChange={(e) => handleChange(e)} className="px-2 py-1 border rounded w-full focus:outline-none" type="text" name="endingPoint"/>
      </div>

      <button onClick={(e) => handleSubmit(e)} className="mt-4 py-2 px-2 w-full bg-gray-800 text-white text-base text-center">
        Submit
      </button>
      </form>
      </div>
      
    </div>
  );
}

export default App;
