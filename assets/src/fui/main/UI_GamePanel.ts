/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Component6 from "./UI_Component6";
import UI_gameBottomBtn from "./UI_gameBottomBtn";
import UI_Component4 from "./UI_Component4";

export default class UI_GamePanel extends fgui.GComponent {

	public m_n30:fgui.GImage;
	public m_user:UI_Component6;
	public m_boomBtn:UI_gameBottomBtn;
	public m_lowBtn:UI_gameBottomBtn;
	public m_randomBtn:UI_gameBottomBtn;
	public m_addBtn:UI_gameBottomBtn;
	public m_30001:UI_Component4;
	public m_30002:UI_Component4;
	public m_30003:UI_Component4;
	public m_30004:UI_Component4;
	public m_30005:UI_Component4;
	public static URL:string = "ui://a4fmegqmzki02y";

	public static createInstance():UI_GamePanel {
		return <UI_GamePanel>(fgui.UIPackage.createObject("main", "GamePanel"));
	}

	protected onConstruct():void {
		this.m_n30 = <fgui.GImage>(this.getChild("n30"));
		this.m_user = <UI_Component6>(this.getChild("user"));
		this.m_boomBtn = <UI_gameBottomBtn>(this.getChild("boomBtn"));
		this.m_lowBtn = <UI_gameBottomBtn>(this.getChild("lowBtn"));
		this.m_randomBtn = <UI_gameBottomBtn>(this.getChild("randomBtn"));
		this.m_addBtn = <UI_gameBottomBtn>(this.getChild("addBtn"));
		this.m_30001 = <UI_Component4>(this.getChild("30001"));
		this.m_30002 = <UI_Component4>(this.getChild("30002"));
		this.m_30003 = <UI_Component4>(this.getChild("30003"));
		this.m_30004 = <UI_Component4>(this.getChild("30004"));
		this.m_30005 = <UI_Component4>(this.getChild("30005"));
	}
}