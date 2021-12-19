import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";
import Home_page from '../screens/Home_page';
import Upload_image_scan from '../screens/Upload_image_scan';
import View_folders from '../screens/View_folders';
import Image_picker_camera from '../components/Image_picker_camera';
import Image_picker_gallery from '../components/Image_picker_gallery';



const Home_page_Navigator = createStackNavigator({
    Home_page: Home_page, 
    Upload_image_scan:Upload_image_scan,
    View_folders: View_folders,
    Image_picker_camera:Image_picker_camera,
    Image_picker_gallery:Image_picker_gallery,

});

export default createAppContainer(Home_page_Navigator)