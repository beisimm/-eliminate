/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ProgressBar2 extends fgui.GProgressBar {

	public m_n0:fgui.GImage;
	public m_bar:fgui.GImage;
	public static URL:string = "ui://a4fmegqmzki038";

	public static createInstance():UI_ProgressBar2 {
		return <UI_ProgressBar2>(fgui.UIPackage.createObject("main", "ProgressBar2"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_bar = <fgui.GImage>(this.getChild("bar"));
	}
}