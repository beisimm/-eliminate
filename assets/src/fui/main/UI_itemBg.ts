/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_itemBg extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki04b";

	public static createInstance():UI_itemBg {
		return <UI_itemBg>(fgui.UIPackage.createObject("main", "itemBg"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
	}
}