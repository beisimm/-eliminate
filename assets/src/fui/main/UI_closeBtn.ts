/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_closeBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://a4fmegqmajye4j";

	public static createInstance():UI_closeBtn {
		return <UI_closeBtn>(fgui.UIPackage.createObject("main", "closeBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}