
function Test1() {

  TestedApps.calculadora.Run();
  Aliases.ApplicationFrameHost.wndCalculadora.ApplicationFrameTitleBarWindow.Drag(2, 18, 288, 84);
  let landmarkTarget = Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget;
  let namedContainerAutomationPeer = landmarkTarget.Teclado_num_rico;
  let button = namedContainerAutomationPeer.Zero;
  button.Click();
  namedContainerAutomationPeer.Separador_decimal.Click();
  button.Click();
  button.Click();
  button.Click();
  button.DblClick();
  button.Click();
  let button2 = namedContainerAutomationPeer.Um;
  button2.Click();
  namedContainerAutomationPeer = landmarkTarget.Operadores_padr_o;
  namedContainerAutomationPeer.Dividir_por.Click();
  button2.Click();
  button.Click();
  button.Click();
  button.Click();
  button.DblClick();
  button.DblClick();
  button.Click();
  button.Click();
  button.Click();
  button.Click();
  button.Click();
  namedContainerAutomationPeer.Igual_a.Click();
  aqObject.CheckProperty(Aliases.Microsoft_WindowsCalculator.Calculadora.NavView.LandmarkTarget.A_exibi_o_0.TextContainer.NormalOutput, "Text", cmpEqual, "1,e-19");
}