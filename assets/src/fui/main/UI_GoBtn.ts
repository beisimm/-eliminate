/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_GoBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://a4fmegqmajye4l";

	public static createInstance():UI_GoBtn {
		return <UI_GoBtn>(fgui.UIPackage.createObject("main", "GoBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}