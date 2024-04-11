import { VscGithubInverted } from "react-icons/vsc";
const Profile = () => {
    return(
        <div className="grid grid-rows-2 gap-3 py-12 px-3 ">

            <div className="w-[130px]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAZIcE_o7htTW5kuWZSP7ZrpfOS6A6Rnya3Te9Rblkzw&s" alt="Profile"/>
            </div>

            <div className="w-32 pl-20 pt-20">
                <VscGithubInverted />
            </div>

        </div>
    )
}

export default Profile;

