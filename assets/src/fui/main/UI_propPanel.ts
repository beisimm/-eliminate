/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";
import UI_propItem from "./UI_propItem";

export default class UI_propPanel extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_n15:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_title:fgui.GTextField;
	public m_30001:UI_propItem;
	public m_30002:UI_propItem;
	public m_30003:UI_propItem;
	public m_30004:UI_propItem;
	public m_30005:UI_propItem;
	public m_n13:fgui.GGroup;
	public static URL:string = "ui://a4fmegqmevv15d";

	public static createInstance():UI_propPanel {
		return <UI_propPanel>(fgui.UIPackage.createObject("main", "propPanel"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_title = <fgui.GTextField>(this.getChild("title"));
		this.m_30001 = <UI_propItem>(this.getChild("30001"));
		this.m_30002 = <UI_propItem>(this.getChild("30002"));
		this.m_30003 = <UI_propItem>(this.getChild("30003"));
		this.m_30004 = <UI_propItem>(this.getChild("30004"));
		this.m_30005 = <UI_propItem>(this.getChild("30005"));
		this.m_n13 = <fgui.GGroup>(this.getChild("n13"));
	}
}