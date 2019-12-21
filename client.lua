local CalculatorUi = nil

function OnPackageStart()
	CalculatorUi = CreateWebUI(1100.0, 550.0, 0.0, 0.0, 100)
	LoadWebFile(CalculatorUi, "http://asset/calculator/index.html")
	SetWebAlignment(CalculatorUi, 0.0, 0.0)
	SetWebAnchors(CalculatorUi, 0.0, 0.0, 1.0, 1.0)
	SetWebVisibility(CalculatorUi, WEB_HIDDEN)
end
AddEvent("OnPackageStart", OnPackageStart)

-- Bind --

AddEvent("OnKeyPress", function(key)
	if key == "H" then
		if(GetWebVisibility(CalculatorUi) == 0) then
            SetWebVisibility(CalculatorUi, WEB_VISIBLE)
            SetInputMode(INPUT_GAMEANDUI)
			ShowMouseCursor(true)
			SetIgnoreLookInput(true)
			SetIgnoreMoveInput(true)
			CallRemoteEvent("PhoneTakeOut")
		else
            SetWebVisibility(CalculatorUi, WEB_HIDDEN)
            SetInputMode(INPUT_GAME)
			ShowMouseCursor(false)
			SetIgnoreLookInput(false)
			SetIgnoreMoveInput(false)
			CallRemoteEvent("StopAnimation")
		end
	end
end)
AddEvent("OnKeyPress", OnKeyPress)
