

interface Bookdata {
    id: number;
    name:string;
    type:string;
    available:boolean;

}

const Serverside=async () => {
    const response= await fetch("https://simple-books-api.glitch.me/books/");

    const parsedResponse: Bookdata[]=await response.json();
    console.log(parsedResponse);

    return (
        <div className="grid grid-cols grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 p-11">
            {parsedResponse.map((data, index) => (
                <div key={index} className="flex flex-col gap-4 border border-black">
                    <p className="text-white">Id: {data.id}</p>
                    <p className="text-orange-900">name: {data.name}</p>
                    <p className="text-orange-900">type: {data.type}</p>
                    <p className="text-teal-900">available: {data.available}</p>
                </div>

            ))}
        </div>
    )};

export default Serverside