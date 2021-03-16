/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Component1 extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_c2:fgui.Controller;
	public m_n0:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_n1:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_n4:fgui.GImage;
	public m_n5:fgui.GImage;
	public m_n7:fgui.GImage;
	public static URL:string = "ui://a4fmegqmmawg0";

	public static createInstance():UI_Component1 {
		return <UI_Component1>(fgui.UIPackage.createObject("main", "Component1"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_c2 = this.getController("c2");
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_n4 = <fgui.GImage>(this.getChild("n4"));
		this.m_n5 = <fgui.GImage>(this.getChild("n5"));
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
	}
}