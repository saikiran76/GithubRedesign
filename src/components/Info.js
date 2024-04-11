import IconBar from "./IconBar";

const Info = () =>{

    return(
        <div className="flex flex-col px-12 py-12 w-[70%] border-zinc-600 rounded-lg  font-sans">
            <div className="pb-4">
                <h1 className="font-light text-4xl font-sans">Clearlydecoded/<span className="text-4xl font-bold font-sans">html-css-javascript-tutorial</span></h1>
            </div>
            <div className="pb-7 w-full">
                <p className="text-md text-zinc-700">Example code for HTML, CSS and Javascript for
Web Developers Coursera Course</p>

            </div>

            <div className="grid grid-cols-4 gap-4 px-12 py-8">
                <IconBar/>
                <IconBar name="Issues"/>
                <IconBar name="Stars" count={5} />
                <IconBar name="Forks" count={5} />
            </div>
        </div>
    )

}

export default Info;