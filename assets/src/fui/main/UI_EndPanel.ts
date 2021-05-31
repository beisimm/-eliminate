/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_EndPanel extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_bg1:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_nextBtn:fgui.GImage;
	public m_exitBtn:fgui.GImage;
	public m_n15:fgui.GTextField;
	public m_n2:fgui.GTextField;
	public m_n3:fgui.GGroup;
	public m_resetBtn:fgui.GImage;
	public m_exitBtn2:fgui.GImage;
	public m_n11:fgui.GImage;
	public m_n8:fgui.GTextField;
	public m_n6:fgui.GImage;
	public m_n9:fgui.GTextField;
	public m_n10:fgui.GGroup;
	public static URL:string = "ui://a4fmegqmps3054";

	public static createInstance():UI_EndPanel {
		return <UI_EndPanel>(fgui.UIPackage.createObject("main", "EndPanel"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_bg1 = <fgui.GGraph>(this.getChild("bg1"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_nextBtn = <fgui.GImage>(this.getChild("nextBtn"));
		this.m_exitBtn = <fgui.GImage>(this.getChild("exitBtn"));
		this.m_n15 = <fgui.GTextField>(this.getChild("n15"));
		this.m_n2 = <fgui.GTextField>(this.getChild("n2"));
		this.m_n3 = <fgui.GGroup>(this.getChild("n3"));
		this.m_resetBtn = <fgui.GImage>(this.getChild("resetBtn"));
		this.m_exitBtn2 = <fgui.GImage>(this.getChild("exitBtn2"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n8 = <fgui.GTextField>(this.getChild("n8"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_n9 = <fgui.GTextField>(this.getChild("n9"));
		this.m_n10 = <fgui.GGroup>(this.getChild("n10"));
	}
}