/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_closeBtn from "./UI_closeBtn";

export default class UI_ShopPanel extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_n1:fgui.GImage;
	public m_closeBtn:UI_closeBtn;
	public m_title:fgui.GTextField;
	public m_n4:fgui.GGroup;
	public static URL:string = "ui://a4fmegqmooxq5j";

	public static createInstance():UI_ShopPanel {
		return <UI_ShopPanel>(fgui.UIPackage.createObject("main", "ShopPanel"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChild("bg"));
		this.m_n1 = <fgui.GImage>(this.getChild("n1"));
		this.m_closeBtn = <UI_closeBtn>(this.getChild("closeBtn"));
		this.m_title = <fgui.GTextField>(this.getChild("title"));
		this.m_n4 = <fgui.GGroup>(this.getChild("n4"));
	}
}