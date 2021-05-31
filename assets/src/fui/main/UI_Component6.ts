/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_ProgressBar2 from "./UI_ProgressBar2";

export default class UI_Component6 extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_HpBp:UI_ProgressBar2;
	public m_nameLabel:fgui.GTextField;
	public m_n30:fgui.GImage;
	public m_n32:fgui.GImage;
	public m_n33:fgui.GImage;
	public m_n34:fgui.GGroup;
	public m_n35:fgui.GImage;
	public m_n36:fgui.GImage;
	public m_n37:fgui.GImage;
	public m_n38:fgui.GGroup;
	public m_n39:fgui.GImage;
	public m_n40:fgui.GImage;
	public m_n41:fgui.GImage;
	public m_n42:fgui.GGroup;
	public m_n31:fgui.GImage;
	public m_n43:fgui.GImage;
	public m_n44:fgui.GImage;
	public m_n45:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki03v";

	public static createInstance():UI_Component6 {
		return <UI_Component6>(fgui.UIPackage.createObject("main", "Component6"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_HpBp = <UI_ProgressBar2>(this.getChild("HpBp"));
		this.m_nameLabel = <fgui.GTextField>(this.getChild("nameLabel"));
		this.m_n30 = <fgui.GImage>(this.getChild("n30"));
		this.m_n32 = <fgui.GImage>(this.getChild("n32"));
		this.m_n33 = <fgui.GImage>(this.getChild("n33"));
		this.m_n34 = <fgui.GGroup>(this.getChild("n34"));
		this.m_n35 = <fgui.GImage>(this.getChild("n35"));
		this.m_n36 = <fgui.GImage>(this.getChild("n36"));
		this.m_n37 = <fgui.GImage>(this.getChild("n37"));
		this.m_n38 = <fgui.GGroup>(this.getChild("n38"));
		this.m_n39 = <fgui.GImage>(this.getChild("n39"));
		this.m_n40 = <fgui.GImage>(this.getChild("n40"));
		this.m_n41 = <fgui.GImage>(this.getChild("n41"));
		this.m_n42 = <fgui.GGroup>(this.getChild("n42"));
		this.m_n31 = <fgui.GImage>(this.getChild("n31"));
		this.m_n43 = <fgui.GImage>(this.getChild("n43"));
		this.m_n44 = <fgui.GImage>(this.getChild("n44"));
		this.m_n45 = <fgui.GImage>(this.getChild("n45"));
	}
}