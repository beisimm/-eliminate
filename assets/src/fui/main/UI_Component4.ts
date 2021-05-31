/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Component4 extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n21:fgui.GImage;
	public m_n25:fgui.GImage;
	public m_n22:fgui.GImage;
	public m_n27:fgui.GImage;
	public m_n26:fgui.GImage;
	public m_n28:fgui.GImage;
	public m_n29:fgui.GImage;
	public m_n30:fgui.GImage;
	public m_n31:fgui.GImage;
	public m_n32:fgui.GImage;
	public m_n34:fgui.GImage;
	public m_gj:fgui.GTextField;
	public m_bg:fgui.GTextField;
	public static URL:string = "ui://a4fmegqmzki03p";

	public static createInstance():UI_Component4 {
		return <UI_Component4>(fgui.UIPackage.createObject("main", "Component4"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_n21 = <fgui.GImage>(this.getChild("n21"));
		this.m_n25 = <fgui.GImage>(this.getChild("n25"));
		this.m_n22 = <fgui.GImage>(this.getChild("n22"));
		this.m_n27 = <fgui.GImage>(this.getChild("n27"));
		this.m_n26 = <fgui.GImage>(this.getChild("n26"));
		this.m_n28 = <fgui.GImage>(this.getChild("n28"));
		this.m_n29 = <fgui.GImage>(this.getChild("n29"));
		this.m_n30 = <fgui.GImage>(this.getChild("n30"));
		this.m_n31 = <fgui.GImage>(this.getChild("n31"));
		this.m_n32 = <fgui.GImage>(this.getChild("n32"));
		this.m_n34 = <fgui.GImage>(this.getChild("n34"));
		this.m_gj = <fgui.GTextField>(this.getChild("gj"));
		this.m_bg = <fgui.GTextField>(this.getChild("bg"));
	}
}