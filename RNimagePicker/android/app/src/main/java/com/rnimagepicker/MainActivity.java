package com.rnimagepicker;

import com.facebook.react.ReactActivity;
import com.ubidreams.RNDocumentScanner.RNDocumentScannerPackage;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "RNimagePicker";
  }

  RNDocumentScannerPackage(){
    return getPackages();
  }


}
