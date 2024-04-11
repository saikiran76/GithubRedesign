import { AiOutlineFork} from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { GoIssueOpened } from "react-icons/go";
import { LuUsers2 } from "react-icons/lu";


const IconBar = ({count = 0, name = "Contributor"}) =>{
    return(
        <div className="flex">
            {name === "Contributor" ? (
           <LuUsers2 />
            ) : name === "Forks" ? (
            <AiOutlineFork />
            ) : name === "Issues" ? (
                <GoIssueOpened />
            ) : (
                <BsStar />
            )}
            <div className="flex flex-col">
                <div className="px-2 font-bold">{count}</div>
                <div className="">{name}</div>
            </div>
        </div>
    )
}

export default IconBar;