/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_djbtn extends fgui.GButton {

	public m_button:fgui.Controller;
	public m_n0:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki02s";

	public static createInstance():UI_djbtn {
		return <UI_djbtn>(fgui.UIPackage.createObject("main", "djbtn"));
	}

	protected onConstruct():void {
		this.m_button = this.getController("button");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}