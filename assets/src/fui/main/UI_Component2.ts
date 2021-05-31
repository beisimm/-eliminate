/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Component2 extends fgui.GComponent {

	public m_score:fgui.GTextField;
	public m_current:fgui.GTextField;
	public m_continuous:fgui.GTextField;
	public m_uid:fgui.GTextField;
	public static URL:string = "ui://a4fmegqms6v7o";

	public static createInstance():UI_Component2 {
		return <UI_Component2>(fgui.UIPackage.createObject("main", "Component2"));
	}

	protected onConstruct():void {
		this.m_score = <fgui.GTextField>(this.getChild("score"));
		this.m_current = <fgui.GTextField>(this.getChild("current"));
		this.m_continuous = <fgui.GTextField>(this.getChild("continuous"));
		this.m_uid = <fgui.GTextField>(this.getChild("uid"));
	}
}