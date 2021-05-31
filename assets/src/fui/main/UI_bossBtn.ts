/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_bossBtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki02u";

	public static createInstance():UI_bossBtn {
		return <UI_bossBtn>(fgui.UIPackage.createObject("main", "bossBtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}