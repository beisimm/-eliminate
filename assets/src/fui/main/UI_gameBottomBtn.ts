/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_gameBottomBtn extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_c2:fgui.Controller;
	public m_n14:fgui.GImage;
	public m_n15:fgui.GImage;
	public m_n18:fgui.GImage;
	public m_n19:fgui.GImage;
	public m_n20:fgui.GImage;
	public m_n16:fgui.GImage;
	public m_n21:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki03i";

	public static createInstance():UI_gameBottomBtn {
		return <UI_gameBottomBtn>(fgui.UIPackage.createObject("main", "gameBottomBtn"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_c2 = this.getController("c2");
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_n18 = <fgui.GImage>(this.getChild("n18"));
		this.m_n19 = <fgui.GImage>(this.getChild("n19"));
		this.m_n20 = <fgui.GImage>(this.getChild("n20"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_n21 = <fgui.GImage>(this.getChild("n21"));
	}
}