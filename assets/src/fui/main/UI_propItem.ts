/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_propItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n4:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_n10:fgui.GImage;
	public m_n11:fgui.GImage;
	public m_n13:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_content:fgui.GTextField;
	public m_n3:fgui.GImage;
	public m_lv:fgui.GTextField;
	public static URL:string = "ui://a4fmegqmevv15h";

	public static createInstance():UI_propItem {
		return <UI_propItem>(fgui.UIPackage.createObject("main", "propItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_n4 = <fgui.GImage>(this.getChild("n4"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n10 = <fgui.GImage>(this.getChild("n10"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n13 = <fgui.GImage>(this.getChild("n13"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_content = <fgui.GTextField>(this.getChild("content"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_lv = <fgui.GTextField>(this.getChild("lv"));
	}
}