import Info from "./Info";
import Profile from "./Profile";
// import ColorBar from "./colorBar";

const Repositry = () =>{
    return(
        <div className="flex px-2 border-b-[10px] border-orange-500 rounded-lg w-[70%] font-noto-sans-mono mt-24 mx-16">
            <Info/>
            <Profile/>
        </div>


    )
}

export default Repositry;