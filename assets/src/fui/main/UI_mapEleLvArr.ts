/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_mapEleLvArr extends fgui.GComponent {

	public m_c2:fgui.Controller;
	public m_n1:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_name:fgui.GTextField;
	public m_n7:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_n9:fgui.GImage;
	public m_n10:fgui.GImage;
	public m_n11:fgui.GImage;
	public static URL:string = "ui://a4fmegqmu07x16";

	public static createInstance():UI_mapEleLvArr {
		return <UI_mapEleLvArr>(fgui.UIPackage.createObject("main", "mapEleLvArr"));
	}

	protected onConstruct():void {
		this.m_c2 = this.getController("c2");
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_n10 = <fgui.GImage>(this.getChild("n10"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
	}
}