/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_GameStartItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_c2:fgui.Controller;
	public m_n6:fgui.GImage;
	public m_n9:fgui.GImage;
	public m_awardLabel:fgui.GTextField;
	public m_n11:fgui.GImage;
	public m_n12:fgui.GImage;
	public m_n13:fgui.GImage;
	public m_n14:fgui.GImage;
	public m_n15:fgui.GImage;
	public m_n16:fgui.GImage;
	public m_n17:fgui.GImage;
	public static URL:string = "ui://a4fmegqmajye4q";

	public static createInstance():UI_GameStartItem {
		return <UI_GameStartItem>(fgui.UIPackage.createObject("main", "GameStartItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_c2 = this.getController("c2");
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_awardLabel = <fgui.GTextField>(this.getChild("awardLabel"));
		this.m_n11 = <fgui.GImage>(this.getChild("n11"));
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_n13 = <fgui.GImage>(this.getChild("n13"));
		this.m_n14 = <fgui.GImage>(this.getChild("n14"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
		this.m_n17 = <fgui.GImage>(this.getChild("n17"));
	}
}