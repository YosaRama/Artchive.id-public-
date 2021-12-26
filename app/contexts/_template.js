// Libs
import { createContext, useState, useContext } from "react";

//? ============== Initial Context Value ============= ?//
const TemplateContext = createContext({
  value: "",
  condition: false,
  someFunction: function () {},
  someFunctionWithVariable: function (variable) {},
});
// * ====================================== * //

//? ============== Initial Context Providers ============= ?//
export function TemplateContextProvider(props) {
  // Set Condition Value
  const [isCondition, setIsCondition] = useState(false);
  function thisSetCondition() {
    setIsCondition(!isCondition);
  }
  // ==========================

  // Set Value
  const [value, setValue] = useState("");
  function thisSetValue(value) {
    setValue(value);
  }
  // ==========================

  // Value Context Assignment
  const context = {
    value: value, //? Assignment for context (value)
    condition: isCondition, //? Assignment for context (condition)
    someFunction: thisSetCondition, //? Assignment for context (function set condition)
    someFunctionWithVariable: thisSetValue, //? Assignment for context (function with value)
  };
  // ==========================

  return <TemplateContext.Provider value={context}>{props.children}</TemplateContext.Provider>;
}

//? ============== Context Provider export  ============= ?//

export default TemplateContextProvider;

// * ====================================== * //

//? ============== Context Hook Preparation ============= ?//

export const useTemplateCtx = () => useContext(TemplateContext);

// * ====================================== * //
