/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Component1 from "./UI_Component1";

export default class UI_Component2 extends fgui.GComponent {

	public m_abc:UI_Component1;
	public static URL:string = "ui://a4fmegqmf18g7";

	public static createInstance():UI_Component2 {
		return <UI_Component2>(fgui.UIPackage.createObject("main", "Component2"));
	}

	protected onConstruct():void {
		this.m_abc = <UI_Component1>(this.getChild("abc"));
	}
}