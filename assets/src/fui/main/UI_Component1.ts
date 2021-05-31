/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Component1 extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_c2:fgui.Controller;
	public m_c3:fgui.Controller;
	public m_n7:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_n9:fgui.GImage;
	public m_n10:fgui.GImage;
	public m_n11:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_n13:fgui.GImage;
	public m_n14:fgui.GImage;
	public m_n15:fgui.GImage;
	public m_up:fgui.GImage;
	public m_down:fgui.GImage;
	public m_right:fgui.GImage;
	public m_lift:fgui.GImage;
	public m_n37:fgui.GImage;
	public m_n38:fgui.GImage;
	public m_n39:fgui.GImage;
	public m_n40:fgui.GImage;
	public m_n41:fgui.GImage;
	public m_n42:fgui.GImage;
	public static URL:string = "ui://a4fmegqmmawg0";

	public static createInstance():UI_Component1 {
		return <UI_Component1>(fgui.UIPackage.createObject("main", "Component1"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_c2 = this.getController("c2");
		this.m_c3 = this.getController("c3");
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_n10 = <fgui.GImage>(this.getChild("n10"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_n13 = <fgui.GImage>(this.getChild("n13"));
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_up = <fgui.GImage>(this.getChild("up"));
		this.m_down = <fgui.GImage>(this.getChild("down"));
		this.m_right = <fgui.GImage>(this.getChild("right"));
		this.m_lift = <fgui.GImage>(this.getChild("lift"));
		this.m_n37 = <fgui.GImage>(this.getChild("n37"));
		this.m_n38 = <fgui.GImage>(this.getChild("n38"));
		this.m_n39 = <fgui.GImage>(this.getChild("n39"));
		this.m_n40 = <fgui.GImage>(this.getChild("n40"));
		this.m_n41 = <fgui.GImage>(this.getChild("n41"));
		this.m_n42 = <fgui.GImage>(this.getChild("n42"));
	}
}