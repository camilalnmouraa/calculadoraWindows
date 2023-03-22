function Test1()
{
  Aliases.explorer.wndShell_TrayWnd.DesktopWindowXamlSource.Click(602, 24);
  let wnd = Aliases.Microsoft_Windows_StartMenuExperienceHost.Iniciar.LauncherFrameXAMLWindow;
  wnd.Todos_os_aplicativos.Click();
  wnd.Todos_os_aplicativos_3.Todos_os_aplicativos.C.Calculadora.Click(136, 26);
  let landmarkTarget = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  let namedContainerAutomationPeer = landmarkTarget.Teclado_numerico;
  namedContainerAutomationPeer.Oito.Click();
  let namedContainerAutomationPeer2 = landmarkTarget.Operadores_padrao;
  namedContainerAutomationPeer2.Menos.Click();
  namedContainerAutomationPeer.Cinco.Click();
  namedContainerAutomationPeer2.Igual_a.Click();
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput, "Text", cmpEqual, "3");
  Aliases.ApplicationFrameHost.wndCalculadora.Close();
}