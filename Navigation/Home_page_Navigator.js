import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from 'react-native';
import Home_page from '../screens/Home_page';
import Upload_image_scan from '../screens/Upload_image_scan';
import View_folders from '../screens/View_folders';
import Add_Folder from '../components/Add_Folder';


const Home_page_Navigator = createStackNavigator({
    Home_page: Home_page, 
    Upload_image_scan:Upload_image_scan,
    View_folders: View_folders,
    Add_Folder:Add_Folder,
},
{
    defaultNavigationOptions:
    {
        headerTitleAlign:'center',
        headerStyle:
        {
            backgroundColor: Platform.OS === 'android'? '#AD67EA' :'',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : '#AD67EA'

    }



});

export default createAppContainer(Home_page_Navigator)