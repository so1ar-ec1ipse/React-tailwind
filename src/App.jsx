/* eslint-disable prettier/prettier */
import React from "react";
import ReactDOM from "react-dom";
import cntl from "cntl";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Input from "./stories/Components/Input/Input";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";
import NavBar from "./stories/Components/NavBar/NavBar";
import Chevron from "./stories/components/Chevron/Chevron";

const CollapsibleSectionCN = cntl`
  pt-2
  child:pb-16 border-b-2 pb-2 
  last:border-b-0
`;
const inputCN = cntl`
  w-1/2
  pb-2
`;
const clientTypeLit = ["CLIENT INFO", "LOGO", "BRANDING", "APP"]
const App = () => {
  return (
    <div className="bg-black h-full w-full overflow-auto">
      {/* Navbar */}
      <div className="w-full">
        <NavBar className="h-16 w-full" />
      </div>
      {/* body */}
      <div className="p-10 pt-1 w-3/4">
        {/* header */}
        <div className="flex pb-2">
          <Chevron className="w-2 transform rotate-180 ml-2 mr-2"/>
          <span className="text-sm">Back</span>
        </div>
        <div className="addNewClient w-full">
          <p>ADD NEW CLEINT</p> 
          <ProgressTracker
            className="w-full"
            steps={ clientTypeLit }
            selectedIndex={0}
            onStepClick = {()=>{}}
          />
        </div>
        {/* features */}
        <div className="pb-16">
          <CollapsibleSection className={CollapsibleSectionCN} title="Overview" defaultOpen>
            <Dropdown
              label="Company Name"
              className={inputCN}
              placeholder="REIS Contracting, INC"
              options={[{label:"REIS Contracting, INC", value:"0"}]}
            />
            <Input label="eSpace Name" placeholder="REIS Contracting" 
              className={inputCN}
              isRequired
            />
            <Dropdown
              label = "Subscription"
              className={inputCN}
              placeholder="Elite"
              options={[{label:"Elite", value:0}]}
              isRequired
            />
          </CollapsibleSection>
          <CollapsibleSection className={CollapsibleSectionCN} title="Owner Information" defaultOpen>
            <Input label="Primary Owner" placeholder="Edward Reis" 
              className={inputCN}
              isRequired
            />
            <Input label="Primary Owner Email" placeholder="ereis@reiscomtracting.com" 
              className={inputCN}
              isRequired
            />
            <Input label="Primary Owner Phone" placeholder="123-456-789" 
              className={inputCN}
              isRequired
            />
            
          </CollapsibleSection>
          <CollapsibleSection className={CollapsibleSectionCN} title="Location Information" defaultOpen>
            <Input label="Street Address" placeholder="Edward Reis" 
              className={inputCN}
              isRequired
            />
            <Input label="City" placeholder="ereis@reiscomtracting.com" 
              className={inputCN}
              isRequired
              />
            <Input label="Suite/Unit" placeholder="123-456-789" 
              className={inputCN}
              />
            <Dropdown
              label = "Country"
              className={inputCN} 
              placeholder="United States" 
              options={[{label:"United States", value:"United States",}]}
            />
            <Input label="Postal Code" placeholder="123-456-789" 
              className={inputCN}
              isRequired
            />
            
          </CollapsibleSection>
        </div>
        <Button title="Save" onClick={()=>{}}/>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
