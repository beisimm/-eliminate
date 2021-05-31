/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_zs extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n0:fgui.GImage;
	public m_n3:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki035";

	public static createInstance():UI_zs {
		return <UI_zs>(fgui.UIPackage.createObject("main", "zs"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
	}
}