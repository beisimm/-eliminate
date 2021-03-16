/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Component2 from "./UI_Component2";
import UI_Component1 from "./UI_Component1";

export default class mainBinder {
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_Component2.URL, UI_Component2);
		fgui.UIObjectFactory.setExtension(UI_Component1.URL, UI_Component1);
	}
}

mainBinder.bindAll();