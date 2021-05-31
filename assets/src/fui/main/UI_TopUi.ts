/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_bossBtn from "./UI_bossBtn";
import UI_djbtn from "./UI_djbtn";
import UI_sdBtn from "./UI_sdBtn";

export default class UI_TopUi extends fgui.GComponent {

	public m_n5:fgui.GImage;
	public m_n6:fgui.GImage;
	public m_n0:fgui.GImage;
	public m_n4:fgui.GImage;
	public m_coinLabel:fgui.GTextInput;
	public m_powerLabel:fgui.GTextInput;
	public m_bossBtn:UI_bossBtn;
	public m_djBtn:UI_djbtn;
	public m_sdBtn:UI_sdBtn;
	public static URL:string = "ui://a4fmegqmzki02l";

	public static createInstance():UI_TopUi {
		return <UI_TopUi>(fgui.UIPackage.createObject("main", "TopUi"));
	}

	protected onConstruct():void {
		this.m_n5 = <fgui.GImage>(this.getChild("n5"));
		this.m_n6 = <fgui.GImage>(this.getChild("n6"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n4 = <fgui.GImage>(this.getChild("n4"));
		this.m_coinLabel = <fgui.GTextInput>(this.getChild("coinLabel"));
		this.m_powerLabel = <fgui.GTextInput>(this.getChild("powerLabel"));
		this.m_bossBtn = <UI_bossBtn>(this.getChild("bossBtn"));
		this.m_djBtn = <UI_djbtn>(this.getChild("djBtn"));
		this.m_sdBtn = <UI_sdBtn>(this.getChild("sdBtn"));
	}
}