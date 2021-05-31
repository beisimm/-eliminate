/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_ProgressBar1 from "./UI_ProgressBar1";
import UI_zs from "./UI_zs";

export default class UI_GameTopUi extends fgui.GComponent {

	public m_n1:fgui.GImage;
	public m_n3:fgui.GImage;
	public m_gkLabel:fgui.GTextField;
	public m_bsLabel:fgui.GTextField;
	public m_pb:UI_ProgressBar1;
	public m_z1:UI_zs;
	public m_z2:UI_zs;
	public m_z3:UI_zs;
	public m_scoreLabel:fgui.GTextField;
	public static URL:string = "ui://a4fmegqmzki04c";

	public static createInstance():UI_GameTopUi {
		return <UI_GameTopUi>(fgui.UIPackage.createObject("main", "GameTopUi"));
	}

	protected onConstruct():void {
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_n3 = <fgui.GImage>(this.getChild("n3"));
		this.m_gkLabel = <fgui.GTextField>(this.getChild("gkLabel"));
		this.m_bsLabel = <fgui.GTextField>(this.getChild("bsLabel"));
		this.m_pb = <UI_ProgressBar1>(this.getChild("pb"));
		this.m_z1 = <UI_zs>(this.getChild("z1"));
		this.m_z2 = <UI_zs>(this.getChild("z2"));
		this.m_z3 = <UI_zs>(this.getChild("z3"));
		this.m_scoreLabel = <fgui.GTextField>(this.getChild("scoreLabel"));
	}
}