import * as tf from '@tensorflow/tfjs';
import { fetch, decodeJpeg, bundleResourceIO } from '@tensorflow/tfjs-react-native';

function makePrediction(photo_path){
    // Get reference to bundled model assets 
    const modelJson = require('model.json');
    const modelWeights = require('group1-shard1of1.bin');

    // Use the bundleResorceIO IOHandler to load the model
    const model = await tf.loadLayersModel(
    bundleResourceIO(modelJson, modelWeights));

    // Load an image
    const uri = photo_path;
    const response = await fetch(uri, {}, { isBinary: true });
    const imageData = await response.arrayBuffer();
    const imageTensor = decodeJpeg(imageData);
    
    const prediction = (await model.predict(imageTensor))[0];


    //make dictionary
    var dict = {};
    dict[0] = "א"
    dict[1] = "ב"
    dict[2] = "ג"
    dict[3] = "ד"
    dict[4] = "ה"
    dict[5] = "ו"
    dict[6] = "ז"
    dict[7] = "ח"
    dict[8] = "ט"
    dict[9] = "י"
    dict[10] = "כ"
    dict[11] = "ך"
    dict[12] = "ל"
    dict[13] = "מ"
    dict[14] = "ם"
    dict[15] = "נ"
    dict[16] = "ן"
    dict[17] = "ס"
    dict[18] = "ע"
    dict[19] = "פ"
    dict[20] = "ף"
    dict[21] = "צ"
    dict[22] = "ץ"
    dict[23] = "ק"
    dict[24] = "ר"
    dict[25] = "ש"
    dict[26] = "ת"

    // return prediction to appׂ
    return dict[prediction]
}

export default makePrediction