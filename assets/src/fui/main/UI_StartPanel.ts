/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";
import UI_GoBtn from "./UI_GoBtn";

export default class UI_StartPanel extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_blackInput:fgui.GGraph;
	public m_n0:fgui.GImage;
	public m_n2:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_GoBtn:UI_GoBtn;
	public m_List:fgui.GList;
	public m_content:fgui.GTextField;
	public m_n15:fgui.GGroup;
	public static URL:string = "ui://a4fmegqmajye4d";

	public static createInstance():UI_StartPanel {
		return <UI_StartPanel>(fgui.UIPackage.createObject("main", "StartPanel"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_blackInput = <fgui.GGraph>(this.getChild("blackInput"));
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n2 = <fgui.GImage>(this.getChild("n2"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_GoBtn = <UI_GoBtn>(this.getChild("GoBtn"));
		this.m_List = <fgui.GList>(this.getChild("List"));
		this.m_content = <fgui.GTextField>(this.getChild("content"));
		this.m_n15 = <fgui.GGroup>(this.getChild("n15"));
	}
}