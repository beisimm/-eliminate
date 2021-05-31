/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_sdBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki02t";

	public static createInstance():UI_sdBtn {
		return <UI_sdBtn>(fgui.UIPackage.createObject("main", "sdBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}