
import HomeIcon from '@mui/icons-material/Home';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import {Asosiy , Buyurtmalar ,  Mijozlar , Xizmatlar} from "@pages"

interface navListInterface {
    path: string,
    title :string,
    element: JSX.Element,
    icon: JSX.Element,
}


const navList:navListInterface[] = [
    {
      path:"/main"  ,
      title:"Asosiy",
      element: <Asosiy/> ,
      icon: <HomeIcon />,
    },
    {
        path:"/main/buyurtmalar"  ,
        title:"Buyurtmalar",
        element: <Buyurtmalar/> ,
        icon: <DryCleaningIcon />,
    },
    {
        path:"/main/mijozlar"  ,
        title:"Mijozlar",
        element: <Mijozlar/> ,
        icon: <PeopleAltIcon />,
    },

    {
        path:"/main/xizmatlar"  ,
        title:"Xizmatlar",
        element: <Xizmatlar/> ,
        icon: <VolunteerActivismIcon />,
    },

]

export default navList;