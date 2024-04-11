import Info from "./Info";
import Profile from "./Profile";
import ColorBar from "./colorBar";

const Repositry = () =>{
    return(
        <div className="flex px-2 border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] border-zinc-600 rounded-lg w-[70%]  font-mono mt-24 mx-16">
            <Info/>
            <Profile/>
        </div>


    )
}

export default Repositry;